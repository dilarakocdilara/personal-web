import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-inter text-black selection:bg-black selection:text-white">
      <nav className="border-b border-black/5 py-8 px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl tracking-tight font-serif-display text-black">
            Dilara Koç<sup className="text-[10px] ml-0.5">®</sup>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[#6F6F6F] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-24 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-6xl font-serif-display leading-tight">Privacy Policy</h1>
          
          <section className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6F6F6F]">1. General Information</h2>
            <p className="text-lg text-[#6F6F6F] font-light leading-relaxed">
              This privacy policy informs you about the type, scope, and purpose of the processing of personal data within my website and the associated functions and content.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6F6F6F]">2. Data Collection</h2>
            <p className="text-lg text-[#6F6F6F] font-light leading-relaxed">
              When you use the contact form, the data you enter is sent to me via Web3Forms. This data includes your name, email address, and the content of your message. I only use this data to process your request and communicate with you.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6F6F6F]">3. External Services</h2>
            <p className="text-lg text-[#6F6F6F] font-light leading-relaxed">
              I use Web3Forms to provide the contact form functionality. By submitting the form, you agree that your data will be processed by Web3Forms in accordance with their privacy policy. I do not use tracking cookies or third-party analytics services on this website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#6F6F6F]">4. Your Rights</h2>
            <p className="text-lg text-[#6F6F6F] font-light leading-relaxed">
              You have the right to receive information about the personal data stored about you at any time. You also have the right to correct, block, or delete this data. Please contact me at contact@derlara.uk for any inquiries regarding your data.
            </p>
          </section>

          <div className="pt-12 border-t border-black/5">
            <p className="text-sm text-[#6F6F6F] font-bold uppercase tracking-widest">Effective Date: April 19, 2026</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPage;
