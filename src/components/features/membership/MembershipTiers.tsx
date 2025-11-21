'use client';

import { Crown, Star, Sparkle, Check } from '@phosphor-icons/react';

interface MembershipTiersProps {
  compact?: boolean;
}

export default function MembershipTiers({ compact = false }: MembershipTiersProps) {
  const tiers = [
    {
      id: 'operator',
      name: 'Operator',
      icon: Star,
      price: 'R25 - R50',
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500',
      perks: [
        'Exclusive Members-Only Emojis',
        'Loyalty Badges in comments & live chat',
        'Stand out in the community',
        'Support the podcast',
      ],
    },
    {
      id: 'insider',
      name: 'Insider Operator',
      icon: Sparkle,
      price: 'R75 - R100',
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500',
      popular: true,
      perks: [
        'All Operator benefits',
        'Members-Only Posts & behind-the-scenes',
        'Exclusive Live Chats',
        'Monthly Bonus Videos',
        'Early access to announcements',
      ],
    },
    {
      id: 'chief',
      name: 'Chief Operator',
      icon: Crown,
      price: 'R150+',
      color: 'text-spicy-orange',
      bgGradient: 'from-spicy-orange/20 to-yellow-600/20',
      borderColor: 'border-spicy-orange',
      perks: [
        'All Insider Operator benefits',
        'Shout-outs on the podcast',
        'Early access to episodes',
        'Influence content with exclusive polls',
        'VIP Discord channel access',
        'Annual meet & greet invitation',
      ],
    },
  ];

  if (compact) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-spicy-orange/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-spicy-orange/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Crown size={48} weight="bold" className="text-spicy-orange flex-shrink-0" />
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-white mb-2">
                    JOIN THE OPERATORS
                  </h3>
                  <p className="text-text-body">
                    Unlock exclusive perks, badges, and support SA's most unfiltered podcast
                  </p>
                </div>
              </div>
              <a 
                href="/membership"
                className="btn-primary whitespace-nowrap flex-shrink-0"
              >
                VIEW TIERS
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {tiers.map(tier => (
                <div
                  key={tier.id}
                  className="bg-card-dark/50 rounded-lg p-4 border border-zinc-700 hover:border-spicy-orange transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <tier.icon size={24} weight="bold" className={tier.color} />
                    <span className="font-display font-bold text-white">{tier.name}</span>
                  </div>
                  <p className="text-text-muted text-sm">{tier.price}/month</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-card-darker to-studio-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white mb-4">
            BECOME AN OPERATOR
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Support SA's most unfiltered podcast and unlock exclusive perks. 
            Choose your tier and join the inner circle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-card-dark rounded-lg border-2 ${tier.borderColor} overflow-hidden group hover:scale-105 transition-transform`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-spicy-orange text-studio-black px-4 py-1 text-xs font-black uppercase">
                  MOST POPULAR
                </div>
              )}

              <div className={`bg-gradient-to-br ${tier.bgGradient} p-6 border-b border-zinc-700`}>
                <tier.icon size={48} weight="bold" className={tier.color} />
                <h3 className="font-display text-2xl font-black uppercase text-white mt-4 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-black text-white">
                    {tier.price}
                  </span>
                  <span className="text-text-muted text-sm">/month</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {tier.perks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={20} weight="bold" className={`${tier.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-text-body text-sm">{perk}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 pt-0">
                <button className={`w-full py-3 rounded-lg font-bold uppercase transition-all ${
                  tier.popular
                    ? 'bg-spicy-orange hover:bg-orange-600 text-studio-black'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600'
                }`}>
                  SELECT {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            All memberships are billed monthly. Cancel anytime. Payments processed securely via PayFast.
          </p>
        </div>
      </div>
    </section>
  );
}
