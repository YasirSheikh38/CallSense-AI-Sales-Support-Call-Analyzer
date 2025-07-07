# 🎙️ CallSense AI — Audio Transcription and Dashboard App

CallSense AI is a full-stack application that allows users to upload audio files, transcribe them using OpenAI's Whisper model, and store the transcriptions in a PostgreSQL database. Users can view all uploaded transcriptions on a clean, responsive dashboard UI.

---

## 📁 Project Structure

```

CallSenseAI/
├── backend/
│   ├── app/
│   │   ├── database.py
│   │   ├── dependencies.py
│   │   ├── models/
│   │   │   ├── **init**.py
│   │   │   └── call.py
│   │   └── summarizer.py (optional)
│   ├── main.py
│   ├── .env
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── index.html
│   ├── tailwind.config.ts
│   └── postcss.config.js
└── README.md

````

---

## 🚀 Features

- 🎧 Upload `.mp3` or `.wav` audio files
- 🧠 Transcribe audio using Whisper AI
- 💾 Save transcriptions to PostgreSQL
- 📋 View transcriptions in a beautiful dashboard
- ⚡ Built with FastAPI + React + TailwindCSS

---

## 🧪 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Backend    | FastAPI, SQLAlchemy, Whisper, PostgreSQL |
| Frontend   | React, TypeScript, TailwindCSS           |
| Dev Tools  | Vite, .env, Git, Uvicorn, npm            |

---

## ⚙️ Setup Instructions

### 🐍 Backend (FastAPI + Whisper)

1. **Go to backend directory**
   ```bash
   cd backend
````

2. **Create virtual environment**

   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure `.env` file**

   ```
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/callsenseai
   ```

5. **Run server**

   ```bash
   uvicorn main:app --reload
   ```

---

### 🌐 Frontend (React + TailwindCSS)

1. **Go to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start frontend**

   ```bash
   npm run dev
   ```

---


## 🔐 Environment Variables

### Required in `.env` file (backend):

```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/callsenseai
```

> Optional (if using Hugging Face):

```env
HUGGINGFACE_API_KEY=your_token_here
```

---

## 📦 Generate Requirements

If you install new packages in backend, update the file using:

```bash
pip freeze > requirements.txt
```

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

Pull requests are welcome. For major changes, please open an issue first.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


