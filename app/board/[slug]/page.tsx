'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { Header, Footer } from '@/components/Navigation';
import { EXECUTIVE_BOARD } from '@/lib/data';
import { motion } from 'motion/react';
import { User, Shield, Trophy, Globe, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MemberProfile() {
  const params = useParams();
  const slug = params.slug as string;
  
  const member = EXECUTIVE_BOARD.find(m => m.slug === slug);
  
  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero / Header Section */}
      <section className="relative pt-20 pb-16 bg-iska-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-iska-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-iska-red/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>
        
        <div className="container-custom relative z-10">
          {/* Refined Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/board" 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group backdrop-blur-md"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold tracking-wide">Executive Board</span>
            </Link>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-iska-blue/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="aspect-[4/5] rounded-[2rem] bg-gray-900 border-4 border-white/10 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center text-white/5">
                    <User size={300} strokeWidth={0.5} />
                  </div>
                  {member.image && (
                    <img 
                      src={member.image.startsWith('http') ? member.image : `/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-iska-black via-transparent to-transparent opacity-60 z-20" />
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-iska-red" />
                    <span className="text-iska-red text-sm font-black uppercase tracking-[0.3em]">
                      {member.role}
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9]">
                    {member.name}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors cursor-default group">
                    <Shield size={20} className="text-iska-blue group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-semibold tracking-tight">ISKA Bangladesh Board</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors cursor-default group">
                    <Globe size={20} className="text-iska-blue group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-semibold tracking-tight">National Council</span>
                  </div>
                </div>
                
                <div className="pt-8 flex gap-12 border-t border-white/10">
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                    <p className="text-white font-bold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Active Member
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Term</p>
                    <p className="text-white font-bold">2024 — Present</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-iska-black flex items-center gap-3">
                  <span className="w-8 h-1 bg-iska-red rounded-full" />
                  Biography
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="text-xl leading-relaxed">
                    {member.bio}
                  </p>
                  <p className="mt-6 leading-relaxed">
                    As a key member of the ISKA Bangladesh Executive Board, {member.name} plays a vital role in the strategic direction and operational excellence of the organization. Dedicated to the growth of combat sports in the region, focusing on transparency, athlete safety, and international integration.
                  </p>
                  <p className="mt-6 leading-relaxed">
                    With years of experience in management and a passion for sports development, {member.name} is instrumental in establishing ISKA as the premier sanctioning body in Bangladesh.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-iska-blue">
                    <Trophy size={20} /> Key Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-iska-red rounded-full mt-2" />
                      <span>Strategic governance and policy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-iska-red rounded-full mt-2" />
                      <span>Oversight of {member.role.toLowerCase()} activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-iska-red rounded-full mt-2" />
                      <span>Representing ISKA Bangladesh at international summits</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-iska-blue">
                    <Shield size={20} /> Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed italic">
                    &quot;To create a ecosystem where talent is nurtured, safety is paramount, and every athlete has a legitimate pathway to the world stage.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-iska-blue text-white shadow-xl">
                  <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-iska-blue-light font-bold uppercase tracking-widest">Email</p>
                        <p className="font-medium">contact@iska.com.bd</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-iska-blue-light font-bold uppercase tracking-widest">Office</p>
                        <p className="font-medium">+880 1804 277235</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-iska-blue-light font-bold uppercase tracking-widest">Location</p>
                        <p className="font-medium">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Link href="/contact" className="w-full py-4 bg-white text-iska-blue font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                      Send a Message
                    </Link>
                  </div>
                </div>

                <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50">
                  <h3 className="text-lg font-display font-bold mb-4">Official Verification</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    This profile is officially verified by the ISKA Bangladesh National Council. All board members are appointed through rigorous vetting processes.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                      <img src="/ISKA%20BANGLADESH%20LOGO.png" alt="ISKA Bangladesh" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-iska-black">ISKA Bangladesh</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Certified Official</p>
                    </div>
                  </div>
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
