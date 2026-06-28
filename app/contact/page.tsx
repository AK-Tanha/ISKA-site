'use client';

import React from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Send, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-24">
        <div className="container-custom">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Connect with the ISKA Bangladesh headquarters for sanctioning, memberships, and general inquiries."
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-16">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-iska-blue/5 rounded-2xl flex items-center justify-center text-iska-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-iska-black">Email Us</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-iska-red/5 rounded-2xl flex items-center justify-center text-iska-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-iska-black">Call Us</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-iska-blue-light/5 rounded-2xl flex items-center justify-center text-iska-blue-light">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-iska-black">Office Location</h4>
                  <p className="text-gray-500 text-sm">Dhaka, Bangladesh</p>
                  <p className="text-gray-400 text-xs mt-1 italic">&quot;Full address details available upon verified request.&quot;</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
                <h3 className="text-lg sm:text-xl font-display font-bold mb-8 text-iska-black">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-iska-blue outline-none transition-all" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-iska-blue outline-none transition-all" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-iska-blue outline-none transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Event Sanctioning</option>
                      <option>Membership / Affiliation</option>
                      <option>Rankings Inquiry</option>
                      <option>Certification Courses</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-iska-blue outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200 relative overflow-hidden">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 space-y-4">
          <Globe size={64} strokeWidth={1} />
          <p className="font-bold">Interactive Map Coming Soon</p>
        </div>
        <div className="absolute inset-0 bg-iska-blue/5 pointer-events-none" />
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-iska-blue text-white rounded-lg flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Working Hours</h5>
                <p className="text-xs text-gray-500">Sun - Thu, 10 AM - 6 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877F2] text-white rounded-lg flex items-center justify-center shrink-0">
                <Facebook size={20} />
              </a>
              <div>
                <h5 className="font-bold text-sm">Facebook</h5>
                <p className="text-xs text-gray-500">Join our community</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-lg flex items-center justify-center shrink-0">
                <Instagram size={20} />
              </a>
              <div>
                <h5 className="font-bold text-sm">Instagram</h5>
                <p className="text-xs text-gray-500">@iskabangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0A66C2] text-white rounded-lg flex items-center justify-center shrink-0">
                <Linkedin size={20} />
              </a>
              <div>
                <h5 className="font-bold text-sm">LinkedIn</h5>
                <p className="text-xs text-gray-500">ISKA Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
