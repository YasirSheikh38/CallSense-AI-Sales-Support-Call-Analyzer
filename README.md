# 📞 CallSenseAI

**CallSenseAI** is an AI-powered transcription dashboard that lets users upload call recordings, automatically transcribe them using OpenAI’s Whisper model, and store the results in a PostgreSQL database. The frontend provides an interactive view of all transcriptions via a beautiful dashboard.

---

## 🚀 Features

- 🎙 Upload call audio files (MP3/WAV/M4A)
- 🤖 Auto-transcription using Whisper ASR (Automatic Speech Recognition)
- 🗃 Data stored securely in PostgreSQL
- 📊 Dashboard to view all call transcriptions
- ⚡️ FastAPI backend + React (Vite + TypeScript) frontend
- 💅 Styled with Tailwind CSS
- 🌐 Cross-origin support with CORS middleware

---

## 🛠 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Backend      | FastAPI, Whisper, SQLAlchemy |
| Frontend     | React, TypeScript, TailwindCSS |
| Database     | PostgreSQL             |
| Others       | Python-dotenv, CORS, Vite |

---

## 📁 Project Structure

```bash
CallSenseAI/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   └── call.py
│   │   └── database.py
│   ├── main.py
│   ├── .env
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── index.css
│   └── vite.config.ts
├── uploads/
├── README.md
└── .gitignore
````

---

## 🧪 Installation Guide

### 1️⃣ Backend Setup🐍 (FastAPI + Whisper)

```bash
#Go to backend directory
cd backend

#Create virtual environment
python -m venv venv
venv\Scripts\activate        # (On Windows)

#Install dependencies
pip install -r requirements.txt
```

📄 Create a `.env` file inside the `backend/` directory:


Start FastAPI server:

```bash
uvicorn main:app --reload
```

---

## 📦 Generate Requirements

If you install new packages in backend, update the file using:

```bash
pip freeze > requirements.txt
```


### 2️⃣ Frontend Setup (React + TailwindCSS)

```bash
#Go to frontend directory
cd frontend

#Install dependencies
npm install

#Start frontend
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 💡 Usage

1. Open the frontend in browser: `http://localhost:5173`
2. Upload a call audio file.
3. The backend transcribes and stores it.
4. View all transcriptions on the dashboard.

---


## 💡 What More Can Be Added?

Here are some ideas for future improvements or advanced features you can build:

* 📝 **Automatic Summarization** using Hugging Face (LLaMA, T5, etc.)
* 🔍 **Search functionality** for transcripts
* 🧑‍💼 **User authentication & role-based dashboards**
* 🗃️ **Audio file categorization/tagging**
* 🌐 **Multi-language support**
* 📈 **Analytics Dashboard** (e.g., most common words, length stats)
* 📥 **Download transcripts as PDF or DOC**
* 🔒 **Private vs public transcription control**
* ☁️ **Cloud storage integration (S3, GDrive)**

> 🙌 Suggestions and contributions are always welcome — feel free to fork and improve this project!

---


## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Yasir Sheikh**
GitHub: https://github.com/YasirSheikh38

---
