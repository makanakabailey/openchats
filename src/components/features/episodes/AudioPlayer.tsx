'use client';

import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, SpeakerHigh, Gear, DownloadSimple } from '@phosphor-icons/react';

interface Episode {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
}

interface AudioPlayerProps {
  episode: Episode;
}

export default function AudioPlayer({ episode }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('15:23');
  const [progress, setProgress] = useState(34); // Percentage
  const [volume, setVolume] = useState(75);
  const [speed, setSpeed] = useState('1x');

  const speedOptions = ['0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x'];

  return (
    <div className="bg-card-dark rounded-lg p-6 mb-8 border border-zinc-700">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full h-2 bg-zinc-700 rounded-full cursor-pointer">
          <div 
            className="h-full bg-spicy-orange rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-text-muted mt-2">
          <span>{currentTime}</span>
          <span>{episode.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Left Controls */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-spicy-orange transition-colors">
            <SkipBack size={24} weight="fill" />
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-spicy-orange hover:bg-spicy-orange-dark rounded-full flex items-center justify-center text-white transition-colors"
          >
            {isPlaying ? (
              <Pause size={24} weight="fill" />
            ) : (
              <Play size={24} weight="fill" className="ml-1" />
            )}
          </button>
          
          <button className="text-white hover:text-spicy-orange transition-colors">
            <SkipForward size={24} weight="fill" />
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Volume */}
          <div className="hidden md:flex items-center gap-2">
            <SpeakerHigh size={20} className="text-white" />
            <div className="w-20 h-1 bg-zinc-700 rounded-full">
              <div 
                className="h-full bg-white rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>

          {/* Speed */}
          <select
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="bg-zinc-700 text-white px-2 py-1 rounded text-sm border-none focus:outline-none focus:ring-2 focus:ring-spicy-orange"
          >
            {speedOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          {/* Settings */}
          <button className="text-white hover:text-spicy-orange transition-colors">
            <Gear size={20} />
          </button>

          {/* Download */}
          <button className="text-white hover:text-spicy-orange transition-colors">
            <DownloadSimple size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}