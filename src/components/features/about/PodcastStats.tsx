export default function PodcastStats() {
  const stats = [
    {
      icon: '🎙️',
      value: '100+',
      label: 'Episodes Released',
      description: 'Raw conversations, no filter',
    },
    {
      icon: '👥',
      value: '500K+',
      label: 'Subscribers',
      description: 'Across all platforms',
    },
    {
      icon: '👁️',
      value: '100M+',
      label: 'Total Views',
      description: 'And counting',
    },
    {
      icon: '🔥',
      value: '50+',
      label: 'Viral Moments',
      description: 'Trending on social media',
    },
    {
      icon: '🏆',
      value: '#1',
      label: 'Podcast in SA',
      description: '2024 Rankings',
    },
    {
      icon: '⭐',
      value: '4.9',
      label: 'Average Rating',
      description: 'From listeners',
    },
  ];

  return (
    <section className="py-20 px-4 bg-card-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-4">
            BY THE NUMBERS
          </h2>
          <p className="text-text-body text-lg">
            The stats don't lie - we're SA's most unfiltered podcast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-studio-black rounded-lg p-8 border border-zinc-700 hover:border-spicy-orange transition-colors text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="font-display text-4xl font-black text-spicy-orange mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-white text-lg mb-2">
                {stat.label}
              </div>
              <div className="text-text-muted text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}