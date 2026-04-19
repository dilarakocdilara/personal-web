import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6F6F6F]">{t.contact.label}</span>
            <h2 className="text-4xl sm:text-5xl font-serif-display mt-2 mb-8">{t.contact.title}</h2>
            <p className="text-lg text-[#6F6F6F] font-light leading-relaxed mb-12 max-w-md">
              {t.contact.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6F6F6F] font-bold">{t.contact.emailLabel}</p>
                  <a href="mailto:contact@derlara.uk" className="text-lg font-inter">contact@derlara.uk</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6F6F6F] font-bold">{t.contact.phoneLabel}</p>
                  <a href="tel:+4916095210695" className="text-lg font-inter">+49 160 95210695</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6F6F6F] font-bold">{t.contact.locationLabel}</p>
                  <p className="text-lg font-inter">{t.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-black/5"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 text-black">
              <input type="hidden" name="access_key" value="162a5de8-de6e-47e6-bd90-55b9e1056b8f" />
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-[#6F6F6F]">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder={t.contact.form.namePlaceholder} 
                  required 
                  className="w-full bg-[#FAFAFA] border-none rounded-2xl p-4 font-inter text-sm focus:ring-2 focus:ring-black/5 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-[#6F6F6F]">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder={t.contact.form.emailPlaceholder} 
                  required 
                  className="w-full bg-[#FAFAFA] border-none rounded-2xl p-4 font-inter text-sm focus:ring-2 focus:ring-black/5 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-[#6F6F6F]">{t.contact.form.message}</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={4} 
                  placeholder={t.contact.form.messagePlaceholder} 
                  required 
                  className="w-full bg-[#FAFAFA] border-none rounded-2xl p-4 font-inter text-sm focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white py-5 rounded-2xl font-inter font-medium flex items-center justify-center gap-2 hover:bg-black/90 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {t.contact.form.submit}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
