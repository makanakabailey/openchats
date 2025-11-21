'use client';

import DiscussionHeader from '@/components/features/community/DiscussionHeader';
import ReplyThread from '@/components/features/community/ReplyThread';

interface DiscussionPageProps {
  params: {
    id: string;
  };
}

export default function DiscussionPage({ params }: DiscussionPageProps) {
  // Mock discussion data
  const discussion = {
    id: parseInt(params.id),
    title: 'What did you think about EP 101? 🔥',
    author: 'Thabo M.',
    authorAvatar: '/avatars/user1.jpg',
    authorBadge: '🔥 Top Contributor',
    category: 'Episode Talk',
    episodeId: 101,
    content: `Just finished listening to EP 101 and WOW! That debate between Mtho and Sino was absolutely insane. 

The way they broke down the whole situation with dating culture in SA right now... I felt that. Mtho's take on modern relationships being transactional hit different. And Sino coming back with the "but we're all guilty" argument? Chef's kiss.

What did you all think? Who won the debate? Drop your takes below! 👇`,
    replies: 89,
    views: 1234,
    reactions: { fire: 45, love: 23, laugh: 12 },
    isPinned: true,
    isLocked: false,
    createdAt: '2 hours ago',
  };

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-muted mb-6">
          <a href="/community" className="hover:text-spicy-orange">Community</a>
          <span className="mx-2">&gt;</span>
          <span>{discussion.category}</span>
          <span className="mx-2">&gt;</span>
          <span className="truncate inline-block max-w-[200px] md:max-w-none">{discussion.title}</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <DiscussionHeader discussion={discussion} />
          <ReplyThread discussionId={discussion.id} replyCount={discussion.replies} />
        </div>
      </div>
    </div>
  );
}
