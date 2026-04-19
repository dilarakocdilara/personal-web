import HeroSection from './components/HeroSection';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Gallery from './components/Gallery';
import SkillsAndCertifications from './components/SkillsAndCertifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <HeroSection />
      <About />
      <ExperienceEducation />
      <Gallery />
      <SkillsAndCertifications />
      <Footer />
    </div>
  );
}
