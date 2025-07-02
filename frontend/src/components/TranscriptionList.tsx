// src/components/TranscriptionList.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Transcription {
  id: number;
  filename: string;
  transcript: string;
}

export default function TranscriptionList() {
  const [transcriptions, setTranscriptions] = useState<Transcription[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/transcriptions")
      .then((res) => res.json())
      .then((data) => setTranscriptions(data));
  }, []);

  if (transcriptions.length === 0) {
    return <p className="text-gray-500">No transcriptions found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {transcriptions.map((item) => (
        <Link
          to={`/summary/${item.id}`}
          key={item.id}
          className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg transition bg-gray-50 hover:bg-white"
        >
          <h3 className="text-lg font-semibold text-blue-600">{item.filename}</h3>
          <p className="text-gray-600 line-clamp-2">{item.transcript}</p>
        </Link>
      ))}
    </div>
  );
}
