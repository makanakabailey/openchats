import EpisodeCard from '@/components/ui/EpisodeCard';

export default function TrendingEpisodes() {
  // Real episode data with actual thumbnails
  const episodes = [
    {
      id: 101,
      title: 'EP 101: THE STREETS ARE TALKING 🔥',
      thumbnail: '/episodes/ep1.jpg',
      views: '1.2M',
      publishedAt: '2 days ago',
      duration: '45:12',
      isHot: true,
    },
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
  ];

  return (
    <section className="py-20 px-4 bg-studio-black">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-12">
          TRENDING EPISODES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}
