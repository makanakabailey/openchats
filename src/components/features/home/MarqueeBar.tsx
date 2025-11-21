export default function MarqueeBar() {
  const items = [
    'UNFILTERED',
    'RAW',
    'CONTROVERSIAL',
    'TRENDING',
    '500K+ SUBS',
    'SA SOCIAL MEDIA AWARD WINNERS',
    '#1 PODCAST IN SA',
  ];

  return (
    <div className="bg-spicy-orange py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="font-display text-2xl font-bold uppercase text-white mx-8">
              {item}
            </span>
            <span className="text-white mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
