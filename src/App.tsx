import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Mercado from './pages/Mercado';
import Doacao from './pages/Doacao';
import Robotica from './pages/Robotica';
import Jovens from './pages/Jovens';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programas" element={<Home />} /> {/* Simplified for demo */}
            <Route path="/programas/mercado" element={<Mercado />} />
            <Route path="/programas/robotica" element={<Robotica />} />
            <Route path="/programas/jovens" element={<Jovens />} />
            <Route path="/doacao" element={<Doacao />} />
            {/* Fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
