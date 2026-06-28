'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, ExternalLink, Image as ImageIcon, Camera, Video, FileText } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'All Media', icon: ImageIcon },
  { id: 'photos', name: 'Photos', icon: Camera },
  { id: 'videos', name: 'Videos', icon: Video },
  { id: 'certs', name: 'Certifications', icon: FileText },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Media Gallery" 
            subtitle="Capturing the moments of glory, dedication, and technical excellence."
            centered
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === cat.id 
                    ? 'bg-iska-blue text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Sample items with different sizes for masonry-like feel */}
            {[
              { id: 1, type: 'photos', span: 'lg:row-span-2', seed: 'fighter1' },
              { id: 2, type: 'videos', span: '', seed: 'match1' },
              { id: 3, type: 'photos', span: 'lg:col-span-2', seed: 'award1' },
              { id: 4, type: 'certs', span: '', seed: 'cert1' },
              { id: 5, type: 'photos', span: '', seed: 'training1' },
              { id: 6, type: 'videos', span: 'lg:row-span-2', seed: 'seminar1' },
              { id: 7, type: 'photos', span: '', seed: 'team1' },
            ].map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 ${item.span}`}
              >
                <Image 
                  src={`https://picsum.photos/seed/${item.seed}/800/800`} 
                  alt="Gallery item"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-iska-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-iska-red">{item.type}</span>
                    <h4 className="text-white font-display font-bold text-lg">National Seminar Dhaka 2026</h4>
                    <div className="flex gap-4 pt-2">
                      <button className="text-white hover:text-iska-blue-light"><Maximize2 size={18} /></button>
                      {item.type === 'videos' && <button className="text-white hover:text-iska-blue-light"><Play size={18} /></button>}
                      <button className="text-white hover:text-iska-blue-light"><ExternalLink size={18} /></button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="btn-outline">Load More Media</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
