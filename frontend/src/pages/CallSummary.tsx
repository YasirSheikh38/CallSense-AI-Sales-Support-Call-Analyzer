import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface CallDetail {
  id: string;
  summary: string;
  emotion: string;
  transcript: string;
}

const CallSummary = () => {
  const { id } = useParams();
  const [call, setCall] = useState<CallDetail | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/call/${id}`).then((res) => {
      setCall(res.data);
    });
  }, [id]);

  if (!call) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Call Summary</h1>

      <div className="mb-4">
        <strong>🧠 Summary:</strong>
        <p>{call.summary}</p>
      </div>

      <div className="mb-4">
        <strong>😊 Sentiment:</strong> {call.emotion}
      </div>

      <div className="mb-4">
        <strong>📝 Transcript:</strong>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">{call.transcript}</pre>
      </div>
    </div>
  );
};

export default CallSummary;
