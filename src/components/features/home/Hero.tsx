'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/hero/hero1.jpg',
    '/hero/hero2.jpg', 
    '/hero/hero3.webp',
    '/hero/hero4.jpg'
  ];

  // Rotate images every 4 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen bg-hero-gradient pt-16">
      {/* Background Images - Rotating (Only load current and next) */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => {
          // Only render current image and next image for smooth transition
          const shouldRender = index === currentImageIndex || index === (currentImageIndex + 1) % heroImages.length;
          
          if (!shouldRender) return null;
          
          return (
            <Image
              key={image}
              src={image}
              alt="Mtho & Sino"
              fill
              className={`object-cover transition-opacity duration-300 ${
                index === currentImageIndex ? 'opacity-40' : 'opacity-0'
              }`}
              priority={index === 0}
              quality={60}
              sizes="100vw"
            />
          );
        })}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/30 to-studio-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-7xl lg:text-hero font-black uppercase tracking-tighter text-white mb-6 animate-fade-in">
            OPENCHATS OVER EVERYTHING.
          </h1>
          <p className="font-body text-lg md:text-xl text-text-body mb-8 leading-relaxed max-w-2xl">
            SA's most unfiltered podcast. No scripts, no PR, just raw conversations 
            about dating, money, and the streets. You handle the truth, we'll bring the spice.
          </p>
          <button className="btn-secondary">
            WORK WITH US
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
