import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AcademicAchievements from './pages/AcademicAchievements';
import ProfessionalAchievements from './pages/ProfessionalAchievements';
import Certifications from './pages/Certifications';
import Interests from './pages/Interests';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic-achievements" element={<AcademicAchievements />} />
        <Route path="/professional-achievements" element={<ProfessionalAchievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
