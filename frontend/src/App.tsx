import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadForm from './pages/UploadForm';
import Dashboard from './pages/Dashboard';
import CallSummary from './pages/CallSummary';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<UploadForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/summary/:id" element={<CallSummary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
