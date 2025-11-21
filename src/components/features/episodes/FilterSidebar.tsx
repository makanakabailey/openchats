'use client';

import { useState } from 'react';

export default function FilterSidebar() {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState('Latest');

  const topics = ['Dating', 'Money', 'Culture', 'Debates', 'Business', 'Social Media'];
  const seasons = ['All', 'Season 3', 'Season 2', 'Season 1'];
  const sortOptions = ['Latest', 'Popular', 'Oldest', 'Duration'];

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="space-y-8">
      {/* Season Filter */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Season
        </h3>
        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          className="w-full px-3 py-2 bg-card-dark border border-zinc-700 rounded text-white focus:border-spicy-orange focus:outline-none"
        >
          {seasons.map(season => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
      </div>

      {/* Topic Filter */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Topic
        </h3>
        <div className="space-y-3">
          {topics.map(topic => (
            <label key={topic} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTopics.includes(topic)}
                onChange={() => toggleTopic(topic)}
                className="w-4 h-4 rounded border-zinc-600 bg-card-dark text-spicy-orange focus:ring-spicy-orange focus:ring-2"
              />
              <span className="text-text-body hover:text-white transition-colors">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Sort By
        </h3>
        <div className="space-y-2">
          {sortOptions.map(option => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedSort === option}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-4 h-4 border-zinc-600 bg-card-dark text-spicy-orange focus:ring-spicy-orange focus:ring-2"
              />
              <span className="text-text-body hover:text-white transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button 
        onClick={() => {
          setSelectedSeason('All');
          setSelectedTopics([]);
          setSelectedSort('Latest');
        }}
        className="w-full py-2 text-sm text-spicy-orange hover:text-spicy-orange-light transition-colors border border-spicy-orange rounded hover:bg-spicy-orange/10"
      >
        Clear All Filters
      </button>
    </div>
  );
}