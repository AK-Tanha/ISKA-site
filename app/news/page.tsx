'use client';

import React from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { MOCK_NEWS } from '@/lib/data';
import { Search, ChevronRight, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <SectionHeading 
              title="Official News" 
              subtitle="Announcements, press releases, and updates from the ISKA Bangladesh headquarters."
            />
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-iska-blue outline-none"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <div className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/iska-news/1200/800" alt="Featured News" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-linear-to-t from-iska-black via-iska-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="px-3 py-1 bg-iska-red text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block">Official Announcement</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tighter leading-tight max-w-2xl">
                    ISKA Bangladesh Launches National Athlete Database
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    A revolutionary step towards professionalizing combat sports in the country through digital tracking.
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="btn-primary">Read More</button>
                    <div className="flex gap-4">
                      <button className="text-white hover:text-iska-blue-light transition-colors"><Share2 size={20} /></button>
                      <button className="text-white hover:text-iska-blue-light transition-colors"><Bookmark size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of smaller news */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {MOCK_NEWS.map((item) => (
                  <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                       <img 
                        src={`https://picsum.photos/seed/news-card${item.id}/600/400`} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                       />
                    </div>
                    <div className="p-8 space-y-4">
                      <span className="text-iska-red text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
                      <h3 className="text-2xl font-display font-bold group-hover:text-iska-blue transition-colors leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.excerpt}</p>
                      <div className="pt-4 flex justify-between items-center text-xs text-gray-400 font-bold border-t border-gray-50">
                        <span>{item.date}</span>
                        <Link href="#" className="text-iska-blue flex items-center gap-1 hover:gap-2 transition-all">
                          Read More <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div className="p-8 bg-iska-black text-white rounded-[2rem]">
                <h4 className="text-xl font-display font-bold mb-6 border-l-4 border-iska-red pl-4">Categories</h4>
                <ul className="space-y-4">
                  {['Press Releases', 'Tournament Reports', 'Official Notices', 'Training & Seminars', 'Interviews'].map((cat, idx) => (
                    <li key={idx} className="flex justify-between items-center group cursor-pointer">
                      <span className="text-gray-400 group-hover:text-iska-blue-light transition-colors font-medium">{cat}</span>
                      <span className="w-6 h-6 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-bold">12</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-gray-100 rounded-[2rem] bg-white">
                <h4 className="text-xl font-display font-bold mb-6">Recent Reports</h4>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                         <img src={`https://picsum.photos/seed/report${i}/200/200`} alt="Report" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-sm text-iska-black group-hover:text-iska-blue transition-colors leading-snug">Rules & Regs Seminar Dhaka 2026 Recap</h5>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">June 15, 2026</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
