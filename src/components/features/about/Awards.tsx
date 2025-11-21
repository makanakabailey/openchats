import Image from 'next/image';

export default function Awards() {
  const awards = [
    {
      year: '2024',
      title: 'SA Social Media Award',
      category: 'Best Podcast',
      description: 'Recognized for outstanding content and engagement',
    },
    {
      year: '2024',
      title: 'Podcast of the Year',
      category: 'Entertainment',
      description: 'Voted by listeners across South Africa',
    },
    {
      year: '2023',
      title: 'Rising Star Award',
      category: 'New Media',
      description: 'Fastest growing podcast in SA',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-4">
            AWARDS & RECOGNITION
          </h2>
          <p className="text-text-body text-lg">
            Honored to be recognized by the community
          </p>
        </div>

        {/* Award Image */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-spicy-orange">
            <Image
              src="/hero/hero4.jpg"
              alt="Podcast of the Year Award"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Awards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div 
              key={`${award.year}-${award.title}`}
              className="bg-card-dark rounded-lg p-8 border border-zinc-700 text-center hover:border-spicy-orange transition-colors"
            >
              <div className="inline-block bg-spicy-orange text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                {award.year}
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                {award.title}
              </h3>
              <p className="text-spicy-orange font-semibold mb-3">
                {award.category}
              </p>
              <p className="text-text-muted text-sm">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}