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
        // Base (60%) - Navy Background
        'studio-black': '#20344b',
        'studio-dark': '#1a2938',
        
        // Secondary (30%) - Cards & Text
        'card-dark': '#2a3f54',
        'card-darker': '#1f3142',
        'text-body': '#d4d4d8',
        'text-muted': '#a1a1aa',
        
        // Accent (10%) - Golden & Red
        'brand-golden': {
          DEFAULT: '#dfbf6d',
          light: '#e8d08f',
          dark: '#c9a84d',
        },
        'brand-red': {
          DEFAULT: '#d9472c',
          light: '#e36550',
          dark: '#b83820',
        },
        // Legacy support - map to new colors
        'spicy-orange': {
          DEFAULT: '#dfbf6d',
          light: '#e8d08f',
          dark: '#c9a84d',
        },
        'electric-purple': {
          DEFAULT: '#d9472c',
          light: '#e36550',
          dark: '#b83820',
        },
      },
      
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(223, 191, 109, 0.2) 0%, rgba(32, 52, 75, 1) 100%)',
        'card-gradient': 'linear-gradient(135deg, #2a3f54 0%, #1a2938 100%)',
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
