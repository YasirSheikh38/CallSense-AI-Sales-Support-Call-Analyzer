# main.py

import os
import shutil
import whisper
from fastapi import FastAPI, File, UploadFile, Depends
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app import models
from app.database import engine, SessionLocal
from app.dependencies import get_db
from app.models.call import Call


# Create DB tables
models.Base.metadata.create_all(bind=engine)

# FastAPI instance
app = FastAPI()

# Enable CORS (for frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # your frontend Vite URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Whisper model
model = whisper.load_model("base")

# Upload directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# ----------------------------
# Transcribe Endpoint
# ----------------------------
@app.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        result = model.transcribe(file_path)

        # Save to DB
        call = Call(filename=file.filename, transcript=result["text"])
        db.add(call)
        db.commit()
        db.refresh(call)

        return JSONResponse(content={
            "transcription": result["text"],
            "call_id": call.id
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


# ----------------------------
# Get All Transcriptions
# ----------------------------
@app.get("/transcriptions")
def get_transcriptions(db: Session = Depends(get_db)):
    transcriptions = db.query(Call).all()
    return transcriptions


