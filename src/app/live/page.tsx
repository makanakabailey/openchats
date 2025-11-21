'use client';

import { Play, Users, ChatCircle } from '@phosphor-icons/react';

export default function LivePage() {
  return (
    <div className="min-h-screen bg-studio-black pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card-darker to-studio-black py-12 md:py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full text-white font-bold uppercase text-sm mb-4 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span>LIVE NOW</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase text-white mb-4 md:mb-6 break-words">
              WATCH LIVE
            </h1>
            <p className="text-text-body text-base md:text-xl max-w-2xl mx-auto px-4">
              Join us live. Unfiltered conversations happening right now.
            </p>
          </div>

          {/* Live Stats */}
          <div className="flex justify-center gap-6 md:gap-8 mb-8 text-text-body text-sm md:text-base flex-wrap">
            <div className="flex items-center gap-2">
              <Users size={20} weight="bold" className="text-spicy-orange flex-shrink-0" />
              <span className="whitespace-nowrap">1,247 watching</span>
            </div>
            <div className="flex items-center gap-2">
              <ChatCircle size={20} weight="bold" className="text-spicy-orange flex-shrink-0" />
              <span className="whitespace-nowrap">Active chat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-card-dark rounded-lg overflow-hidden border border-zinc-700">
            <div className="aspect-video flex flex-col items-center justify-center bg-zinc-900">
              <Play size={64} weight="fill" className="text-spicy-orange mb-4" />
              <p className="text-white font-bold text-lg mb-4">
                Live Stream Coming Soon
              </p>
              <p className="text-text-muted text-sm max-w-md text-center px-4">
                We'll be going live soon. Follow us on YouTube, Twitch, and Instagram for notifications.
              </p>
            </div>
          </div>

          {/* Stream Info */}
          <div className="mt-6 bg-card-dark rounded-lg p-6 border border-zinc-700">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-4">
              LIVE Q&A WITH MTHO & SINO
            </h2>
            <p className="text-text-body mb-4">
              Join us for an unfiltered Q&A session. Ask anything, get real answers. 
              No topic is off limits.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-spicy-orange/20 text-spicy-orange rounded-full text-sm font-semibold">
                #LiveQA
              </span>
              <span className="px-3 py-1 bg-spicy-orange/20 text-spicy-orange rounded-full text-sm font-semibold">
                #Unfiltered
              </span>
              <span className="px-3 py-1 bg-spicy-orange/20 text-spicy-orange rounded-full text-sm font-semibold">
                #OpenChats
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 md:py-20 px-4 bg-card-darker">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white text-center mb-12">
            WATCH ON ALL PLATFORMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/@openchats"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500/10 rounded-lg p-8 border-2 border-red-500 hover:scale-105 transition-transform text-center"
            >
              <div className="text-6xl mb-4">📺</div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                YouTube
              </h3>
              <p className="text-text-body text-sm">
                Watch live streams and past episodes
              </p>
            </a>
            <a
              href="https://www.twitch.tv/openchats"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/10 rounded-lg p-8 border-2 border-purple-500 hover:scale-105 transition-transform text-center"
            >
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Twitch
              </h3>
              <p className="text-text-body text-sm">
                Interactive live streams with chat
              </p>
            </a>
            <a
              href="https://www.instagram.com/openchats"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500/10 rounded-lg p-8 border-2 border-pink-500 hover:scale-105 transition-transform text-center"
            >
              <div className="text-6xl mb-4">📱</div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Instagram
              </h3>
              <p className="text-text-body text-sm">
                Behind the scenes and live stories
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
