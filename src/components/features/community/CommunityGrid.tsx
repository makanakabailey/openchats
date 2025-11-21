'use client';

import { useState, useMemo } from 'react';
import DiscussionCard from '@/components/ui/DiscussionCard';
import CommunitySidebar from './CommunitySidebar';

interface CommunityGridProps {
  onSubmissionClick?: (type: 'idea' | 'topic' | 'operator-art') => void;
}

export default function CommunityGrid({ onSubmissionClick }: CommunityGridProps) {
  const [activeFilter, setActiveFilter] = useState('hot');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSidebar, setShowSidebar] = useState(false);

  // Mock discussions data
  const allDiscussions = [
    {
      id: 1,
      title: 'What did you think about EP 101? 🔥',
      author: 'Thabo M.',
      authorAvatar: '/avatars/user1.jpg',
      category: 'Episode Talk',
      episodeId: 101,
      replies: 89,
      views: 1234,
      reactions: { fire: 45, love: 23, laugh: 12 },
      isPinned: true,
      createdAt: '2 hours ago',
      excerpt: 'That debate between Mtho and Sino was insane! What are your thoughts on...',
    },
    {
      id: 2,
      title: 'Guest suggestion: Trevor Noah',
      author: 'Nomsa K.',
      authorAvatar: '/avatars/user2.jpg',
      category: 'Ideas',
      replies: 34,
      views: 567,
      reactions: { fire: 28, love: 15, laugh: 5 },
      isPinned: false,
      createdAt: '5 hours ago',
      excerpt: 'Would love to see Trevor on the show. Imagine the conversations...',
    },
    {
      id: 3,
      title: 'Dating in 2025 is actually broken 💔',
      author: 'Sipho D.',
      authorAvatar: '/avatars/user3.jpg',
      category: 'General',
      replies: 156,
      views: 2341,
      reactions: { fire: 67, love: 34, laugh: 23 },
      isPinned: false,
      createdAt: '1 day ago',
      excerpt: 'After listening to EP 99, I realized how true everything they said was...',
    },
    {
      id: 4,
      title: 'New merch drop is 🔥🔥🔥',
      author: 'Lerato P.',
      authorAvatar: '/avatars/user4.jpg',
      category: 'General',
      replies: 45,
      views: 890,
      reactions: { fire: 89, love: 45, laugh: 12 },
      isPinned: false,
      createdAt: '2 days ago',
      excerpt: 'Just copped the hoodie and it\'s quality! Worth every rand...',
    },
    {
      id: 5,
      title: 'Topic suggestion: Crypto in SA',
      author: 'Mandla T.',
      authorAvatar: '/avatars/user5.jpg',
      category: 'Submit Topics',
      replies: 23,
      views: 456,
      reactions: { fire: 34, love: 12, laugh: 8 },
      isPinned: false,
      createdAt: '3 days ago',
      excerpt: 'Would be interesting to hear Mtho and Sino\'s take on crypto...',
    },
    {
      id: 6,
      title: 'Need help finding an old episode',
      author: 'Zanele M.',
      authorAvatar: '/avatars/user6.jpg',
      category: 'General',
      replies: 0,
      views: 45,
      reactions: { fire: 2, love: 1, laugh: 0 },
      isPinned: false,
      createdAt: '4 hours ago',
      excerpt: 'Looking for the episode where they talked about side hustles...',
    },
    {
      id: 7,
      title: 'Operator art: Mtho & Sino illustration',
      author: 'Kgotso P.',
      authorAvatar: '/avatars/user7.jpg',
      category: 'Operator Art',
      replies: 12,
      views: 234,
      reactions: { fire: 45, love: 67, laugh: 8 },
      isPinned: false,
      createdAt: '1 day ago',
      excerpt: 'Drew this illustration of the hosts. Hope you like it!',
    },
    {
      id: 8,
      title: 'Question about merch shipping',
      author: 'Bongani S.',
      authorAvatar: '/avatars/user8.jpg',
      category: 'General',
      replies: 0,
      views: 23,
      reactions: { fire: 0, love: 0, laugh: 0 },
      isPinned: false,
      createdAt: '6 hours ago',
      excerpt: 'How long does shipping usually take to Durban?',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Discussions' },
    { id: 'episode-talk', name: 'Episode Talk' },
    { id: 'operator-art', name: 'Operator Art' },
    { id: 'ideas', name: 'Ideas' },
    { id: 'submit-topics', name: 'Submit Topics' },
    { id: 'general', name: 'General' },
  ];

  const filterOptions = [
    { id: 'hot', label: 'Hot', icon: '🔥' },
    { id: 'recent', label: 'Recent', icon: '🕐' },
    { id: 'top', label: 'Top', icon: '⭐' },
    { id: 'unanswered', label: 'Unanswered', icon: '❓' },
  ];

  // Filter and sort discussions
  const discussions = useMemo(() => {
    let filtered = [...allDiscussions];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => 
        d.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Sort by filter
    switch (activeFilter) {
      case 'hot':
        // Sort by reactions + recent activity
        filtered.sort((a, b) => {
          const aScore = (a.reactions.fire + a.reactions.love + a.reactions.laugh) * 2 + a.replies;
          const bScore = (b.reactions.fire + b.reactions.love + b.reactions.laugh) * 2 + b.replies;
          return bScore - aScore;
        });
        break;
      case 'recent':
        // Already in recent order, but could add timestamp sorting
        break;
      case 'top':
        // Sort by total reactions
        filtered.sort((a, b) => {
          const aTotal = a.reactions.fire + a.reactions.love + a.reactions.laugh;
          const bTotal = b.reactions.fire + b.reactions.love + b.reactions.laugh;
          return bTotal - aTotal;
        });
        break;
      case 'unanswered':
        // Filter discussions with 0 replies
        filtered = filtered.filter(d => d.replies === 0);
        break;
    }

    // Pinned discussions always on top
    return filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return 0;
    });
  }, [allDiscussions, selectedCategory, activeFilter]);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <CommunitySidebar 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onSubmissionClick={onSubmissionClick}
            />
          </div>
          
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex items-center gap-2 px-4 py-2 bg-card-dark border border-zinc-700 rounded-lg text-white"
            >
              <span>Categories</span>
              <div className={`transform transition-transform ${showSidebar ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {showSidebar && (
              <div className="mt-4 p-4 bg-card-dark rounded-lg border border-zinc-700">
                <CommunitySidebar 
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  onSubmissionClick={onSubmissionClick}
                />
              </div>
            )}
          </div>
          
          {/* Discussions Grid */}
          <div className="flex-1">
            {/* Filter Tabs */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-text-muted">
                  Showing <span className="text-white font-semibold">{discussions.length}</span> discussions
                  {selectedCategory !== 'all' && (
                    <span> in <span className="text-spicy-orange">
                      {categories.find(c => c.id === selectedCategory)?.name}
                    </span></span>
                  )}
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-b border-zinc-700">
                {filterOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 font-semibold transition-colors ${
                      activeFilter === option.id
                        ? 'border-spicy-orange text-spicy-orange'
                        : 'border-transparent text-text-muted hover:text-white'
                    }`}
                  >
                    <span>{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {discussions.length > 0 ? (
                discussions.map((discussion) => (
                  <DiscussionCard key={discussion.id} discussion={discussion} />
                ))
              ) : (
                <div className="text-center py-12 bg-card-dark rounded-lg border border-zinc-700">
                  <p className="text-text-muted text-lg mb-4">
                    No discussions found in this category.
                  </p>
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className="text-spicy-orange hover:text-spicy-orange-light"
                  >
                    View all discussions →
                  </button>
                </div>
              )}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="btn-secondary">
                LOAD MORE DISCUSSIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}