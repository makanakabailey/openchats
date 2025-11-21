export default function AboutHero() {
  return (
    <section className="relative bg-hero-gradient pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            MEET THE HOSTS
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-body mb-8 leading-relaxed">
            Mtho & Sino - The voices behind SA's most unfiltered podcast
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-text-body">
            <div className="flex items-center gap-2">
              <span className="text-spicy-orange font-display text-3xl font-black">500K+</span>
              <span>Subscribers</span>
            </div>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-2">
              <span className="text-spicy-orange font-display text-3xl font-black">100M+</span>
              <span>Views</span>
            </div>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-2">
              <span className="text-spicy-orange font-display text-3xl font-black">#1</span>
              <span>Podcast in SA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}