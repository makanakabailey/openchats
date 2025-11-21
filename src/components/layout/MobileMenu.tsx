'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X } from '@phosphor-icons/react';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    // Small delay for visual feedback
    setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl animate-fade-in">
      {/* Logo at Top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-brand-golden shadow-2xl">
          <Image 
            src="/logo-new.jpg" 
            alt="Open Chats" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Close Button */}
      <button 
        className="absolute top-4 right-4 p-4 text-white hover:text-spicy-orange transition-colors"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={32} weight="bold" />
      </button>
      
      {/* Centered Navigation Links - MASSIVE */}
      <nav className="flex flex-col items-center justify-center h-full gap-6 md:gap-8">
        <Link 
          href="/episodes" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          EPISODES
        </Link>
        <Link 
          href="/live" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-red hover:text-brand-golden transition-colors animate-pulse"
        >
          LIVE
        </Link>
        <Link 
          href="/shop" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          MERCH
        </Link>
        <Link 
          href="/community" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          COMMUNITY
        </Link>
        <Link 
          href="/membership" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          JOIN
        </Link>
        <Link 
          href="/about" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          HOSTS
        </Link>
        <Link 
          href="/contact" 
          onClick={handleLinkClick}
          className="font-display text-3xl md:text-5xl font-black uppercase text-brand-golden hover:text-brand-red transition-colors"
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
