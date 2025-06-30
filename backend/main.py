# main.py

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import os
import shutil
import whisper

app = FastAPI()

# Load Whisper model once at startup
model = whisper.load_model("base")

# Uploads directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.post("/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    try:
        # Save the uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Transcribe using Whisper
        result = model.transcribe(file_path)

        return JSONResponse(content={"transcription": result["text"]})

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
