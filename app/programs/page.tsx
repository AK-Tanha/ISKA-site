'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { ServiceCard } from '@/components/Cards';
import { PROGRAMS } from '@/lib/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Programs() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-iska-blue py-24 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Programs & Services" 
            subtitle="Professional development and sanctioning for the national combat sports ecosystem."
            dark
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, idx) => (
              <ServiceCard 
                key={idx}
                title={program.title}
                description={program.description}
                iconName={program.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-iska-blue">Register Your Club</h2>
              <p className="text-gray-600 leading-relaxed">
                Affiliate your gym with the official national governing body. Gain access to sanctioned events, certified coaching programs, and the national ranking system.
              </p>
              <ul className="space-y-3">
                {[
                  'Official ISKA Certification',
                  'Voting Rights in Assembly',
                  'Sanctioned Event Support',
                  'Marketing & Promotion'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="text-iska-red" size={18} /> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full md:w-auto">Start Registration</button>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden relative">
               <Image src="https://picsum.photos/seed/gym/600/600" alt="Club Registration" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
