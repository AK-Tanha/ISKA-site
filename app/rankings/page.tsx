'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Navigation';
import { SectionHeading } from '@/components/UI';
import { RankingTable } from '@/components/Cards';
import { MOCK_RANKINGS, RANKINGS_CATEGORIES } from '@/lib/data';
import { Search, Filter, Download } from 'lucide-react';

export default function Rankings() {
  const [activeCategory, setActiveCategory] = useState('Kickboxing');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRankings = MOCK_RANKINGS.filter(r => 
    r.category === activeCategory && 
    (r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.weight.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 sm:py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 mb-8 sm:mb-12">
            <SectionHeading 
              title="National Rankings" 
              subtitle="The official leaderboard for combat sports athletes in Bangladesh."
            />
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-iska-blue hover:text-white transition-all font-bold text-sm">
              <Download size={18} /> <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 mb-6 sm:mb-8 space-y-4 sm:space-y-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {RANKINGS_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-iska-blue text-white shadow-lg' 
                      : 'bg-white text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search athlete or weight class..." 
                  className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-iska-blue outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center w-10 sm:w-auto sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-500 cursor-pointer hover:border-iska-blue transition-all">
                <Filter size={18} />
                <span className="hidden sm:inline text-sm font-bold ml-2">More Filters</span>
              </div>
            </div>
          </div>

          {filteredRankings.length > 0 ? (
            <RankingTable data={filteredRankings} />
          ) : (
            <div className="py-12 sm:py-20 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No athletes found for this criteria.</p>
            </div>
          )}

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-iska-blue/5 rounded-xl border border-iska-blue/10 flex items-start gap-3 sm:gap-4">
            <div className="p-1.5 sm:p-2 bg-iska-blue text-white rounded-lg shrink-0">
              <Filter size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-iska-blue mb-1">Ranking Methodology</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rankings are updated monthly based on performance in ISKA sanctioned events. Factors include strength of opponent, result type (KO/Decision), and activity level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
