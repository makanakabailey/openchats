import EpisodesHero from '@/components/features/episodes/EpisodesHero';
import EpisodesGrid from '@/components/features/episodes/EpisodesGrid';

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-studio-black">
      <EpisodesHero />
      <EpisodesGrid />
    </div>
  );
}