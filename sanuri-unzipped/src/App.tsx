import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import ProblemInput from './pages/nexus/ProblemInput';
import ProblemAnalysis from './pages/nexus/ProblemAnalysis';
import RecommendedSolutions from './pages/nexus/RecommendedSolutions';
import VisualRoadmap from './pages/nexus/VisualRoadmap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="solutions" element={<div className="text-white p-8">My Solutions (Coming Soon)</div>} />
          <Route path="profile" element={<div className="text-white p-8">Profile (Coming Soon)</div>} />
          <Route path="settings" element={<div className="text-white p-8">Settings (Coming Soon)</div>} />
        </Route>
        
        {/* Nexus AI Flow (inside DashboardLayout for sidebar navigation) */}
        <Route path="/nexus-ai" element={<DashboardLayout />}>
          <Route index element={<ProblemInput />} />
          <Route path="analysis" element={<ProblemAnalysis />} />
          <Route path="solutions" element={<RecommendedSolutions />} />
          <Route path="roadmap" element={<VisualRoadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
