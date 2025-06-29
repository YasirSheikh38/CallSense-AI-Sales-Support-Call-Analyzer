import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CallSummary from './pages/CallSummary';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/summary/:id" element={<CallSummary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
