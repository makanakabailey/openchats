import MembershipTiers from '@/components/features/membership/MembershipTiers';
import { Crown, Star, Users, Gift } from '@phosphor-icons/react/dist/ssr';

export default function MembershipPage() {
  const benefits = [
    {
      icon: Crown,
      title: 'Exclusive Content',
      description: 'Access members-only posts, behind-the-scenes content, and bonus episodes.',
    },
    {
      icon: Star,
      title: 'Stand Out',
      description: 'Get special badges and emojis that show your support in comments and live chat.',
    },
    {
      icon: Users,
      title: 'VIP Community',
      description: 'Join exclusive live chats and connect with other operators in private channels.',
    },
    {
      icon: Gift,
      title: 'Perks & Rewards',
      description: 'Early access to merch drops, discount codes, and special giveaways.',
    },
  ];

  return (
    <div className="min-h-screen bg-studio-black pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-card-darker to-studio-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-spicy-orange/20 border border-spicy-orange rounded-full text-spicy-orange font-semibold mb-6">
            <Crown size={20} weight="bold" />
            <span>BECOME AN OPERATOR</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-white mb-6">
            SUPPORT THE SHOW,<br />GET EXCLUSIVE PERKS
          </h1>
          <p className="text-text-body text-xl max-w-2xl mx-auto">
            Join thousands of operators supporting SA's most unfiltered podcast. 
            Choose your tier and unlock exclusive content, badges, and more.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white text-center mb-12">
            WHY BECOME AN OPERATOR?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card-dark rounded-lg p-8 border border-zinc-700 hover:border-spicy-orange transition-all group"
              >
                <benefit.icon 
                  size={48} 
                  weight="bold" 
                  className="text-spicy-orange mb-4 group-hover:scale-110 transition-transform" 
                />
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <MembershipTiers />

      {/* FAQ */}
      <section className="py-20 px-4 bg-card-darker">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white text-center mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I cancel my membership?',
                a: 'You can cancel anytime from your account settings. Your benefits will remain active until the end of your billing period.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit/debit cards and EFT through PayFast, South Africa\'s leading payment gateway.',
              },
              {
                q: 'Can I upgrade or downgrade my tier?',
                a: 'Yes! You can change your tier anytime. Upgrades take effect immediately, downgrades at the next billing cycle.',
              },
              {
                q: 'Do I get access to past exclusive content?',
                a: 'Yes! When you join, you get access to all previous members-only content for your tier level.',
              },
              {
                q: 'Is there a discount for annual subscriptions?',
                a: 'Not yet, but we\'re working on it! Follow us on social media for announcements.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card-dark rounded-lg p-6 border border-zinc-700">
                <h3 className="font-semibold text-white text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-text-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white mb-6">
            READY TO JOIN?
          </h2>
          <p className="text-text-body text-lg mb-8">
            Choose your tier above and become part of the operator community today.
          </p>
          <a href="#tiers" className="btn-primary inline-block">
            VIEW MEMBERSHIP TIERS
          </a>
        </div>
      </section>
    </div>
  );
}
