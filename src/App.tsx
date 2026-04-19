import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Gallery from './components/Gallery';
import SkillsAndCertifications from './components/SkillsAndCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPage from './components/PrivacyPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const MainContent = () => {
  return (
    <>
      <HeroSection />
      <About />
      <ExperienceEducation />
      <Gallery />
      <SkillsAndCertifications />
      <Contact />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-black selection:text-white">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </Router>
  );
}
