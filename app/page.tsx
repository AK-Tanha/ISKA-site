'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Header, Footer } from '@/components/Navigation';
import { Hero, SectionHeading } from '@/components/UI';
import { ProfileCard, ServiceCard } from '@/components/Cards';
import { EXECUTIVE_BOARD, PROGRAMS, MOCK_EVENTS, MOCK_NEWS } from '@/lib/data';
import { ArrowRight, Calendar, MapPin, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />

      {/* About Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeading 
              title="Official National Representative"
              subtitle="ISKA Bangladesh was officially established on 29 April 2026 as the national representative body of the International Sport Kickboxing Association (ISKA) in Bangladesh."
            />
            <p className="text-gray-600 leading-relaxed">
              As one of the world&apos;s leading combat sports sanctioning organizations, ISKA is dedicated to the development, regulation, promotion, and sanctioning of professional and amateur combat sports, including Kickboxing, Muay Thai, MMA, Boxing, and other striking disciplines.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-iska-blue bg-iska-blue/5">
                <h4 className="font-display font-bold text-lg mb-1">Our Mission</h4>
                <p className="text-sm text-gray-500">Raising standards of combat sports through education and safety.</p>
              </div>
              <div className="p-4 border-l-4 border-iska-red bg-iska-red/5">
                <h4 className="font-display font-bold text-lg mb-1">Our Vision</h4>
                <p className="text-sm text-gray-500">Providing opportunities for athletes on the global stage.</p>
              </div>
            </div>
            <Link href="/about" className="btn-outline inline-flex items-center gap-2">
              Read Full Story <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="iskahero.jpg" 
              alt="Combat Training" 
              className="rounded-2xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-iska-blue rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-iska-red rounded-full blur-2xl opacity-20" />
          </div>
        </div>
      </section>

      {/* Director Welcome */}
      <section className="section-padding bg-iska-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-iska-blue/5 -skew-x-12 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img 
                    src="/Joint Secretary Mehedi Hassan Polok.png" 
                    alt="Mehedi Hassan Polok" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-iska-red p-6 rounded-xl shadow-xl">
                  <h4 className="text-2xl font-display font-bold italic">&quot;Excellence is a habit.&quot;</h4>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <span className="text-iska-red font-bold uppercase tracking-widest text-xs">Director&apos;s Welcome</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">Leading the New Era of <br/><span className="text-iska-blue-light">Combat Sports Excellence</span></h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed italic font-light">
                &quot;ISKA Bangladesh was established with a singular vision: to provide our athletes with a professional, safe, and world-class platform to showcase their skills. As the official national governing body, we are committed to bringing international standards to the grassroots level and ensuring that every Bangladeshi fighter has a pathway to the world stage.&quot;
              </p>
              <div className="pt-4">
                <h4 className="text-xl font-display font-bold text-white">Mehedi Hassan Polok</h4>
                <p className="text-gray-500 font-medium">National Director, ISKA Bangladesh</p>
              </div>
              <div className="flex gap-4 pt-6">
                 <Link href="/board" className="btn-primary">Meet the Board</Link>
                 <Link href="/contact" className="px-8 py-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors font-semibold">Join the Movement</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Affiliation */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">Part of the Global Network</p>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <span className="text-2xl font-display font-black text-gray-300">ISKA WORLD HQ</span>
              <span className="text-2xl font-display font-black text-gray-300">ISKA ASIA</span>
              <span className="text-2xl font-display font-black text-gray-300">OLYMPIC COMMITTEE</span>
              <span className="text-2xl font-display font-black text-gray-300">WADA APPROVED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <SectionHeading 
              title="Programs & Services"
              subtitle="Comprehensive support systems for the Bangladeshi combat sports community."
            />
            <Link href="/programs" className="mb-12 text-iska-blue font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              View All Programs <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.slice(0, 4).map((program, idx) => (
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

      {/* Board Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Executive Board"
            subtitle="Leading the national strategy for combat sports excellence."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVE_BOARD.slice(0, 3).map((member, idx) => (
              <ProfileCard 
                key={idx}
                name={member.name}
                image={member.image}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/board" className="btn-primary">
              View Full Board
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-iska-black text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <SectionHeading 
              title="Major Events"
              subtitle="Experience the thrill of professionally sanctioned combat sports."
              dark
            />
            <div className="flex gap-4">
              <Link href="/events" className="btn-primary">Upcoming Events</Link>
              <Link href="/events" className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors font-semibold">Past Results</Link>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {MOCK_EVENTS.map((event) => (
              <motion.div 
                key={event.id}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-linear-to-t from-iska-black via-iska-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-iska-red text-white text-[10px] font-bold uppercase tracking-widest rounded">Sanctioned</span>
                    <span className="text-iska-blue-light font-bold text-xs flex items-center gap-1">
                      <Calendar size={14} /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-iska-blue-light transition-colors">{event.title}</h3>
                  <p className="text-gray-400 flex items-center gap-2 mb-6">
                    <MapPin size={16} /> {event.location}
                  </p>
                  <Link href={`/events`} className="inline-flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                    Event Details <ArrowRight size={18} className="text-iska-red" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Partners Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading title="Latest News" />
              <div className="space-y-8">
                {MOCK_NEWS.map((news) => (
                  <div key={news.id} className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0 relative">
                       <img 
                        src={`https://picsum.photos/seed/news${news.id}/400/300`} 
                        alt={news.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                       />
                    </div>
                    <div className="space-y-3">
                      <span className="text-iska-red text-xs font-bold uppercase tracking-widest">{news.category}</span>
                      <h4 className="text-xl font-display font-bold group-hover:text-iska-blue transition-colors">{news.title}</h4>
                      <p className="text-gray-500 text-sm">{news.excerpt}</p>
                      <p className="text-xs text-gray-400 font-medium">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <SectionHeading title="Partners" />
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all p-4 opacity-60 hover:opacity-100 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/partner${i}/200/200`} 
                        alt={`Partner ${i}`} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-iska-blue p-8 rounded-2xl text-white">
                <h4 className="text-2xl font-display font-bold mb-4">Official Rankings</h4>
                <p className="text-iska-blue-light text-sm mb-6 leading-relaxed">Check the current national leaderboard across all combat disciplines.</p>
                <Link href="/rankings" className="w-full py-3 bg-white text-iska-blue font-bold rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  View Rankings <TrendingUp size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
