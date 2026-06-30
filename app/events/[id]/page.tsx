'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { Header, Footer } from '@/components/Navigation';
import { MOCK_EVENTS } from '@/lib/data';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, MapPin, Share2, Ticket, Clock, MapPinned, Users, Trophy, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-3">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
          <p className="text-2xl font-display font-bold text-white leading-none">{String(item.value).padStart(2, '0')}</p>
          <p className="text-[10px] uppercase font-bold text-iska-red tracking-widest mt-1.5">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

const TAGS = ['Kickboxing', 'Muay Thai', 'MMA', 'Boxing'];

export default function EventDetail() {
  const params = useParams();
  const id = params.id;

  const event = MOCK_EVENTS.find(n => n.id === Number(id));

  if (!event) {
    notFound();
  }

  const relatedEvents = MOCK_EVENTS.filter(n => n.id !== event.id);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] sm:h-[65vh] bg-iska-black overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 sm:pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/80 hover:bg-white/20 hover:text-white transition-all text-sm font-medium mb-6"
              >
                <ArrowLeft size={16} />
                All Events
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-iska-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  {event.status}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-[1.05] max-w-4xl">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-iska-black tracking-tight">
                  About This Event
                </h2>
                <div className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-none">
                  {event.description}
                </div>
              </motion.div>

              {/* Event Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-iska-black tracking-tight">
                  Event Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Trophy, label: 'Weight Classes', value: '6 Divisions' },
                    { icon: Users, label: 'Expected Athletes', value: '100+' },
                    { icon: Globe, label: 'Qualifier For', value: 'ISKA World Championship' },
                    { icon: Shield, label: 'Sanctioned By', value: 'ISKA Bangladesh' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-iska-blue/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon size={22} className="text-iska-blue" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.label}</p>
                          <p className="font-bold text-iska-black">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-iska-black tracking-tight">
                  Disciplines
                </h2>
                <div className="flex flex-wrap gap-3">
                  {TAGS.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-iska-blue hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 font-medium">Share this event:</span>
                  {[Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-iska-blue hover:text-white transition-all">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
                <span className="btn-primary py-3 px-6 inline-flex items-center gap-2 text-sm cursor-pointer">
                  <Ticket size={18} /> Get Tickets
                </span>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Countdown */}
              {event.status === 'Upcoming' && (
                <div className="p-6 bg-iska-black rounded-[2rem] text-white">
                  <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-iska-red" />
                    Event Starts In
                  </h3>
                  <Countdown targetDate={event.date} />
                </div>
              )}

              {/* Event Info */}
              <div className="p-6 border border-gray-100 rounded-[2rem] space-y-5">
                <h3 className="text-lg font-display font-bold text-iska-black">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-iska-red/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar size={18} className="text-iska-red" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Date</p>
                      <p className="font-semibold text-iska-black">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-iska-blue/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <MapPinned size={18} className="text-iska-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Location</p>
                      <p className="font-semibold text-iska-black">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Time</p>
                      <p className="font-semibold text-iska-black">6:00 PM (tentative)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Status</p>
                      <p className="font-semibold text-iska-black capitalize">{event.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 text-center space-y-4">
                <Ticket size={32} className="text-iska-blue mx-auto" />
                <h3 className="text-lg font-display font-bold text-iska-black">Secure Your Spot</h3>
                <p className="text-sm text-gray-500">Tickets are limited. Register now to guarantee your entry.</p>
                <span className="btn-primary w-full inline-flex items-center justify-center gap-2 cursor-pointer">
                  <Ticket size={18} /> Register Now
                </span>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-iska-black tracking-tight">
                Other Events
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedEvents.map((related, idx) => (
                  <Link
                    key={related.id}
                    href={`/events/${related.id}`}
                    className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-iska-red font-bold uppercase tracking-widest">{related.status}</span>
                      <h3 className="font-bold text-iska-black group-hover:text-iska-blue transition-colors truncate">{related.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{formatDate(related.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
