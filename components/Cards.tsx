'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { User, Trophy, Shield, GraduationCap, Scale, TrendingUp, Globe, Home, UserPlus, ClipboardCheck, UserCheck } from 'lucide-react';

import Link from 'next/link';

const ICON_MAP: Record<string, any> = {
  UserPlus, 
  GraduationCap, 
  Scale, 
  ClipboardCheck, 
  ShieldCheck: Shield, 
  TrendingUp, 
  Trophy, 
  Globe, 
  Home, 
  UserCheck
};

export function ProfileCard({ name, image, role, bio, slug }: { name: string, image?: string, role: string, bio: string, slug?: string }) {
  const content = (
    <>
      <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-200">
          <User size={140} strokeWidth={0.5} />
        </div>
        
        {/* Image */}
        {image && (
          <Image 
            src={image.startsWith('http') ? image : `/${image}`}
            alt={name}
            fill
            className="object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-iska-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-iska-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        {/* Profile Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-iska-black/90 via-iska-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-xs leading-relaxed line-clamp-4 font-medium italic">
            &quot;{bio}&quot;
          </p>
        </div>
      </div>
      
      <div className="p-6 space-y-2 bg-white relative">
        <h4 className="font-display font-bold text-lg sm:text-xl text-iska-black group-hover:text-iska-blue transition-colors">{name}</h4>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-iska-red" />
          <p className="text-iska-red text-[10px] font-bold uppercase tracking-widest">{role}</p>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 pt-2">
          {bio}
        </p>
      </div>
    </>
  );

  if (slug) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
      >
        <Link href={`/board/${slug}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {content}
    </motion.div>
  );
}

export function ServiceCard({ title, description, iconName }: { title: string, description: string, iconName: string }) {
  const Icon = ICON_MAP[iconName] || Shield;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-5 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex sm:flex-col items-center gap-3 sm:gap-0">
        <div className="w-14 h-14 bg-iska-blue/5 rounded-xl flex items-center justify-center text-iska-blue shrink-0 sm:mb-6 group-hover:bg-iska-blue group-hover:text-white transition-colors duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-lg sm:text-xl font-display font-bold sm:mb-3 group-hover:text-iska-blue transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function RankingTable({ data }: { data: any[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-left border-collapse sm:w-full min-w-[600px] sm:min-w-0">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Rank</th>
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Athlete</th>
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Weight</th>
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Record</th>
            <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Category</th>
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors group">
              <td className="px-3 sm:px-6 py-3 sm:py-4">
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                  item.rank === 1 ? 'bg-iska-red text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.rank}
                </span>
              </td>
              <td className="px-3 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 overflow-hidden shrink-0 border border-gray-100 relative">
                    <Image 
                      src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '-').toLowerCase()}/200/200`}
                      alt={item.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                      sizes="40px"
                    />
                  </div>
                  <span className="font-bold text-sm sm:text-base text-iska-black group-hover:text-iska-blue transition-colors whitespace-nowrap">{item.name}</span>
                </div>
              </td>
              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 font-medium text-sm whitespace-nowrap">{item.weight}</td>
              <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 font-medium font-mono text-xs whitespace-nowrap">{item.record}</td>
              <td className="hidden sm:table-cell px-6 py-4">
                <span className="px-3 py-1 bg-iska-blue/5 text-iska-blue rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </td>
              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right whitespace-nowrap">
                <span className={`font-bold text-xs uppercase tracking-widest ${
                  item.status === 'Champion' ? 'text-iska-red' : 'text-gray-400'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
