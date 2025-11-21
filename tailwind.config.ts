import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base (60%) - Almost Black Studio Background
        'studio-black': '#000000',
        'studio-dark': '#09090b',
        
        // Secondary (30%) - Cards & Text
        'card-dark': '#18181b',
        'card-darker': '#27272a',
        'text-body': '#d4d4d8',
        'text-muted': '#a1a1aa',
        
        // Accent (10%) - "The Spicy Color"
        'spicy-orange': {
          DEFAULT: '#FF4500',
          light: '#FF6347',
          dark: '#CC3700',
        },
        'electric-purple': {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
      },
      
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 1) 100%)',
        'card-gradient': 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
      },
      
      fontFamily: {
        display: ['var(--font-display)', 'Oswald', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        'prose': '65ch',
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'marquee': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
