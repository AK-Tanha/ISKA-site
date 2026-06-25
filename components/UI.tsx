'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, Globe, Shield } from 'lucide-react';
import { STATS } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-iska-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/kickboxing/1920/1080?grayscale" 
          alt="Combat Sports"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-iska-black/60 via-iska-black/40 to-iska-black" />
        <div className="absolute inset-0 bg-linear-to-r from-iska-blue/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-iska-red/10 border border-iska-red/20 rounded-full text-iska-red text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-iska-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-iska-red"></span>
            </span>
            Official National Representative
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tighter">
            Building the Future of <span className="text-iska-blue-light">Combat Sports</span> in Bangladesh
          </h1>
          
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            Developing, Regulating and Promoting Combat Sports Excellence Across Bangladesh. Join the global ISKA network.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/about" className="btn-primary flex items-center gap-2 text-lg">
              Learn More <ArrowRight size={20} />
            </a>
            <a href="/contact" className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-md transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/assets/logo.jpg" 
                  alt="ISKA Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-2xl">ISKA Bangladesh</h3>
                <p className="text-gray-400">National Governing Body</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-iska-black bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-iska-black bg-iska-blue flex items-center justify-center text-white text-xs font-bold">
                  +50
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium">Recognized Officials & Clubs</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-iska-blue/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-iska-red/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, centered = false, dark = false }: { title: string, subtitle?: string, centered?: boolean, dark?: boolean }) {
  return (
    <div className={`space-y-4 mb-16 ${centered ? 'text-center mx-auto' : ''} ${centered ? 'max-w-2xl' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`w-12 h-1.5 bg-iska-red mb-4 ${centered ? 'mx-auto' : ''}`} />
        <h2 className={`text-4xl md:text-5xl font-display font-bold tracking-tighter ${dark ? 'text-white' : 'text-iska-black'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
