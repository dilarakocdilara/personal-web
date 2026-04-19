import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Hammer, Palette, Globe, Target, Laptop, Languages } from 'lucide-react';

const SkillsAndCertifications: React.FC = () => {
  const certifications = [
    { title: "Indoor Skydiving Level 1", year: "2024" },
    { title: "Yoga Teacher Training", year: "2022-2023" },
    { title: "Ayurveda Abhangam Massage", year: "2023" },
    { title: "Freediving Level 1", year: "2022" }
  ];

  const technicalSkills = [
    { name: "Digital Tools", icon: <Laptop className="w-5 h-5" />, items: ["Rhino", "AutoCAD", "Adobe Suite"] },
    { name: "Production", icon: <Scissors className="w-5 h-5" />, items: ["Cutting", "Joining", "Shaping", "Assembling"] },
    { name: "Material Craft", icon: <Hammer className="w-5 h-5" />, items: ["Leather Repair", "Ceramics", "Textile Tech"] },
    { name: "Strategic", icon: <Target className="w-5 h-5" />, items: ["Creative Management", "Workflow Design", "Quality Control"] }
  ];

  const languages = [
    { name: "German", level: "Native / Fluent", width: "100%" },
    { name: "Turkish", level: "Native / Fluent", width: "100%" },
    { name: "English", level: "Fluent", width: "90%" },
    { name: "Spanish", level: "Intermediate", width: "60%" }
  ];

  return (
    <section id="skills" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Skills & Languages */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-serif-display mb-8">Technical Studio</h2>
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
                <h3 className="text-2xl font-serif-display">Languages</h3>
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
              <h2 className="text-4xl font-serif-display mb-8">Certifications</h2>
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
              <h3 className="text-3xl font-serif-display">Design Philosophy</h3>
              <p className="text-[#6F6F6F] font-inter leading-relaxed">
                Applying creative ideas to product manufacturing with a focus on hands-on learning. My multidisciplinary background in fashion, ceramics, and leather production allows me to bridge the gap between technical design and technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
