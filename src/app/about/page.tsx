import AboutHero from '@/components/features/about/AboutHero';
import HostProfiles from '@/components/features/about/HostProfiles';
import PodcastStats from '@/components/features/about/PodcastStats';
import MediaKit from '@/components/features/about/MediaKit';
import Awards from '@/components/features/about/Awards';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-studio-black">
      <AboutHero />
      <HostProfiles />
      <PodcastStats />
      <Awards />
      <MediaKit />
    </div>
  );
}