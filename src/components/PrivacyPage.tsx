import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white font-inter text-black selection:bg-black selection:text-white">
      <nav className="border-b border-black/5 py-8 px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl tracking-tight font-serif-display text-black">
            Dilara Koç<sup className="text-[10px] ml-0.5">®</sup>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[#6F6F6F] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t.privacy.back}
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-24 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-6xl font-serif-display leading-tight">{t.privacy.title}</h1>
          
          {t.privacy.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-widest text-[#6F6F6F]">{section.title}</h2>
              <p className="text-lg text-[#6F6F6F] font-light leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          <div className="pt-12 border-t border-black/5">
            <p className="text-sm text-[#6F6F6F] font-bold uppercase tracking-widest">{t.privacy.date}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPage;
