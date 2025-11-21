'use client';

import { useState } from 'react';
import { PlayCircle, PauseCircle, SpeakerHigh, X } from '@phosphor-icons/react';

export default function StickyAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Set to true when episode is playing
  const [progress, setProgress] = useState(33); // Mock progress

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-zinc-800">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-800">
        <div 
          className="h-full bg-spicy-orange transition-all" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      
      {/* Player Content */}
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-[20%_60%_20%] md:grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
          {/* Thumbnail */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-800 rounded-md overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-electric-purple/20 to-zinc-900" />
          </div>
          
          {/* Track Info */}
          <div className="overflow-hidden min-w-0">
            <div className="whitespace-nowrap overflow-hidden">
              <span className="font-display text-xs md:text-sm font-bold uppercase text-white">
                EP 101: THE STREETS ARE TALKING...
              </span>
            </div>
            <p className="text-xs text-text-muted">Mtho & Sino</p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-end gap-2 md:gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-spicy-orange transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <PauseCircle size={48} weight="fill" />
              ) : (
                <PlayCircle size={48} weight="fill" />
              )}
            </button>
            
            <button 
              className="hidden md:block text-white hover:text-spicy-orange transition-colors"
              aria-label="Volume"
            >
              <SpeakerHigh size={24} weight="bold" />
            </button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-spicy-orange transition-colors"
              aria-label="Close player"
            >
              <X size={24} weight="bold" />
            </button>
          </div>
        </div>
        
        {/* Time Display (Desktop) */}
        <div className="hidden md:flex justify-between text-xs text-text-muted mt-2">
          <span>15:23</span>
          <span>45:12</span>
        </div>
      </div>
    </div>
  );
}
