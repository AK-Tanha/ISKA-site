'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { Header, Footer } from '@/components/Navigation';
import { MOCK_EVENTS } from '@/lib/data';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, ArrowLeft, MapPin, Share2, Ticket } from 'lucide-react';
import Link from 'next/link';

export default function EventDetail() {
  const params = useParams();
  const id = params.id;

  const event = MOCK_EVENTS.find(n => n.id === Number(id));

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-iska-black overflow-hidden">
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
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold tracking-wide">All Events</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-iska-red" />
                  <span className="text-iska-red text-sm font-black uppercase tracking-[0.3em]">
                    {event.status}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-iska-black tracking-tighter leading-[1.05]">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <div className="text-gray-600 max-w-none leading-relaxed">
                  {event.description}
                </div>
              </motion.div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 font-medium">Share this event:</span>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-iska-blue hover:text-white transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
                <Link
                  href="/events"
                  className="flex items-center gap-2">
                  <button className="btn-primary py-3 px-6 flex items-center gap-2 text-sm">
                    <Ticket size={18} /> Get Tickets
                  </button>
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
