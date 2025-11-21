'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { List, X, MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo - Circular Frame */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-spicy-orange shadow-lg group-hover:border-white transition-colors">
              <Image 
                src="/logo-new.jpg" 
                alt="Open Chats" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden md:block font-display text-xl font-black uppercase text-white group-hover:text-spicy-orange transition-colors">
              OPEN CHATS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              href="/episodes" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-spicy-orange transition-colors whitespace-nowrap"
            >
              EPISODES
            </Link>
            <Link 
              href="/live" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-red-500 hover:text-red-400 transition-colors whitespace-nowrap animate-pulse"
            >
              LIVE
            </Link>
            <Link 
              href="/shop" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-spicy-orange transition-colors whitespace-nowrap"
            >
              MERCH
            </Link>
            <Link 
              href="/community" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-spicy-orange transition-colors whitespace-nowrap"
            >
              COMMUNITY
            </Link>
            <Link 
              href="/membership" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-spicy-orange hover:text-white transition-colors whitespace-nowrap"
            >
              JOIN
            </Link>
            <Link 
              href="/about" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-spicy-orange transition-colors whitespace-nowrap"
            >
              HOSTS
            </Link>
            <Link 
              href="/contact" 
              className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-spicy-orange transition-colors whitespace-nowrap"
            >
              CONTACT
            </Link>
          </div>

          {/* Search, Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button 
              className="text-white hover:text-spicy-orange transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlass size={24} weight="bold" />
            </button>
            
            <Link 
              href="/cart"
              className="relative text-white hover:text-spicy-orange transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} weight="bold" />
              <span className="absolute -top-2 -right-2 bg-spicy-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                2
              </span>
            </Link>
            
            <button 
              className="md:hidden p-2 -mr-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <List size={32} weight="bold" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
