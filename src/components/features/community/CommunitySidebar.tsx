'use client';

import { Users, Lightbulb, Notebook, Palette } from '@phosphor-icons/react';

interface CommunitySidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSubmissionClick?: (type: 'idea' | 'topic' | 'operator-art') => void;
}

export default function CommunitySidebar({ selectedCategory, onCategoryChange, onSubmissionClick }: CommunitySidebarProps) {

  const categories = [
    { id: 'all', name: 'All Discussions', count: 347, icon: '💬' },
    { id: 'episode-talk', name: 'Episode Talk', count: 156, icon: '🎙️' },
    { id: 'operator-art', name: 'Operator Art', count: 23, icon: '🎨' },
    { id: 'ideas', name: 'Ideas', count: 45, icon: '💡' },
    { id: 'submit-topics', name: 'Submit Topics', count: 67, icon: '📝' },
    { id: 'general', name: 'General', count: 56, icon: '🗣️' },
  ];

  const activeMembers = [
    { name: 'Thabo M.', posts: 234, badge: '🔥' },
    { name: 'Nomsa K.', posts: 189, badge: '⭐' },
    { name: 'Sipho D.', posts: 156, badge: '💎' },
    { name: 'Lerato P.', posts: 134, badge: '🎯' },
    { name: 'Mandla T.', posts: 98, badge: '🚀' },
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-spicy-orange/10 to-purple-500/10 rounded-lg p-4 border border-spicy-orange/30">
        <h3 className="font-display text-sm font-bold uppercase text-white mb-3">
          Quick Submit
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onSubmissionClick?.('idea')}
            className="w-full flex items-center gap-3 px-3 py-2 bg-card-dark hover:bg-zinc-700 rounded-lg text-white transition-colors text-sm"
          >
            <Lightbulb size={18} weight="bold" className="text-yellow-400" />
            <span>Submit Idea</span>
          </button>
          <button
            onClick={() => onSubmissionClick?.('topic')}
            className="w-full flex items-center gap-3 px-3 py-2 bg-card-dark hover:bg-zinc-700 rounded-lg text-white transition-colors text-sm"
          >
            <Notebook size={18} weight="bold" className="text-blue-400" />
            <span>Submit Topic</span>
          </button>
          <button
            onClick={() => onSubmissionClick?.('operator-art')}
            className="w-full flex items-center gap-3 px-3 py-2 bg-card-dark hover:bg-zinc-700 rounded-lg text-white transition-colors text-sm"
          >
            <Palette size={18} weight="bold" className="text-pink-400" />
            <span>Submit Art</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-spicy-orange text-white'
                  : 'bg-card-dark text-text-body hover:bg-card-darker hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span>{category.icon}</span>
                <span className="font-semibold text-left">{category.name}</span>
              </div>
              <span className="text-sm">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Community Stats
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-body">
              <Users size={20} weight="bold" />
              <span>Total Members</span>
            </div>
            <span className="font-display text-xl font-black text-spicy-orange">
              12.4K
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-body">
              <span>💬</span>
              <span>Discussions</span>
            </div>
            <span className="font-display text-xl font-black text-spicy-orange">
              347
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-body">
              <span>🔥</span>
              <span>Active Today</span>
            </div>
            <span className="font-display text-xl font-black text-spicy-orange">
              1.2K
            </span>
          </div>
        </div>
      </div>

      {/* Active Members */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Top Contributors
        </h3>
        <div className="space-y-3">
          {activeMembers.map((member, index) => (
            <div key={member.name} className="flex items-center gap-3 bg-card-dark rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm truncate">
                    {member.name}
                  </span>
                  <span>{member.badge}</span>
                </div>
                <p className="text-text-muted text-xs">
                  {member.posts} posts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Guidelines
        </h3>
        <ul className="space-y-2 text-text-body text-sm">
          <li>• Be respectful and unfiltered</li>
          <li>• No spam or self-promotion</li>
          <li>• Stay on topic</li>
          <li>• Report inappropriate content</li>
        </ul>
      </div>
    </div>
  );
}