import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Call {
  id: string;
  date?: string;
  emotion?: string;
  summary?: string;
}

const Dashboard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [calls, setCalls] = useState<Call[]>([]);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert('Please select an audio file.');
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData);
      setCalls([...calls, res.data]);
    } catch (err) {
      alert('Upload failed.');
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Upload Call</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Recent Calls</h2>
      <div className="space-y-3">
        {calls.map((call) => (
          <div
            key={call.id}
            onClick={() => navigate(`/summary/${call.id}`)}
            className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer"
          >
            <div>📅 {call.date || 'Today'}</div>
            <div>😊 Emotion: {call.emotion || 'Unknown'}</div>
            <div>🧠 Summary: {call.summary?.slice(0, 60)}...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
