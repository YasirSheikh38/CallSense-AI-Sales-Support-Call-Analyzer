// src/pages/Dashboard.tsx

import { Link } from "react-router-dom";
import TranscriptionList from "../components/TranscriptionList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-800">📋 Call Transcriptions</h1>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ⬅ Back to Upload
          </Link>
        </div>

        <p className="text-gray-600 mb-8">
          Click on any call below to view its full transcription summary.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6">
          <TranscriptionList />
        </div>
      </div>
    </div>
  );
}
