'use client';

import { Briefcase, Megaphone, Handshake, Lightbulb } from '@phosphor-icons/react';

export default function WorkWithUs() {
  const opportunities = [
    {
      icon: Megaphone,
      title: 'Sponsorships',
      description: 'Partner with SA\'s most unfiltered podcast and reach our engaged audience.',
      cta: 'partnerships@openchats.co.za',
    },
    {
      icon: Handshake,
      title: 'Collaborations',
      description: 'Work with us on special episodes, events, or content series.',
      cta: 'hello@openchats.co.za',
    },
    {
      icon: Briefcase,
      title: 'Guest Appearances',
      description: 'Have a story to tell? We\'re always looking for interesting guests.',
      cta: 'Apply via form above',
    },
    {
      icon: Lightbulb,
      title: 'Brand Partnerships',
      description: 'Integrate your brand authentically into our content and community.',
      cta: 'partnerships@openchats.co.za',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-studio-black to-card-darker">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white mb-4">
            WORK WITH US
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Let's create something unfiltered together. We're open to partnerships, 
            sponsorships, and collaborations that align with our vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="bg-card-dark rounded-lg p-6 border border-zinc-700 hover:border-spicy-orange transition-all group"
            >
              <opp.icon 
                size={40} 
                weight="bold" 
                className="text-spicy-orange mb-4 group-hover:scale-110 transition-transform" 
              />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                {opp.title}
              </h3>
              <p className="text-text-body mb-4">
                {opp.description}
              </p>
              <p className="text-spicy-orange font-semibold text-sm">
                {opp.cta}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-display text-4xl font-black text-spicy-orange mb-2">
              50K+
            </div>
            <div className="text-text-muted text-sm uppercase">
              Monthly Listeners
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-black text-spicy-orange mb-2">
              15K+
            </div>
            <div className="text-text-muted text-sm uppercase">
              Community Members
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-black text-spicy-orange mb-2">
              100+
            </div>
            <div className="text-text-muted text-sm uppercase">
              Episodes
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-black text-spicy-orange mb-2">
              85%
            </div>
            <div className="text-text-muted text-sm uppercase">
              Engagement Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
