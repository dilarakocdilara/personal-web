import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Hammer, Palette, Globe, Target, Laptop, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SkillsAndCertifications: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const certifications = [
    { title: "Indoor Skydiving Level 1", year: "2024" },
    { title: t.language === 'en' ? "Yoga Teacher Training" : t.language === 'de' ? "Yogalehrer Ausbildung" : "Yoga Eğitmenlik Eğitimi", year: "2022-2023" },
    { title: t.language === 'en' ? "Ayurveda Abhangam Massage" : t.language === 'de' ? "Ayurveda Abhangam Massage" : "Ayurveda Abhangam Masaj Eğitimi", year: "2023" },
    { title: "Freediving Level 1", year: "2022" }
  ];

  const icons = [<Laptop className="w-5 h-5" />, <Scissors className="w-5 h-5" />, <Hammer className="w-5 h-5" />, <Target className="w-5 h-5" />];

  const technicalSkills = t.skills.skillGroups.map((group, idx) => ({
    ...group,
    icon: icons[idx]
  }));

  const languages = t.skills.languages.map((lang, idx) => ({
    ...lang,
    width: idx === 0 || idx === 1 ? "100%" : idx === 2 ? "90%" : "60%"
  }));

  return (
    <section id="skills" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Skills & Languages */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-serif-display mb-8">{t.skills.technicalTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {technicalSkills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-6 border border-black/5 rounded-2xl bg-[#FAFAFA]"
                  >
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">{skill.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="text-sm text-[#6F6F6F] font-inter">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Languages className="w-6 h-6" />
                <h3 className="text-2xl font-serif-display">{t.skills.langTitle}</h3>
              </div>
              <div className="space-y-6 max-w-md">
                {languages.map((lang, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-inter">
                      <span className="font-bold text-black uppercase tracking-widest text-[10px]">{lang.name}</span>
                      <span className="text-[#6F6F6F]">{lang.level}</span>
                    </div>
                    <div className="h-[2px] w-full bg-black/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.width }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Philosophy */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-serif-display mb-8">{t.skills.certTitle}</h2>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl border border-black/5 flex justify-between items-center group hover:bg-black hover:text-white transition-all duration-500"
                  >
                    <div>
                      <h3 className="font-inter font-medium">{cert.title}</h3>
                      <span className="text-xs uppercase tracking-widest opacity-60 font-inter">{cert.year}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Globe className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-black text-white rounded-3xl space-y-6">
              <Palette className="w-8 h-8 text-[#6F6F6F]" />
              <h3 className="text-3xl font-serif-display">{t.skills.philosophyTitle}</h3>
              <p className="text-[#6F6F6F] font-inter leading-relaxed">
                {t.skills.philosophyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
