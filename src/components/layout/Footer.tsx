import Link from 'next/link';
import { YoutubeLogo, TiktokLogo, InstagramLogo, TwitterLogo, SpotifyLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  return (
    <footer className="bg-studio-dark border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-black uppercase text-white mb-4">
              OPEN CHATS
            </h3>
            <p className="text-sm text-text-muted">
              SA's most unfiltered podcast. Hosted by Mtho & Sino 🇿🇦
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4 uppercase text-sm">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/episodes" className="text-text-muted hover:text-spicy-orange transition-colors">
                  Episodes
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-text-muted hover:text-spicy-orange transition-colors">
                  Merch Shop
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-text-muted hover:text-spicy-orange transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4 uppercase text-sm">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-text-muted hover:text-spicy-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-spicy-orange transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/media-kit" className="text-text-muted hover:text-spicy-orange transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4 uppercase text-sm">
              Contact
            </h4>
            <p className="text-sm text-text-muted mb-4">
              Email: hello@openchats.co.za
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-spicy-orange transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo size={24} weight="fill" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-spicy-orange transition-colors"
                aria-label="TikTok"
              >
                <TiktokLogo size={24} weight="fill" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-spicy-orange transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-spicy-orange transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo size={24} weight="fill" />
              </a>
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-spicy-orange transition-colors"
                aria-label="Spotify"
              >
                <SpotifyLogo size={24} weight="fill" />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-zinc-800 mb-8" />
        
        {/* Legal - Separated */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>&copy; 2025 Open Chats. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-spicy-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-spicy-orange transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-spicy-orange transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
