n
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

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # (On Windows)
pip install -r requirements.txt
```

📄 Create a `.env` file inside the `backend/` directory:


Start FastAPI server:

```bash
uvicorn main:app --reload
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
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


