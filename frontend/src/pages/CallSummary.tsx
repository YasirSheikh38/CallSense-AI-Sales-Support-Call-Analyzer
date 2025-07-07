// src/pages/CallSummary.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CallSummary() {
  const { id } = useParams();
  const [transcription, setTranscription] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Step 1: Get the transcription
        const res = await axios.get(`http://localhost:8000/calls/${id}`);
        setTranscription(res.data.transcript);

        // Step 2: Send transcription to summarization endpoint
        const summaryRes = await axios.post("http://localhost:8000/summary", {
          text: res.data.transcript,
        });

        setSummary(summaryRes.data.summary);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Loading summary...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Call Summary</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Full Transcription:</h3>
        <p className="whitespace-pre-wrap">{transcription}</p>
      </div>
      <div>
        <h3 className="font-semibold">Generated Summary:</h3>
        <p className="whitespace-pre-wrap">{summary}</p>
      </div>
    </div>
  );
}
