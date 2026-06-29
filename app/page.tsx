'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Header, Footer } from '@/components/Navigation';
import { Hero, SectionHeading } from '@/components/UI';
import { ProfileCard, ServiceCard } from '@/components/Cards';
import { EXECUTIVE_BOARD, PROGRAMS, MOCK_EVENTS, MOCK_NEWS } from '@/lib/data';
import { ArrowRight, Calendar, MapPin, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const boardScrollRef = useRef<HTMLDivElement>(null);
  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const newsScrollRef = useRef<HTMLDivElement>(null);
  const partnersScrollRef = useRef<HTMLDivElement>(null);
  const boardIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const eventsIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const newsIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const partnersIntervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const startCarousel = useCallback((el: HTMLDivElement | null, intervalRef: { current: ReturnType<typeof setInterval> | undefined }) => {
    if (!el || window.innerWidth >= 768) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const first = el.children[0] as HTMLElement | undefined;
      const second = el.children[1] as HTMLElement | undefined;
      if (!first) return;
      const firstRect = first.getBoundingClientRect();
      const gap = second ? second.getBoundingClientRect().left - firstRect.right : 0;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: firstRect.width + gap, behavior: 'smooth' });
      }
    }, 3000);
  }, []);

  const stopCarousel = useCallback((intervalRef: { current: ReturnType<typeof setInterval> | undefined }) => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startCarousel(boardScrollRef.current, boardIntervalRef);
    startCarousel(eventsScrollRef.current, eventsIntervalRef);
    startCarousel(newsScrollRef.current, newsIntervalRef);
    startCarousel(partnersScrollRef.current, partnersIntervalRef);
    const handleResize = () => {
      startCarousel(boardScrollRef.current, boardIntervalRef);
      startCarousel(eventsScrollRef.current, eventsIntervalRef);
      startCarousel(newsScrollRef.current, newsIntervalRef);
      startCarousel(partnersScrollRef.current, partnersIntervalRef);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      stopCarousel(boardIntervalRef);
      stopCarousel(eventsIntervalRef);
      stopCarousel(newsIntervalRef);
      stopCarousel(partnersIntervalRef);
      window.removeEventListener('resize', handleResize);
    };
  }, [startCarousel, stopCarousel]);

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
            <div className="lg:hidden">
              <Image 
                src="/iskahero.jpg" 
                alt="Combat Training" 
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              As one of the world&apos;s leading combat sports sanctioning organizations, ISKA is dedicated to the development, regulation, promotion, and sanctioning of professional and amateur combat sports, including Kickboxing, Muay Thai, MMA, Boxing, and other striking disciplines.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-iska-blue bg-iska-blue/5">
                <h4 className="font-display font-bold text-base sm:text-lg mb-1">Our Mission</h4>
                <p className="text-sm text-gray-500">Raising standards of combat sports through education and safety.</p>
              </div>
              <div className="p-4 border-l-4 border-iska-red bg-iska-red/5">
                <h4 className="font-display font-bold text-base sm:text-lg mb-1">Our Vision</h4>
                <p className="text-sm text-gray-500">Providing opportunities for athletes on the global stage.</p>
              </div>
            </div>
            <Link href="/about" className="btn-outline inline-flex items-center gap-2">
              Read Full Story <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image 
              src="/iskahero.jpg" 
              alt="Combat Training" 
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Director Welcome */}
      <section className="section-padding bg-iska-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-iska-blue/5 -skew-x-12 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative">
                  <Image 
                    src="/Joint Secretary Mehedi Hassan Polok.png" 
                    alt="Mehedi Hassan Polok" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="hidden lg:block absolute -bottom-6 -right-6 bg-iska-red p-6 rounded-xl shadow-xl">
                  <h4 className="text-xl sm:text-2xl font-display font-bold italic">&quot;Excellence is a habit.&quot;</h4>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <span className="text-iska-red font-bold uppercase tracking-widest text-xs">Director&apos;s Welcome</span>
                <h2 className="text-lg sm:text-xl md:text-5xl font-display font-bold tracking-tighter">Leading the New Era of <br/><span className="text-iska-blue-light">Combat Sports Excellence</span></h2>
              </div>
              <div className="lg:hidden">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative">
                  <Image 
                    src="/Joint Secretary Mehedi Hassan Polok.png" 
                    alt="Mehedi Hassan Polok" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    sizes="100vw"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed italic font-light">
                &quot;ISKA Bangladesh was established with a singular vision: to provide our athletes with a professional, safe, and world-class platform to showcase their skills. As the official national governing body, we are committed to bringing international standards to the grassroots level and ensuring that every Bangladeshi fighter has a pathway to the world stage.&quot;
              </p>
              <div className="pt-4">
                <h4 className="text-lg sm:text-xl font-display font-bold text-white">Mehedi Hassan Polok</h4>
                <p className="text-gray-500 font-medium">National Director, ISKA Bangladesh</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                 <Link href="/board" className="btn-primary text-center sm:text-left">Meet the Board</Link>
                 <Link href="/contact" className="px-8 py-4 sm:py-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors font-semibold text-center sm:text-left">Join the Movement</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Affiliation */}
      <section className="py-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs shrink-0">Part of the Global Network</p>
            <div className="hidden md:flex flex-wrap justify-center gap-12 items-center">
              <span className="text-sm sm:text-base md:text-2xl font-display font-black text-gray-300">ISKA WORLD HQ</span>
              <span className="text-sm sm:text-base md:text-2xl font-display font-black text-gray-300">ISKA ASIA</span>
              <span className="text-sm sm:text-base md:text-2xl font-display font-black text-gray-300">OLYMPIC COMMITTEE</span>
              <span className="text-sm sm:text-base md:text-2xl font-display font-black text-gray-300">WADA APPROVED</span>
            </div>
            <div className="md:hidden w-full overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex gap-16">
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">ISKA WORLD HQ</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">ISKA ASIA</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">OLYMPIC COMMITTEE</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">WADA APPROVED</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">ISKA WORLD HQ</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">ISKA ASIA</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">OLYMPIC COMMITTEE</span>
                <span className="text-xs sm:text-sm font-display font-black text-gray-300">WADA APPROVED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-6 sm:mb-12">
            <SectionHeading 
              title="Programs & Services"
              subtitle="Comprehensive support systems for the Bangladeshi combat sports community."
            />
            <Link href="/programs" className="hidden md:flex mb-12 text-iska-blue font-bold items-center gap-2 hover:gap-3 transition-all group">
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
          <Link href="/programs" className="md:hidden mt-8 text-iska-blue font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all group">
            View All Programs <ChevronRight size={20} />
          </Link>
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
          <div ref={boardScrollRef} onMouseEnter={() => stopCarousel(boardIntervalRef)} onMouseLeave={() => startCarousel(boardScrollRef.current, boardIntervalRef)} onTouchStart={() => stopCarousel(boardIntervalRef)} onTouchEnd={() => startCarousel(boardScrollRef.current, boardIntervalRef)} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {EXECUTIVE_BOARD.slice(0, 3).map((member, idx) => (
              <div key={idx} className="w-[80vw] sm:w-[45vw] md:w-auto shrink-0 snap-center">
                <ProfileCard 
                  name={member.name}
                  image={member.image}
                  role={member.role}
                  bio={member.bio}
                />
              </div>
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
            <div className="hidden md:flex gap-4">
              <Link href="/events" className="btn-primary">Upcoming Events</Link>
              <Link href="/events" className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors font-semibold">Past Results</Link>
            </div>
          </div>
          
          <div ref={eventsScrollRef} onMouseEnter={() => stopCarousel(eventsIntervalRef)} onMouseLeave={() => startCarousel(eventsScrollRef.current, eventsIntervalRef)} onTouchStart={() => stopCarousel(eventsIntervalRef)} onTouchEnd={() => startCarousel(eventsScrollRef.current, eventsIntervalRef)} className="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {MOCK_EVENTS.map((event) => (
              <motion.div 
                key={event.id}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] w-[85vw] lg:w-auto shrink-0 snap-center rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image src={event.image} alt={event.title} fill className="object-cover transition-all duration-700 scale-105 group-hover:scale-100" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-linear-to-t from-iska-black via-iska-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-iska-red text-white text-[10px] font-bold uppercase tracking-widest rounded">Sanctioned</span>
                    <span className="text-iska-blue-light font-bold text-xs flex items-center gap-1">
                      <Calendar size={14} /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-iska-blue-light transition-colors">{event.title}</h3>
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
          <div className="md:hidden flex flex-col gap-3 mt-8">
            <Link href="/events" className="btn-primary w-full text-center py-4">Upcoming Events</Link>
            <Link href="/events" className="w-full text-center py-4 border border-white/20 rounded-md hover:bg-white/10 transition-colors font-semibold">Past Results</Link>
          </div>
        </div>
      </section>

      {/* News & Partners Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading title="Latest News" />
              <div ref={newsScrollRef} onMouseEnter={() => stopCarousel(newsIntervalRef)} onMouseLeave={() => startCarousel(newsScrollRef.current, newsIntervalRef)} onTouchStart={() => stopCarousel(newsIntervalRef)} onTouchEnd={() => startCarousel(newsScrollRef.current, newsIntervalRef)} className="flex md:block gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-ps-[7.5vw] scroll-pe-[7.5vw]">
                {MOCK_NEWS.map((news) => (
                  <div key={news.id} className="group w-[85vw] md:w-auto shrink-0 snap-center flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-gray-300 md:mb-6">
                <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0 relative">
                       <Image 
                         src={`https://picsum.photos/seed/news${news.id}/400/300`} 
                         alt={news.title} 
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-500" 
                         referrerPolicy="no-referrer"
                         sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="space-y-3">
                      <span className="text-iska-red text-xs font-bold uppercase tracking-widest">{news.category}</span>
                      <h4 className="text-lg sm:text-xl font-display font-bold group-hover:text-iska-blue transition-colors">{news.title}</h4>
                      <p className="text-gray-500 text-sm">{news.excerpt}</p>
                      <p className="text-xs text-gray-400 font-medium">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/news" className="hidden md:inline-flex mt-6 text-iska-blue font-bold items-center gap-2 hover:gap-3 transition-all group">
                View All News <ChevronRight size={20} />
              </Link>
              <Link href="/news" className="md:hidden mt-6 text-iska-blue font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all group">
                View All News <ChevronRight size={20} />
              </Link>
            </div>
            
            <div className="space-y-12">
              <div>
                <SectionHeading title="Partners" />
                {/* Mobile: auto-scrolling marquee */}
                <div className="md:hidden w-full overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
                    {[1,2,3,4,1,2,3,4].map((i, idx) => (
                      <div key={idx} className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-gray-50 rounded-xl opacity-60 overflow-hidden relative flex items-center justify-center p-2">
                        <Image 
                          src={`https://picsum.photos/seed/partner${i}/200/200`}
                          alt={`Partner ${i}`}
                          width={128}
                          height={128}
                          className="object-contain w-full h-full p-2"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Desktop: grid */}
                <div ref={partnersScrollRef} className="hidden md:grid md:grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center transition-all p-4 opacity-60 hover:opacity-100 overflow-hidden relative">
                      <Image 
                        src={`https://picsum.photos/seed/partner${i}/200/200`} 
                        alt={`Partner ${i}`} 
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                        sizes="50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
               <div className="bg-iska-blue p-6 sm:p-8 rounded-2xl text-white">
                <h4 className="text-lg sm:text-xl font-display font-bold mb-4">Official Rankings</h4>
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
