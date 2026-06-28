'use client';

import React from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { motion } from 'motion/react';
import { Shield, Globe, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-iska-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-iska-blue/10 blur-3xl rounded-full translate-x-1/2" />
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="About ISKA Bangladesh" 
            subtitle="The official national representative of the International Sport Kickboxing Association in Bangladesh."
            dark
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                ISKA Bangladesh was officially established on 29 April 2026 as the national representative body of the International Sport Kickboxing Association (ISKA) in Bangladesh. As the new South Asian member nation of ISKA, Bangladesh has been officially recognized within ISKA&apos;s global network, further strengthening the organization&apos;s presence across the international combat sports community.
              </p>
              <p>
                As one of the world&apos;s leading combat sports sanctioning organizations, ISKA is dedicated to the development, regulation, promotion, and sanctioning of professional and amateur combat sports, including Kickboxing, Muay Thai, MMA, Boxing, and other striking disciplines.
              </p>
              <p>
                Under the leadership of Mehedi Hasan Polok, Founder and National Director of ISKA Bangladesh, the organization is committed to raising the standards of combat sports throughout Bangladesh by focusing on education, training, professionalism, safety, and international best practices.
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-iska-blue/10 rounded-lg flex items-center justify-center text-iska-blue">
                    <Target size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-iska-black">Our Vision</h4>
                  <p className="text-sm">To build a stronger, safer, and more professional combat sports community in Bangladesh.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-iska-red/10 rounded-lg flex items-center justify-center text-iska-red">
                    <Shield size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-iska-black">Our Mission</h4>
                  <p className="text-sm">Create sustainable opportunities for athletes and officials to compete globally.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 text-iska-blue">Core Values</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Excellence', desc: 'Highest standards in officiating and athlete performance.' },
                    { title: 'Integrity', desc: 'Fairness, transparency, and sporting honor in all events.' },
                    { title: 'Safety', desc: 'Athlete welfare as the absolute highest priority.' },
                    { title: 'Inclusion', desc: 'Opening pathways for everyone regardless of background.' }
                  ].map((val, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="mt-1 text-iska-red font-bold">0{idx + 1}.</div>
                      <div>
                        <h5 className="font-bold text-iska-black">{val.title}</h5>
                        <p className="text-sm text-gray-500">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-iska-black text-white rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={120} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 relative z-10">International Recognition</h3>
                <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">
                  Bangladeshi athletes can now compete for official ISKA World and Regional titles, with their results tracked in the global database.
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <Award className="text-iska-blue-light" size={32} />
                  <span className="font-bold text-base sm:text-lg">ISKA Global Network Member</span>
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
