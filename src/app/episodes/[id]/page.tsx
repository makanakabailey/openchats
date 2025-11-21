import EpisodeHeader from '@/components/features/episodes/EpisodeHeader';
import AudioPlayer from '@/components/features/episodes/AudioPlayer';
import EpisodeTabs from '@/components/features/episodes/EpisodeTabs';
import RelatedEpisodes from '@/components/features/episodes/RelatedEpisodes';

interface EpisodePageProps {
  params: {
    id: string;
  };
}

export default function EpisodePage({ params }: EpisodePageProps) {
  // Mock episode data - would come from API
  const episode = {
    id: parseInt(params.id),
    title: 'EP 101: THE STREETS ARE TALKING 🔥',
    thumbnail: '/episodes/ep1.jpg',
    duration: '45:12',
    publishedAt: 'Nov 10, 2025',
    season: 3,
    episodeNumber: 101,
    description: 'In this episode, we dive deep into the controversial topic that\'s been on everyone\'s mind. Mtho and Sino bring their unfiltered takes on what\'s happening in the streets.',
    audioUrl: '/audio/episode-101.mp3', // Placeholder
  };

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-muted mb-6">
          <a href="/episodes" className="hover:text-spicy-orange">Episodes</a>
          <span className="mx-2">&gt;</span>
          <span>Season {episode.season}</span>
          <span className="mx-2">&gt;</span>
          <span>Episode {episode.episodeNumber}</span>
        </nav>

        <EpisodeHeader episode={episode} />
        <AudioPlayer episode={episode} />
        <EpisodeTabs episode={episode} />
        <RelatedEpisodes currentEpisodeId={episode.id} />
      </div>
    </div>
  );
}