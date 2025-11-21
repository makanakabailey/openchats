'use client';

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
    <section className="bg-gradient-to-r from-spicy-orange to-electric-purple py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <Broadcast size={24} weight="fill" className="text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold uppercase text-white">
                {liveEvent.title}
              </h3>
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Users size={16} weight="bold" />
                  <span>{liveEvent.viewerCount.toLocaleString()} watching</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-spicy-orange px-8 py-3 rounded-lg font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
            JOIN LIVE NOW →
          </button>
        </div>
      </div>
    </section>
  );
}