'use client';

import { useState } from 'react';
import { Fire, Heart, Smiley, ShareNetwork, Flag, PushPin, Lock } from '@phosphor-icons/react';

interface Discussion {
  id: number;
  title: string;
  author: string;
  authorBadge: string;
  category: string;
  content: string;
  reactions: {
    fire: number;
    love: number;
    laugh: number;
  };
  isPinned: boolean;
  isLocked: boolean;
  createdAt: string;
  views: number;
}

interface DiscussionHeaderProps {
  discussion: Discussion;
}

export default function DiscussionHeader({ discussion }: DiscussionHeaderProps) {
  const [userReaction, setUserReaction] = useState<string | null>(null);

  const handleReaction = (type: string) => {
    setUserReaction(userReaction === type ? null : type);
  };

  return (
    <div className="bg-card-dark rounded-lg p-8 border border-zinc-700 mb-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
          {discussion.author.charAt(0)}
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-semibold text-white text-lg">{discussion.author}</h2>
            <span className="text-xs bg-spicy-orange/20 text-spicy-orange px-2 py-1 rounded">
              {discussion.authorBadge}
            </span>
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <span className="text-spicy-orange">{discussion.category}</span>
            <span>•</span>
            <span>{discussion.createdAt}</span>
            <span>•</span>
            <span>{discussion.views} views</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {discussion.isPinned && (
            <div className="flex items-center gap-1 text-spicy-orange text-sm">
              <PushPin size={16} weight="fill" />
              <span>Pinned</span>
            </div>
          )}
          {discussion.isLocked && (
            <div className="flex items-center gap-1 text-text-muted text-sm">
              <Lock size={16} weight="fill" />
              <span>Locked</span>
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl md:text-4xl font-black uppercase text-white mb-6">
        {discussion.title}
      </h1>

      {/* Content */}
      <div className="prose prose-invert max-w-none mb-6">
        <p className="text-text-body text-lg leading-relaxed whitespace-pre-line">
          {discussion.content}
        </p>
      </div>

      {/* Reactions & Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-zinc-700">
        {/* Reactions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleReaction('fire')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              userReaction === 'fire'
                ? 'bg-spicy-orange text-white'
                : 'bg-zinc-800 text-text-body hover:bg-zinc-700'
            }`}
          >
            <Fire size={20} weight="fill" />
            <span className="font-semibold">{discussion.reactions.fire}</span>
          </button>
          
          <button
            onClick={() => handleReaction('love')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              userReaction === 'love'
                ? 'bg-red-500 text-white'
                : 'bg-zinc-800 text-text-body hover:bg-zinc-700'
            }`}
          >
            <Heart size={20} weight="fill" />
            <span className="font-semibold">{discussion.reactions.love}</span>
          </button>
          
          <button
            onClick={() => handleReaction('laugh')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              userReaction === 'laugh'
                ? 'bg-yellow-500 text-white'
                : 'bg-zinc-800 text-text-body hover:bg-zinc-700'
            }`}
          >
            <Smiley size={20} weight="fill" />
            <span className="font-semibold">{discussion.reactions.laugh}</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-text-body rounded-lg transition-colors">
            <ShareNetwork size={20} weight="bold" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-text-body rounded-lg transition-colors">
            <Flag size={20} weight="bold" />
            <span>Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}