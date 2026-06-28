'use client';

import React from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { ProfileCard } from '@/components/Cards';
import { EXECUTIVE_BOARD, REGIONS } from '@/lib/data';

export default function Board() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-24">
        <div className="container-custom">
          <SectionHeading 
            title="Executive Board" 
            subtitle="The leadership team responsible for the governance and development of combat sports in Bangladesh."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVE_BOARD.map((member, idx) => (
              <ProfileCard 
                key={idx}
                name={member.name}
                image={member.image}
                role={member.role}
                bio={member.bio}
                slug={member.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Regional Directors" 
            subtitle="Extending our reach across all divisions of Bangladesh."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {REGIONS.map((region, idx) => (
              <div key={idx} className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:bg-iska-blue hover:text-white transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center opacity-50 group-hover:opacity-100">
                  <span className="font-bold text-base sm:text-lg">{region.name[0]}</span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg mb-1">{region.name}</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest text-iska-red group-hover:text-iska-blue-light transition-colors">
                  {region.status}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-gray-500 italic">
            &quot;Director information coming soon. We are actively vetting leadership for regional representations.&quot;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
