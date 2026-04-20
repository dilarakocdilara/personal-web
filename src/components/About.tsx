import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-serif-display">{t.about.title}</h2>
          <p className="text-lg text-[#6F6F6F] leading-relaxed max-w-xl">
            {t.about.p1}
          </p>
          <p className="text-lg text-[#6F6F6F] leading-relaxed max-w-xl">
            {t.about.p2}
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-[1px] bg-black"></div>
            <span className="text-sm uppercase tracking-widest text-black font-semibold">{t.about.role}</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/IMG_4896.jpeg" 
              alt="Dilara Koç" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black text-white p-6 rounded-full flex flex-col justify-center items-center text-center animate-pulse">
            <span className="text-xs uppercase font-inter tracking-tighter">{t.about.student}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
