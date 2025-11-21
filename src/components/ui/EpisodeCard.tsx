import Link from 'next/link';
import { Play, Fire } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
  duration: string;
  isHot?: boolean;
}

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`} className="group block">
      <div className="card-dark hover:scale-105 transition-transform duration-300">
        {/* Thumbnail with Play Overlay */}
        <div className="relative aspect-video bg-zinc-800 overflow-hidden">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={75}
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-20 h-20 rounded-full bg-spicy-orange flex items-center justify-center">
              <Play size={40} weight="fill" className="text-white ml-1" />
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">
            {episode.duration}
          </div>
          
          {/* Hot Badge */}
          {episode.isHot && (
            <div className="absolute top-2 left-2 bg-spicy-orange px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
              <Fire size={16} weight="fill" />
              HOT
            </div>
          )}
        </div>
        
        {/* Episode Info */}
        <div className="p-4">
          <h3 className="font-display text-lg md:text-xl font-bold uppercase text-white mb-2 line-clamp-2">
            {episode.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span>{episode.views} views</span>
            <span>•</span>
            <span>{episode.publishedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
