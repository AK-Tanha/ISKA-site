'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { MOCK_EVENTS } from '@/lib/data';
import { Calendar, MapPin, Ticket, Clock, Info } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const now = new Date();

  const upcomingEvents = MOCK_EVENTS
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = MOCK_EVENTS
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const eventsByMonth = [...MOCK_EVENTS]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reduce((acc, event) => {
      const d = new Date(event.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(event);
      return acc;
    }, {} as Record<string, typeof MOCK_EVENTS>);

  const renderEventCard = (event: typeof MOCK_EVENTS[0], isPast: boolean) => (
    <Link key={event.id} href={`/events/${event.id}`} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="md:w-2/5 aspect-video md:aspect-[4/5] relative overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${isPast ? 'bg-gray-500' : 'bg-iska-blue'} text-white text-[10px] font-bold uppercase tracking-widest rounded-full`}>{isPast ? 'Completed' : 'Coming Soon'}</span>
        </div>
      </div>

      <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-iska-red font-bold text-xs uppercase tracking-widest">
            <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 6:00 PM</span>
          </div>
          <h3 className="text-lg sm:text-xl font-display font-bold group-hover:text-iska-blue transition-colors leading-tight">{event.title}</h3>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <MapPin size={16} className="text-iska-blue" /> {event.location}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {['Kickboxing', 'MMA', 'Muay Thai'].map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-[10px] font-bold uppercase">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-4">
          <span className={`flex-1 ${isPast ? 'btn-secondary' : 'btn-primary'} py-3 flex items-center justify-center gap-2 text-sm`}>
            {isPast ? <> <Info size={18} /> View Results</> : <><Ticket size={18} /> Get Tickets</>}
          </span>
          <span className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            <Info size={18} className="text-gray-400" />
          </span>
        </div>
      </div>
    </Link>
  );

  const tabConfig = [
    { key: 'upcoming', label: 'Upcoming Events' },
    { key: 'past', label: 'Past Events' },
    { key: 'calendar', label: 'Event Calendar' },
  ] as const;

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-iska-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-iska-red/10 to-iska-blue/10" />
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Official Events" 
            subtitle="The premier stage for combat sports in Bangladesh. Sanctioned, professional, and secure."
            dark
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-gray-100">
            {tabConfig.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-bold pb-3 sm:pb-4 text-sm sm:text-base transition-colors ${
                  activeTab === tab.key
                    ? 'text-iska-blue border-b-2 border-iska-blue'
                    : 'text-gray-400 hover:text-iska-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {upcomingEvents.length > 0 ? upcomingEvents.map(e => renderEventCard(e, false)) : (
                <p className="text-gray-400 col-span-2 text-center py-12">No upcoming events at this time.</p>
              )}
            </div>
          )}

          {activeTab === 'past' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {pastEvents.map(e => renderEventCard(e, true))}
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="space-y-12">
              {Object.entries(eventsByMonth).map(([key, events]) => {
                const [year, month] = key.split('-');
                return (
                  <div key={key}>
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-2xl font-display font-bold text-iska-black">{MONTH_NAMES[parseInt(month) - 1]} {year}</h3>
                      <div className="h-px flex-1 bg-gray-100" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {events.map(event => {
                        const isPast = new Date(event.date) < now;
                        return (
                          <Link key={event.id} href={`/events/${event.id}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="aspect-video relative overflow-hidden">
                              <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                            </div>
                            <div className="p-5 space-y-3">
                              <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full ${isPast ? 'bg-gray-100 text-gray-500' : 'bg-iska-blue/10 text-iska-blue'}`}>{isPast ? 'Completed' : 'Upcoming'}</span>
                              <h4 className="font-display font-bold text-sm group-hover:text-iska-blue transition-colors leading-tight">{event.title}</h4>
                              <p className="text-gray-400 text-xs flex items-center gap-1.5"><Calendar size={12} /> {event.date}</p>
                              <p className="text-gray-400 text-xs flex items-center gap-1.5"><MapPin size={12} /> {event.location}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Countdown / Featured Section */}
          <div className="mt-20 p-6 sm:p-12 bg-iska-black rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-iska-blue/20 blur-3xl rounded-full" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-iska-red font-bold uppercase tracking-[0.3em] text-xs">Featured Event</span>
                <h2 className="text-lg sm:text-xl md:text-5xl font-display font-bold text-white tracking-tighter">ISKA World Qualifier 2026</h2>
                <p className="text-gray-400 max-w-md text-sm sm:text-base">The biggest stage for combat sports in Bangladesh is coming this winter. Winners qualify for the ISKA World Championships.</p>
                
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Days', val: '120' },
                    { label: 'Hrs', val: '14' },
                    { label: 'Min', val: '35' },
                    { label: 'Sec', val: '08' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10">
                      <p className="text-xl sm:text-2xl font-display font-bold text-white leading-none">{item.val}</p>
                      <p className="text-[10px] uppercase font-bold text-iska-red tracking-widest mt-2">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden border-4 border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl relative">
                   <Image src="https://picsum.photos/seed/fighter/800/800" alt="Main Event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
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
