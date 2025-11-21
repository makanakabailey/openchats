import Image from 'next/image';
import { ChatCircle, ShareNetwork, Star } from '@phosphor-icons/react/dist/ssr';

interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  season: number;
  episodeNumber: number;
  description: string;
}

interface EpisodeHeaderProps {
  episode: Episode;
}

export default function EpisodeHeader({ episode }: EpisodeHeaderProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Episode Artwork */}
      <div className="lg:col-span-1">
        <div className="aspect-square relative rounded-lg overflow-hidden bg-zinc-800">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Episode Info */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-black uppercase text-white mb-4">
            {episode.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-text-muted mb-4">
            <span>Released: {episode.publishedAt}</span>
            <span>•</span>
            <span>Duration: {episode.duration}</span>
            <span>•</span>
            <span>Season {episode.season}, Episode {episode.episodeNumber}</span>
          </div>
          <p className="text-text-body text-lg leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-card-dark hover:bg-card-darker border border-zinc-700 rounded-lg text-white transition-colors">
            <ChatCircle size={20} weight="bold" />
            <span>Join Discussion (89)</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-card-dark hover:bg-card-darker border border-zinc-700 rounded-lg text-white transition-colors">
            <ShareNetwork size={20} weight="bold" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-card-dark hover:bg-card-darker border border-zinc-700 rounded-lg text-white transition-colors">
            <Star size={20} weight="bold" />
            <span>Favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}