import React from 'react';
import { motion } from 'motion/react';
import { Camera, Scissors, Hammer, Palette, Globe, Target } from 'lucide-react';

const SkillsAndCertifications: React.FC = () => {
  const certifications = [
    { title: "Indoor Skydiving Level 1", year: "2024" },
    { title: "Yoga Teacher Training", year: "2022-2023" },
    { title: "Ayurveda Abhangam Massage", year: "2023" },
    { title: "Freediving Level 1", year: "2022" }
  ];

  const technicalSkills = [
    { name: "CAD Tools", icon: <Target className="w-5 h-5" />, items: ["Rhino", "AutoCAD"] },
    { name: "Production", icon: <Scissors className="w-5 h-5" />, items: ["Cutting", "Joining", "Assembling"] },
    { name: "Materials", icon: <Hammer className="w-5 h-5" />, items: ["Fashion", "Ceramics", "Leather"] },
    { name: "Creative", icon: <Camera className="w-5 h-5" />, items: ["Video Editing", "Content Strategy", "Digital Art"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Skills */}
          <div className="flex-[2]">
            <h2 className="text-4xl font-serif-display mb-12">Technical Studio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {technicalSkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-black/5 rounded-2xl hover:border-black/20 transition-all duration-300 bg-[#FAFAFA]"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-6">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-inter font-semibold mb-4">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-black/5 rounded-full text-sm text-[#6F6F6F]">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex-1">
            <h2 className="text-4xl font-serif-display mb-12">Movement & Soul</h2>
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
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
