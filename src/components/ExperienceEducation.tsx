import React from 'react';
import { motion } from 'motion/react';

const ExperienceEducation: React.FC = () => {
  const education = [
    {
      year: "2024 – Present",
      title: "B.Eng. in Product Development and Technical Design",
      location: "University of Applied Sciences Frankfurt",
      description: "Focusing on innovative product manufacturing and technical design processes."
    },
    {
      year: "2018 – 2019",
      title: "Fachoberschule Frankfurt",
      location: "Specialization: Textile and Clothing Technology",
      description: "Deepening knowledge in material science and textile processing."
    },
    {
      year: "2015 – 2018",
      title: "Certified Clothing Technician",
      location: "State-Recognized Vocational School Aschaffenburg",
      description: "Bekleidungstechnischer Assistent."
    }
  ];

  const experience = [
    {
      year: "2020 – 2021",
      title: "Creative Management",
      location: "Green MNKY",
      description: "Responsible for social content, video editing, products photography, and leading TikTok content creation."
    },
    {
      year: "2017",
      title: "Wedding Dress Seamstress",
      location: "Izmir, Turkey",
      description: "Concept Designer, Alterations Specialist, and Maker."
    },
    {
      year: "2014 – 2020",
      title: "Diverse Technical Roles",
      location: "Various Locations",
      description: "Repairing leather shoes, bags, and belts; ceramic manufacturing contribution; sales professional in diverse markets."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-serif-display mb-12">Education</h2>
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
            <h2 className="text-4xl font-serif-display mb-12">Experience</h2>
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
