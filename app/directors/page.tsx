'use client';

import React from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { ProfileCard } from '@/components/Cards';
import { REGIONS } from '@/lib/data';
import { MapPin, User } from 'lucide-react';

export default function RegionalDirectors() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-iska-black py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-iska-blue)_0%,_transparent_70%)]" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Regional Directors" 
            subtitle="Leading the development of combat sports across every corner of Bangladesh."
            dark
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {REGIONS.map((region, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-iska-blue/10 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6 text-iska-blue">
                  <div className="p-3 bg-iska-blue/10 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{region.name} Region</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="py-12 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 relative overflow-hidden group/pending">
                    <img 
                      src={`https://picsum.photos/seed/${region.name.toLowerCase()}-placeholder/400/400?grayscale&blur=5`}
                      alt="Pending Appointment"
                      className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-700 group-hover/pending:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="w-16 h-16 bg-gray-100/80 backdrop-blur-sm rounded-full mb-4 relative z-10 flex items-center justify-center shadow-inner">
                      <User size={32} strokeWidth={1} className="text-gray-300" />
                    </div>
                    <p className="font-bold uppercase tracking-widest text-[10px] relative z-10 text-gray-400">Appointment Pending</p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We are currently evaluating candidates for the {region.name} Regional Director position. This role will be responsible for local club affiliation, event sanctioning, and talent identification.
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-amber-100">
                    {region.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-iska-blue rounded-3xl text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-display font-bold mb-6 tracking-tighter">Become a Regional Leader</h2>
              <p className="text-iska-blue-light text-lg mb-8 leading-relaxed">
                Are you a senior figure in the combat sports community? We are looking for dedicated individuals to lead our regional chapters and uphold ISKA standards of safety and excellence.
              </p>
              <a href="/contact" className="px-8 py-4 bg-white text-iska-blue font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors inline-block">
                Apply for Directorship
              </a>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
               <MapPin size={400} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
