import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ExperienceEducation: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const education = t.experience.eduItems;
  const experience = t.experience.expItems;

  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-serif-display mb-12">{t.experience.educationTitle}</h2>
            <div className="space-y-12">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l border-black/10 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="text-xs font-inter uppercase tracking-widest text-[#6F6F6F]">{item.year}</span>
                  <h3 className="text-xl font-inter font-medium mt-2">{item.title}</h3>
                  <p className="text-sm font-inter text-[#6F6F6F] mt-1 italic">{item.location}</p>
                  <p className="text-base font-inter text-[#6F6F6F] mt-3 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-4xl font-serif-display mb-12">{t.experience.experienceTitle}</h2>
            <div className="space-y-12">
              {experience.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-black/10 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="text-xs font-inter uppercase tracking-widest text-[#6F6F6F]">{item.year}</span>
                  <h3 className="text-xl font-inter font-medium mt-2">{item.title}</h3>
                  <p className="text-sm font-inter text-[#6F6F6F] mt-1 italic">{item.location}</p>
                  <p className="text-base font-inter text-[#6F6F6F] mt-3 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
