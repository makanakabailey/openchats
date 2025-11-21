import type { Metadata } from 'next';
import { Oswald, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyAudioPlayer from '@/components/features/audio/StickyAudioPlayer';

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Open Chats - SA\'s Most Unfiltered Podcast | Mtho & Sino',
  description: 'SA\'s most unfiltered podcast. No scripts, no PR, just raw conversations about dating, money, and the streets. Hosted by Mtho & Sino.',
  keywords: ['podcast', 'South Africa', 'Mtho', 'Sino', 'Open Chats', 'unfiltered', 'dating', 'money', 'culture'],
  icons: {
    icon: '/logo-new.jpg',
    apple: '/logo-new.jpg',
  },
  openGraph: {
    title: 'Open Chats - SA\'s Most Unfiltered Podcast',
    description: 'Raw conversations. No filter. Pure spice.',
    type: 'website',
    locale: 'en_ZA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} ${dmSans.variable} font-body bg-studio-black text-text-body antialiased`}>
        <div className="flex flex-col min-h-screen pb-20">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyAudioPlayer />
        </div>
      </body>
    </html>
  );
}
