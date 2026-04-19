import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    { seed: 'yoga-pose-1', title: 'Flow & Movement', category: 'Yoga' },
    { seed: 'ceramics-process', title: 'Hand-crafted Ceramics', category: 'Craft' },
    { seed: 'studio-design', title: 'Technical Drafting', category: 'Design' },
    { seed: 'yoga-nature', title: 'Outdoor Practice', category: 'Movement' },
    { seed: 'leather-work', title: 'Material Studies', category: 'Leather' },
    { seed: 'industrial-design', title: 'CAD Visualization', category: 'Product' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6F6F6F]">Visual Journal</span>
            <h2 className="text-4xl sm:text-5xl font-serif-display mt-2">Captured Moments</h2>
          </div>
          <a 
            href="https://instagram.com/der.lara.yoga" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:text-[#6F6F6F] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @der.lara.yoga
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
            >
              <img 
                src={`https://picsum.photos/seed/${img.seed}/800/800`} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] uppercase tracking-widest font-medium opacity-70 mb-1">{img.category}</span>
                <h3 className="text-xl font-serif-display">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
