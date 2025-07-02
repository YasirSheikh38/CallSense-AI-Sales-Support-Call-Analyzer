# main.py

from fastapi import FastAPI, File, UploadFile, Depends
from fastapi.responses import JSONResponse
import os, shutil, whisper

from app import models
from app.database import engine
from app.dependencies import get_db
from app.models.call import Call
from sqlalchemy.orm import Session
from app.database import SessionLocal

from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load Whisper model once at startup
model = whisper.load_model("base")

# Uploads directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        result = model.transcribe(file_path)

        # Save to DB
        call = Call(
            filename=file.filename,
            transcript=result["text"]
        )
        db.add(call)
        db.commit()
        db.refresh(call)

        return JSONResponse(content={
            "transcription": result["text"],
            "call_id": call.id
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

# ✅ ADD THIS PART — GET endpoint and DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/transcriptions")
def get_transcriptions(db: Session = Depends(get_db)):
    transcriptions = db.query(Call).all()
    return transcriptions