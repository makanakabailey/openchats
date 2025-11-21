export default function StatsBar() {
  const stats = [
    { value: '500K+', label: 'Subscribers' },
    { value: '100M+', label: 'Total Views' },
    { value: '#1', label: 'Podcast in SA' },
    { value: '2024', label: 'Award Winners' },
  ];

  return (
    <section className="py-12 px-4 bg-card-dark border-y border-zinc-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-display text-4xl md:text-5xl font-black text-spicy-orange mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm uppercase text-text-muted tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
