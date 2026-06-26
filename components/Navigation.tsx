'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-iska-blue text-white py-1.5 text-sm font-medium">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-iska-blue-light transition-colors">
              <Mail size={14} /> {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-iska-blue-light transition-colors">
              <Phone size={14} /> {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-iska-blue-light transition-colors">
              <Instagram size={16} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-iska-blue-light transition-colors">
              <Facebook size={16} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-iska-blue-light transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`glass-nav transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
        <nav className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform">
               <img 
                 src="/assets/logo.jpg" 
                 alt="ISKA Bangladesh Logo" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tighter text-iska-blue leading-none">ISKA</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-iska-red leading-tight">BANGLADESH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group/menu">
                {link.submenu ? (
                  <>
                    <button
                      className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                        link.submenu.some(sub => pathname === sub.href)
                          ? 'text-iska-blue bg-iska-blue/5' 
                          : 'text-gray-600 hover:text-iska-blue hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[200px]">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                              pathname === sub.href
                                ? 'text-iska-blue bg-iska-blue/5'
                                : 'text-gray-600 hover:text-iska-blue hover:bg-gray-50'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                      pathname === link.href 
                        ? 'text-iska-blue bg-iska-blue/5' 
                        : 'text-gray-600 hover:text-iska-blue hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-iska-blue focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className={`flex items-center justify-between w-full px-4 py-4 text-lg font-bold rounded-lg transition-colors ${
                            link.submenu.some(sub => pathname === sub.href)
                              ? 'text-iska-blue bg-iska-blue/5' 
                              : 'text-gray-600'
                          }`}
                        >
                          {link.name}
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-gray-50/50 rounded-lg mx-2"
                            >
                              <div className="flex flex-col p-2 gap-1">
                                {link.submenu.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                                      pathname === sub.href
                                        ? 'text-iska-blue bg-iska-blue/5'
                                        : 'text-gray-500 hover:text-iska-blue'
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-4 text-lg font-bold rounded-lg transition-colors ${
                          pathname === link.href 
                            ? 'text-iska-blue bg-iska-blue/5' 
                            : 'text-gray-600 hover:text-iska-blue'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 mt-4 border-t border-gray-100 flex gap-6 px-4">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-iska-blue transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-iska-blue transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-iska-blue transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-iska-black text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img 
                  src="/assets/logo.jpg" 
                  alt="ISKA Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tighter leading-none">ISKA</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-iska-red leading-tight">BANGLADESH</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Official National Representative of ISKA in Bangladesh. Developing, Regulating and Promoting Combat Sports Excellence Across the Nation.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-iska-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-iska-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-iska-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-l-4 border-iska-red pl-4">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About ISKA</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs & Services</Link></li>
              <li><Link href="/rankings" className="hover:text-white transition-colors">National Rankings</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-l-4 border-iska-red pl-4">International</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://www.iskaworldhq.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISKA World HQ</a></li>
              <li><a href={SOCIAL_LINKS.iskaAsia} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISKA Asia Directors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">World Rankings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-l-4 border-iska-red pl-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with latest news and event announcements.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-iska-blue outline-none"
              />
              <button className="bg-iska-blue hover:bg-iska-blue-light transition-colors px-4 py-2 rounded-md">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          <p>© 2026 ISKA Bangladesh. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
