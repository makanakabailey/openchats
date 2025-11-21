'use client';

import Link from 'next/link';
import { Fire, Heart, Smiley, ChatCircle, PaperPlaneRight } from '@phosphor-icons/react';
import { useState } from 'react';

interface DiscussionPageProps {
  params: {
    id: string;
  };
}

export default function DiscussionPage({ params }: DiscussionPageProps) {
  const [replyText, setReplyText] = useState('');

  // Mock discussion data
  const discussion = {
    id: parseInt(params.id),
    title: 'What did you think about EP 101? 🔥',
    author: 'Thabo M.',
    authorBadge: '🔥 Top Contributor',
    category: 'Episode Talk',
    content: `Just finished listening to EP 101 and WOW! That debate between Mtho and Sino was absolutely insane. 

The way they broke down the whole situation with dating culture in SA right now... I felt that. Mtho's take on modern relationships being transactional hit different. And Sino coming back with the "but we're all guilty" argument? Chef's kiss.

What did you all think? Who won the debate? Drop your takes below! 👇`,
    replies: 89,
    views: 1234,
    reactions: { fire: 45, love: 23, laugh: 12 },
    isPinned: true,
    createdAt: '2 hours ago',
  };

  const replies = [
    {
      id: 1,
      author: 'Nomsa K.',
      content: 'Mtho definitely won that debate! His points about accountability were spot on.',
      likes: 23,
      createdAt: '1 hour ago',
    },
    {
      id: 2,
      author: 'Sipho D.',
      content: 'Nah, Sino had the better argument. We ARE all guilty of what Mtho was complaining about.',
      likes: 18,
      createdAt: '45 minutes ago',
    },
  ];

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-muted mb-6">
          <Link href="/community" className="hover:text-spicy-orange">Community</Link>
          <span className="mx-2">&gt;</span>
          <span>{discussion.category}</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Discussion Header */}
          <div className="bg-card-dark rounded-lg p-6 md:p-8 border border-zinc-700 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
                {discussion.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="font-semibold text-white text-lg">{discussion.author}</h2>
                  <span className="text-xs bg-spicy-orange/20 text-spicy-orange px-2 py-1 rounded">
                    {discussion.authorBadge}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-text-muted text-sm flex-wrap">
                  <span className="text-spicy-orange">{discussion.category}</span>
                  <span>•</span>
                  <span>{discussion.createdAt}</span>
                  <span>•</span>
                  <span>{discussion.views} views</span>
                </div>
              </div>
            </div>

            <h1 className="font-display text-2xl md:text-4xl font-black uppercase text-white mb-6 break-words">
              {discussion.title}
            </h1>

            <div className="prose prose-invert max-w-none mb-6">
              <p className="text-text-body text-lg leading-relaxed whitespace-pre-line">
                {discussion.content}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-zinc-700 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-text-body hover:bg-zinc-700">
                <Fire size={20} weight="fill" />
                <span className="font-semibold">{discussion.reactions.fire}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-text-body hover:bg-zinc-700">
                <Heart size={20} weight="fill" />
                <span className="font-semibold">{discussion.reactions.love}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-text-body hover:bg-zinc-700">
                <Smiley size={20} weight="fill" />
                <span className="font-semibold">{discussion.reactions.laugh}</span>
              </button>
            </div>
          </div>

          {/* Reply Form */}
          <div className="bg-card-dark rounded-lg p-6 border border-zinc-700 mb-6">
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              Add Your Take
            </h3>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Share your thoughts... (be unfiltered)"
              rows={4}
              className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none resize-none mb-4"
            />
            <div className="flex items-center justify-between">
              <p className="text-text-muted text-sm">
                {replyText.length} / 1000 characters
              </p>
              <button
                disabled={!replyText.trim()}
                className="flex items-center gap-2 bg-spicy-orange hover:bg-spicy-orange-dark disabled:bg-zinc-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold uppercase transition-colors"
              >
                <PaperPlaneRight size={20} weight="bold" />
                Post Reply
              </button>
            </div>
          </div>

          {/* Replies */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
              {discussion.replies} Replies
            </h3>
            {replies.map((reply) => (
              <div key={reply.id} className="bg-card-dark rounded-lg p-6 border border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {reply.author.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-semibold text-white">{reply.author}</span>
                      <span className="text-text-muted text-sm">{reply.createdAt}</span>
                    </div>
                    <p className="text-text-body mb-4 leading-relaxed break-words">
                      {reply.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-text-muted hover:text-red-400 transition-colors">
                        <Heart size={16} weight="regular" />
                        <span className="text-sm">{reply.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-text-muted hover:text-spicy-orange transition-colors">
                        <ChatCircle size={16} weight="bold" />
                        <span className="text-sm">Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
