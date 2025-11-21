// Open Chats - Homepage
import Hero from '@/components/features/home/Hero';
import MarqueeBar from '@/components/features/home/MarqueeBar';
import TrendingEpisodes from '@/components/features/home/TrendingEpisodes';
import MerchDrop from '@/components/features/home/MerchDrop';
import StatsBar from '@/components/features/home/StatsBar';
import MembershipTiers from '@/components/features/membership/MembershipTiers';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-studio-black">
      <Hero />
      <MarqueeBar />
      <TrendingEpisodes />
      <MembershipTiers compact={true} />
      <MerchDrop />
      <StatsBar />
    </div>
  );
}
