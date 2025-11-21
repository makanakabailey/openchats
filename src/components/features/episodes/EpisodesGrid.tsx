'use client';

import { useState } from 'react';
import EpisodeCard from '@/components/ui/EpisodeCard';
import FilterSidebar from './FilterSidebar';

export default function EpisodesGrid() {
  const [showFilters, setShowFilters] = useState(false);

  // Extended episode data - using all 4 thumbnails
  const episodes = [
    {
      id: 101,
      title: 'EP 101: THE STREETS ARE TALKING 🔥',
      thumbnail: '/episodes/ep1.jpg',
      views: '1.2M',
      publishedAt: '2 days ago',
      duration: '45:12',
      isHot: true,
      category: 'Culture',
      season: 3,
    },
    {
      id: 100,
      title: 'EP 100: MTHO VS SINO DEBATE 💀',
      thumbnail: '/episodes/ep2.jpg',
      views: '890K',
      publishedAt: '1 week ago',
      duration: '52:30',
      isHot: false,
      category: 'Debates',
      season: 3,
    },
    {
      id: 99,
      title: 'EP 99: DATING IN 2025 IS DEAD 💔',
      thumbnail: '/episodes/ep3.jpg',
      views: '750K',
      publishedAt: '2 weeks ago',
      duration: '38:22',
      isHot: false,
      category: 'Dating',
      season: 3,
    },
    {
      id: 98,
      title: 'EP 98: MONEY TALKS, WEALTH WHISPERS 💰',
      thumbnail: '/episodes/ep4.jpg',
      views: '920K',
      publishedAt: '3 weeks ago',
      duration: '41:15',
      isHot: false,
      category: 'Money',
      season: 3,
    },
    {
      id: 97,
      title: 'EP 97: SOCIAL MEDIA IS TOXIC ☠️',
      thumbnail: '/episodes/ep1.jpg',
      views: '680K',
      publishedAt: '1 month ago',
      duration: '35:45',
      isHot: false,
      category: 'Culture',
      season: 3,
    },
    {
      id: 96,
      title: 'EP 96: FRIENDSHIP OR BUSINESS? 🤝',
      thumbnail: '/episodes/ep2.jpg',
      views: '540K',
      publishedAt: '1 month ago',
      duration: '48:30',
      isHot: false,
      category: 'Money',
      season: 3,
    },
    {
      id: 95,
      title: 'EP 95: MODERN RELATIONSHIPS ARE BROKEN 💔',
      thumbnail: '/episodes/ep3.jpg',
      views: '1.1M',
      publishedAt: '1 month ago',
      duration: '44:20',
      isHot: false,
      category: 'Dating',
      season: 3,
    },
    {
      id: 94,
      title: 'EP 94: THE HUSTLE CULTURE LIE 🎭',
      thumbnail: '/episodes/ep4.jpg',
      views: '780K',
      publishedAt: '2 months ago',
      duration: '39:10',
      isHot: false,
      category: 'Culture',
      season: 3,
    },
    {
      id: 93,
      title: 'EP 93: CRYPTO OR SCAM? 🪙',
      thumbnail: '/episodes/ep1.jpg',
      views: '650K',
      publishedAt: '2 months ago',
      duration: '42:55',
      isHot: false,
      category: 'Money',
      season: 3,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-card-dark border border-zinc-700 rounded-lg text-white"
            >
              <span>Filters</span>
              <div className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {showFilters && (
              <div className="mt-4 p-4 bg-card-dark rounded-lg border border-zinc-700">
                <FilterSidebar />
              </div>
            )}
          </div>
          
          {/* Episodes Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-text-muted">
                Showing {episodes.length} episodes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                LOAD MORE EPISODES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}