'use client';

import Link from 'next/link';
import { BroadcastIcon as Broadcast, Users } from '@phosphor-icons/react';

export default function LiveEventBanner() {
  // Mock live event data
  const liveEvent = {
    isLive: true,
    title: 'LIVE Q&A WITH MTHO & SINO',
    viewerCount: 1247,
    startTime: 'Now',
  };

  if (!liveEvent.isLive) return null;

  return (
    <section className="bg-gradient-to-r from-spicy-orange to-electric-purple py-4 md:py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <Broadcast size={20} weight="fill" className="text-white md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-white truncate">
                {liveEvent.title}
              </h3>
              <div className="flex items-center gap-2 md:gap-3 text-white/90 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <Users size={14} weight="bold" className="md:w-4 md:h-4" />
                  <span className="whitespace-nowrap">{liveEvent.viewerCount.toLocaleString()} watching</span>
                </div>
              </div>
            </div>
          </div>
          
          <Link 
            href="/live"
            className="bg-white text-spicy-orange px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold uppercase text-xs sm:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap w-full md:w-auto text-center block"
          >
            JOIN LIVE NOW →
          </Link>
        </div>
      </div>
    </section>
  );
}