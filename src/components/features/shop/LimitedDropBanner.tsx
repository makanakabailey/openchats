'use client';

import { useState, useEffect } from 'react';
import { Fire } from '@phosphor-icons/react';

export default function LimitedDropBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-spicy-orange py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Fire size={24} weight="fill" className="text-white" />
            <span className="font-display text-lg md:text-xl font-bold uppercase text-white">
              LIMITED DROP - ENDS IN
            </span>
          </div>
          
          {/* Countdown */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <div className="text-center">
                <div className="font-display text-2xl font-black">{timeLeft.days}</div>
                <div className="text-xs uppercase">Days</div>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <div className="font-display text-2xl font-black">{timeLeft.hours}</div>
                <div className="text-xs uppercase">Hours</div>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <div className="font-display text-2xl font-black">{timeLeft.minutes}</div>
                <div className="text-xs uppercase">Min</div>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <div className="font-display text-2xl font-black">{timeLeft.seconds}</div>
                <div className="text-xs uppercase">Sec</div>
              </div>
            </div>
            
            <button className="bg-white text-spicy-orange px-6 py-2 rounded font-bold uppercase text-sm hover:bg-gray-100 transition-colors ml-4">
              VIEW COLLECTION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}