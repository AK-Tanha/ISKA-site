'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { MOCK_NEWS } from '@/lib/data';
import { Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-12 sm:py-16">
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
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {MOCK_NEWS.map((item) => (
                  <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                       <Image 
                         src={`https://picsum.photos/seed/news-card${item.id}/600/400`} 
                         alt={item.title} 
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-500" 
                         referrerPolicy="no-referrer"
                         sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="p-8 space-y-4">
                      <span className="text-iska-red text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
                      <h3 className="text-lg sm:text-xl font-display font-bold group-hover:text-iska-blue transition-colors leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.excerpt}</p>
                      <div className="pt-4 flex justify-between items-center text-xs text-gray-400 font-bold border-t border-gray-50">
                        <span>{item.date}</span>
                        <Link href={`/news/${item.slug}`} className="text-iska-blue flex items-center gap-1 hover:gap-2 transition-all">
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
                <h4 className="text-lg sm:text-xl font-display font-bold mb-6 border-l-4 border-iska-red pl-4">Categories</h4>
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
                <h4 className="text-lg sm:text-xl font-display font-bold mb-6">Recent Reports</h4>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 relative">
                         <Image src={`https://picsum.photos/seed/report${i}/200/200`} alt="Report" fill className="object-cover transition-all" sizes="80px" />
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
