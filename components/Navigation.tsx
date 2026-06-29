'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
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
      <header
        className={`glass-nav relative transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
      >
        <nav className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform relative">
                 <Image 
                  src="/ISKA%20BANGLADESH%20LOGO.png" 
                  alt="ISKA Bangladesh Logo" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-iska-blue leading-none">ISKA</span>
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
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white flex flex-col"
            onKeyDown={handleKeyDown}
          >
            {/* Background decorative SVGs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400" fill="none">
                <circle cx="280" cy="80" r="240" stroke="#003DA5" strokeWidth="2" />
                <circle cx="280" cy="80" r="190" stroke="#003DA5" strokeWidth="1.5" />
                <circle cx="280" cy="80" r="140" stroke="#00B8F0" strokeWidth="1" />
                <circle cx="280" cy="80" r="90" stroke="#003DA5" strokeWidth="0.5" strokeDasharray="6 6" />
              </svg>
              <svg className="absolute -bottom-16 -left-16 w-80 h-80 opacity-[0.03]" viewBox="0 0 300 300" fill="none">
                <path d="M10 290 Q 80 180 160 240 T 290 180 L 290 290 Z" fill="#003DA5" />
                <path d="M10 290 Q 120 140 200 260 T 290 200 L 290 290 Z" fill="#00B8F0" />
              </svg>
              <svg className="absolute inset-0 w-full h-full opacity-[0.012]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#003DA5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
              </svg>
              <svg className="absolute top-1/3 right-0 w-32 h-32 opacity-[0.02]" viewBox="0 0 100 100" fill="none">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#E10613" strokeWidth="0.5" />
                <line x1="20" y1="0" x2="100" y2="80" stroke="#E10613" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="100" y2="60" stroke="#E10613" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Close button bar */}
            <div className="relative flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform relative">
                   <Image 
                    src="/ISKA%20BANGLADESH%20LOGO.png" 
                    alt="ISKA Bangladesh Logo" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg tracking-tighter text-iska-blue leading-none">ISKA</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-iska-red leading-tight">BANGLADESH</span>
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-iska-blue focus:outline-none"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav items */}
            <div className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-6">
              <div className="max-w-7xl mx-auto py-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className={`flex items-center justify-between w-full px-4 py-4 text-base font-bold rounded-lg transition-colors ${
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

                        <div 
                          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                          style={{ gridTemplateRows: activeSubmenu === link.name ? '1fr' : '0fr' }}
                        >
                          <div className="overflow-hidden">
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
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-4 text-base font-bold rounded-lg transition-colors ${
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
              </div>
            </div>

            {/* Social links at bottom */}
            <div className="relative z-10 border-t border-gray-100 px-4 sm:px-6 py-6">
              <div className="max-w-7xl mx-auto flex gap-6">
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white relative">
                 <Image 
                  src="/ISKA%20BANGLADESH%20LOGO.png" 
                  alt="ISKA Bangladesh Logo" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tighter leading-none">ISKA</span>
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
              <h4 className="font-display font-bold text-base sm:text-lg mb-6 border-l-4 border-iska-red pl-4">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About ISKA</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs & Services</Link></li>
              <li><Link href="/rankings" className="hover:text-white transition-colors">National Rankings</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-6 border-l-4 border-iska-red pl-4">International</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://www.iskaworldhq.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISKA World HQ</a></li>
              <li><a href={SOCIAL_LINKS.iskaAsia} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISKA Asia Directors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">World Rankings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-6 border-l-4 border-iska-red pl-4">Newsletter</h4>
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
