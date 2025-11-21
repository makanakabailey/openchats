'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import NewDiscussionModal from './NewDiscussionModal';

export default function CommunityHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewDiscussionModal, setShowNewDiscussionModal] = useState(false);

  return (
    <section className="bg-hero-gradient pt-16 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 md:mb-6 break-words">
            COMMUNITY HUB
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl text-text-body mb-8 md:mb-12 max-w-2xl mx-auto px-2">
            Join the conversation. Share your takes. Connect with fellow listeners.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlass 
              size={20} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" 
            />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card-dark border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
            />
          </div>

          {/* New Discussion Button */}
          <div className="mt-6">
            <button 
              onClick={() => setShowNewDiscussionModal(true)}
              className="btn-primary"
            >
              START NEW DISCUSSION
            </button>
          </div>
        </div>
      </div>

      {/* New Discussion Modal */}
      <NewDiscussionModal 
        isOpen={showNewDiscussionModal}
        onClose={() => setShowNewDiscussionModal(false)}
      />
    </section>
  );
}