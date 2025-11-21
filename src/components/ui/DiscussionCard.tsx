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
      <div className="bg-card-dark hover:bg-card-darker border border-zinc-700 rounded-lg p-4 md:p-6 transition-colors cursor-pointer">
        <div className="flex items-start gap-3 md:gap-4">
          {/* Avatar Placeholder */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
            {discussion.author.charAt(0)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  {discussion.isPinned && (
                    <PushPin size={14} weight="fill" className="text-spicy-orange flex-shrink-0 mt-1" />
                  )}
                  <h3 className="font-display text-base md:text-lg font-bold text-white line-clamp-2 hover:text-spicy-orange transition-colors break-words">
                    {discussion.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-text-muted text-xs md:text-sm">
                  <span className="font-semibold truncate max-w-[120px]">{discussion.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-spicy-orange truncate">{discussion.category}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">{discussion.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-text-body text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 break-words">
              {discussion.excerpt}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-text-muted text-xs md:text-sm">
              <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                <ChatCircle size={14} weight="bold" className="md:w-4 md:h-4 flex-shrink-0" />
                <span>{discussion.replies}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                <Eye size={14} weight="bold" className="md:w-4 md:h-4 flex-shrink-0" />
                <span>{discussion.views}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Fire size={14} weight="fill" className="text-spicy-orange md:w-4 md:h-4 flex-shrink-0" />
                  <span>{discussion.reactions.fire}</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Heart size={14} weight="fill" className="text-red-400 md:w-4 md:h-4 flex-shrink-0" />
                  <span>{discussion.reactions.love}</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Smiley size={14} weight="fill" className="text-yellow-400 md:w-4 md:h-4 flex-shrink-0" />
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