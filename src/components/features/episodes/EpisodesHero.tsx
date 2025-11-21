'use client';

import { useState } from 'react';
import { MagnifyingGlass, FunnelSimple } from '@phosphor-icons/react';

export default function EpisodesHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Latest');

  return (
    <section className="bg-hero-gradient pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            ALL EPISODES
          </h1>
          <p className="font-body text-lg md:text-xl text-text-body mb-12 max-w-2xl mx-auto">
            Raw conversations. No filter. Pure spice.
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass 
                size={20} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" 
              />
              <input
                type="text"
                placeholder="Search Episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card-dark border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
              />
            </div>
            
            {/* Filter Dropdown */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-card-dark border border-zinc-700 rounded-lg text-white focus:border-spicy-orange focus:outline-none"
            >
              <option value="All">Filter: All</option>
              <option value="Dating">Dating</option>
              <option value="Money">Money</option>
              <option value="Culture">Culture</option>
              <option value="Debates">Debates</option>
            </select>
            
            {/* Sort Dropdown */}
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="px-4 py-3 bg-card-dark border border-zinc-700 rounded-lg text-white focus:border-spicy-orange focus:outline-none"
            >
              <option value="Latest">Sort: Latest</option>
              <option value="Popular">Popular</option>
              <option value="Oldest">Oldest</option>
              <option value="Duration">Duration</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}