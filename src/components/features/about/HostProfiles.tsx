import Image from 'next/image';
import { InstagramLogo, TwitterLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr';

export default function HostProfiles() {
  const hosts = [
    {
      name: 'MTHO',
      role: 'Co-Host & Creator',
      bio: 'The unfiltered voice of reason (sometimes). Mtho brings the controversial takes and isn\'t afraid to call it like he sees it. Known for his no-nonsense approach to dating, money, and culture in SA.',
      image: '/hosts/mtho.jpg',
      stats: [
        { label: 'Episodes Hosted', value: '100+' },
        { label: 'Viral Moments', value: '50+' },
        { label: 'Debates Won', value: '∞' },
      ],
      social: {
        instagram: 'https://instagram.com/mtho',
        twitter: 'https://twitter.com/mtho',
        tiktok: 'https://tiktok.com/@mtho',
      },
      quote: '"If it\'s not controversial, we\'re not talking about it."',
    },
    {
      name: 'SINO',
      role: 'Co-Host & Creator',
      bio: 'The other half of the chaos. Sino brings the energy, the laughs, and the counterpoints that keep every episode spicy. When Mtho goes left, Sino goes right - and that\'s what makes it work.',
      image: '/hosts/sino.jpg',
      stats: [
        { label: 'Episodes Hosted', value: '100+' },
        { label: 'Laughs Per Episode', value: '1000+' },
        { label: 'Debates Lost', value: '0' },
      ],
      social: {
        instagram: 'https://instagram.com/sino',
        twitter: 'https://twitter.com/sino',
        tiktok: 'https://tiktok.com/@sino',
      },
      quote: '"We say what everyone\'s thinking but too scared to say."',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-20">
          {hosts.map((host, index) => (
            <div 
              key={host.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Host Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-800 border-4 border-spicy-orange">
                  <Image
                    src={host.image}
                    alt={host.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Host Info */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white mb-2">
                      {host.name}
                    </h2>
                    <p className="text-spicy-orange text-xl font-semibold uppercase tracking-wide">
                      {host.role}
                    </p>
                  </div>

                  <p className="text-text-body text-lg leading-relaxed">
                    {host.bio}
                  </p>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-spicy-orange pl-6 py-4 bg-card-dark rounded-r-lg">
                    <p className="text-white text-xl italic">
                      {host.quote}
                    </p>
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {host.stats.map((stat) => (
                      <div key={stat.label} className="bg-card-dark rounded-lg p-4 text-center border border-zinc-700">
                        <div className="font-display text-2xl font-black text-spicy-orange mb-1">
                          {stat.value}
                        </div>
                        <div className="text-text-muted text-xs uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <span className="text-text-muted font-semibold">Follow:</span>
                    <a 
                      href={host.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card-dark hover:bg-spicy-orange border border-zinc-700 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <InstagramLogo size={24} weight="fill" />
                    </a>
                    <a 
                      href={host.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card-dark hover:bg-spicy-orange border border-zinc-700 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <TwitterLogo size={24} weight="fill" />
                    </a>
                    <a 
                      href={host.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card-dark hover:bg-spicy-orange border border-zinc-700 rounded-lg flex items-center justify-center text-white transition-colors"
                    >
                      <TiktokLogo size={24} weight="fill" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}