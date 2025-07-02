import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.transcription);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Audio</h1>
      <input type="file" accept=".mp3" onChange={handleChange} />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Transcribe"}
      </button>

      {result && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Transcription:</h2>
          <p className="mt-2 p-4 bg-gray-100 rounded">{result}</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
