import EpisodeCard from '@/components/ui/EpisodeCard';

interface RelatedEpisodesProps {
  currentEpisodeId: number;
}

export default function RelatedEpisodes({ currentEpisodeId }: RelatedEpisodesProps) {
  // Mock related episodes data
  const relatedEpisodes = [
    {
      id: 100,
      title: 'EP 100: MTHO VS SINO DEBATE 💀',
      thumbnail: '/episodes/ep2.jpg',
      views: '890K',
      publishedAt: '1 week ago',
      duration: '52:30',
      isHot: false,
    },
    {
      id: 99,
      title: 'EP 99: DATING IN 2025 IS DEAD 💔',
      thumbnail: '/episodes/ep3.jpg',
      views: '750K',
      publishedAt: '2 weeks ago',
      duration: '38:22',
      isHot: false,
    },
    {
      id: 98,
      title: 'EP 98: MONEY TALKS, WEALTH WHISPERS 💰',
      thumbnail: '/episodes/ep4.jpg',
      views: '920K',
      publishedAt: '3 weeks ago',
      duration: '41:15',
      isHot: false,
    },
  ].filter(episode => episode.id !== currentEpisodeId);

  return (
    <section>
      <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-8">
        🎙️ More Episodes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="/episodes" className="btn-secondary">
          VIEW ALL EPISODES
        </a>
      </div>
    </section>
  );
}