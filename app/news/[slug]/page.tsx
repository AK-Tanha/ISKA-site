'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { Header, Footer } from '@/components/Navigation';
import { MOCK_NEWS } from '@/lib/data';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function NewsArticle() {
  const params = useParams();
  const slug = params.slug as string;

  const article = MOCK_NEWS.find(n => n.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedNews = MOCK_NEWS.filter(n => n.slug !== slug).slice(0, 2);

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
            src={article.image}
            alt={article.title}
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
              href="/news"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold tracking-wide">All News</span>
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
                    {article.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-iska-black tracking-tighter leading-[1.05]">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} />
                    <span className="text-sm font-medium">5 min read</span>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600 max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-base sm:text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 font-medium">Share this article:</span>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-iska-blue hover:text-white transition-all">
                    <Share2 size={16} />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-iska-blue hover:text-white transition-all">
                    <Bookmark size={16} />
                  </button>
                </div>
                <Link
                  href="/news"
                  className="text-iska-blue font-bold flex items-center gap-2 hover:gap-3 transition-all group"
                >
                  All News <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-lg font-display font-bold mb-6">Related News</h3>
                  <div className="space-y-6">
                    {relatedNews.length > 0 ? relatedNews.map(item => (
                      <Link key={item.id} href={`/news/${item.slug}`} className="flex gap-4 group">
                        <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden shrink-0 relative">
                          <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" sizes="80px" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-iska-red font-bold uppercase tracking-widest">{item.category}</p>
                          <h4 className="text-sm font-bold text-iska-black group-hover:text-iska-blue transition-colors leading-snug">{item.title}</h4>
                          <p className="text-[10px] text-gray-400 font-medium">{item.date}</p>
                        </div>
                      </Link>
                    )) : (
                      <p className="text-sm text-gray-400">No related articles yet.</p>
                    )}
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-iska-blue text-white shadow-xl">
                  <h3 className="text-lg font-display font-bold mb-4">Stay Updated</h3>
                  <p className="text-sm text-iska-blue-light mb-6 leading-relaxed">
                    Subscribe to our newsletter for the latest ISKA Bangladesh news and updates.
                  </p>
                  <Link href="/contact" className="w-full py-3 bg-white text-iska-blue font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                    Subscribe Now
                  </Link>
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
