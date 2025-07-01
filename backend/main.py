# main.py

from fastapi import FastAPI, File, UploadFile, Depends
from fastapi.responses import JSONResponse
import os
import shutil
import whisper

from sqlalchemy.orm import Session
from app.database import engine, get_db
from app.models import call
from app.models.call import Call

# Create tables if not already present
call.Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI()

# Load Whisper model once at startup
model = whisper.load_model("base")

# Uploads directory setup
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Transcribe endpoint
@app.post("/transcribe")
async def transcribe_audio(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    try:
        # Save uploaded file locally
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Transcribe using Whisper
        result = model.transcribe(file_path)
        transcription = result["text"]

        # Save to database
        call_entry = Call(filename=file.filename, transcript=transcription)
        db.add(call_entry)
        db.commit()
        db.refresh(call_entry)

        return JSONResponse(content={
            "id": call_entry.id,
            "filename": call_entry.filename,
            "transcription": call_entry.transcript,
            "created_at": str(call_entry.created_at)
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
