import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function MainLayout() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#faf9f6] text-zinc-900 selection:bg-purple-200 selection:text-purple-900 font-sans antialiased overflow-x-hidden">
        {/* Soft Ambient Ethereal Glows */}
        <AmbientBackground />

        {/* Floating Minimal Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
