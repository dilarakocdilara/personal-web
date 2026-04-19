import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-serif-display">About Dilara</h2>
          <p className="text-lg text-[#6F6F6F] leading-relaxed max-w-xl">
            I am Dilara Koç, currently pursuing a Bachelor’s degree in Product Development and Technical Design at the University of Applied Sciences Frankfurt. 
            I’m passionate about applying creative ideas to product manufacturing and hands-on learning.
          </p>
          <p className="text-lg text-[#6F6F6F] leading-relaxed max-w-xl">
            My background in fashion, ceramics, and leather production provides a strong foundation for adapting to new technical challenges. 
            I believe in the intersection of traditional craftsmanship and modern technical design.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-[1px] bg-black"></div>
            <span className="text-sm uppercase tracking-widest text-black font-semibold">Creator & Designer</span>
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
              src="https://picsum.photos/seed/dilara-portrait/800/1000" 
              alt="Dilara Koç" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black text-white p-6 rounded-full flex flex-col justify-center items-center text-center animate-pulse">
            <span className="text-xs uppercase font-inter tracking-tighter">B.Eng. Student</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
