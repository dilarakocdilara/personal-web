import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId: number;

    const monitorVideo = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      if (!isNaN(duration)) {
        // Fade in over 0.5s at the start
        if (currentTime < 0.5) {
          setOpacity(currentTime / 0.5);
        } 
        // Fade out over 0.5s before the end
        else if (currentTime > duration - 0.5) {
          setOpacity((duration - currentTime) / 0.5);
        } 
        else {
          setOpacity(1);
        }
      }

      frameId = requestAnimationFrame(monitorVideo);
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    frameId = requestAnimationFrame(monitorVideo);

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-inter">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-12 py-8 max-w-7xl mx-auto">
        <div className="text-3xl tracking-tight font-serif-display text-black">
          Dilara Koç<sup className="text-[10px] ml-0.5">®</sup>
        </div>
        <div className="hidden md:flex gap-10 items-center text-[13px] font-medium">
          <a href="#about" className="text-black transition-colors">Home</a>
          <a href="#about" className="text-[#6F6F6F] hover:text-black transition-colors">Education</a>
          <a href="#experience" className="text-[#6F6F6F] hover:text-black transition-colors">Experience</a>
          <a href="#skills" className="text-[#6F6F6F] hover:text-black transition-colors">Yoga</a>
          <button className="bg-black text-white px-7 py-3 rounded-full hover:scale-105 transition-all duration-300 text-xs font-semibold">
            Reach Us
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-40 flex flex-col items-center justify-center text-center px-10 pt-16">
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl max-w-[900px] font-normal font-serif-display leading-[0.92] tracking-[-2.46px] text-black animate-fade-rise">
          Beyond <span className="font-serif-italic text-[#6F6F6F]">silence,</span><br/>
          we build the <span className="font-serif-italic text-[#6F6F6F]">eternal.</span>
        </h1>

        <p className="text-lg max-w-[620px] mt-10 leading-relaxed text-[#6F6F6F] font-light animate-fade-rise-delay">
          Product Developer and Technical Designer currently at Frankfurt UAS. 
          From the tactile art of ceramics to technical automotive design, 
          I craft digital and physical havens for deep work and pure flows.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-black text-white px-14 py-5 rounded-full mt-10 text-[15px] tracking-wide transition-transform animate-fade-rise-delay-2"
        >
          View Portfolio
        </motion.button>
      </main>

      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" 
           style={{ top: '300px', inset: 'auto 0 0 0', position: 'absolute', height: 'calc(100% - 300px)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: opacity }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Instagram/Social Footer Info */}
      <div className="absolute bottom-8 left-12 z-50 text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F] font-bold">
        @der.lara.yoga <span className="mx-2 font-normal opacity-30">—</span> Design & Movement
      </div>

      {/* Decorative Location Label */}
      <div className="absolute bottom-8 right-12 z-50 text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F] font-bold">
        Frankfurt am Main, DE
      </div>
    </div>
  );
};

export default HeroSection;
