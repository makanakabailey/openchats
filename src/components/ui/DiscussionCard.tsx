import Link from 'next/link';
import { ChatCircle, Eye, Fire, Heart, Smiley, PushPin } from '@phosphor-icons/react/dist/ssr';

interface Discussion {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  reactions: {
    fire: number;
    love: number;
    laugh: number;
  };
  isPinned: boolean;
  createdAt: string;
  excerpt: string;
  episodeId?: number;
}

interface DiscussionCardProps {
  discussion: Discussion;
}

export default function DiscussionCard({ discussion }: DiscussionCardProps) {
  const totalReactions = discussion.reactions.fire + discussion.reactions.love + discussion.reactions.laugh;

  return (
    <Link href={`/community/${discussion.id}`}>
      <div className="bg-card-dark hover:bg-card-darker border border-zinc-700 rounded-lg p-6 transition-colors cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Avatar Placeholder */}
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center text-white font-bold">
            {discussion.author.charAt(0)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {discussion.isPinned && (
                    <PushPin size={16} weight="fill" className="text-spicy-orange" />
                  )}
                  <h3 className="font-display text-lg font-bold text-white line-clamp-2 hover:text-spicy-orange transition-colors">
                    {discussion.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-text-muted text-sm">
                  <span className="font-semibold">{discussion.author}</span>
                  <span>•</span>
                  <span className="text-spicy-orange">{discussion.category}</span>
                  <span>•</span>
                  <span>{discussion.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-text-body text-sm mb-4 line-clamp-2">
              {discussion.excerpt}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <ChatCircle size={16} weight="bold" />
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} weight="bold" />
                <span>{discussion.views} views</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Fire size={16} weight="fill" className="text-spicy-orange" />
                  <span>{discussion.reactions.fire}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={16} weight="fill" className="text-red-400" />
                  <span>{discussion.reactions.love}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Smiley size={16} weight="fill" className="text-yellow-400" />
                  <span>{discussion.reactions.laugh}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}