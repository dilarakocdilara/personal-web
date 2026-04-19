import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif-display">Dilara Koç<sup className="text-xs">®</sup></h3>
            <p className="text-[#6F6F6F] font-inter leading-relaxed max-w-xs">
              Product Developer and Technical Designer exploring the boundaries between the physical and digital.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-black">Contact</h4>
            <div className="space-y-4 font-inter text-[#6F6F6F]">
              <a href="mailto:contact@derlara.uk" className="flex items-center gap-3 hover:text-black transition-colors">
                <Mail className="w-4 h-4" />
                contact@derlara.uk
              </a>
              <a href="tel:+4916095210695" className="flex items-center gap-3 hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
                +49 160 95210695
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                Aschaffenburg, Germany
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-black">Social</h4>
            <div className="space-y-4 font-inter text-[#6F6F6F]">
              <a href="https://instagram.com/der.lara.yoga" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
                @der.lara.yoga
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6F6F6F] uppercase tracking-widest font-medium">
          <p>© 2026 Dilara Koç. Built for the Eternal.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
