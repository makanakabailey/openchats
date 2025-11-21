# Open Chats Design System - Dark Mode First

## Overview
**Brand:** Open Chats - SA's Most Unfiltered Podcast  
**Hosts:** Mtho & Sino  
**Vibe:** Raw, Unfiltered, High-Energy, Controversial, Gen-Z/Millennial  
**Aesthetic:** Dark Mode Studio Session - Bold, High-Contrast, Video-Centric  

This is NOT a corporate design. This is a media brand that feels like a late-night studio session with your most controversial friends.

---

## 1. COLOR PALETTE - Dark Mode & Neon (60-30-10 Rule)

### Color Strategy - "Studio Nightlife" Mood
- **Base (60%):** Almost black backgrounds - Studio/Nightlife aesthetic
- **Secondary (30%):** Dark cards and light gray text
- **Accent (10%):** Signal Orange or Electric Purple - "The Spicy Color"

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Base (60%) - Almost Black Studio Background
        'studio-black': '#000000',
        'studio-dark': '#09090b',  // zinc-950
        
        // Secondary (30%) - Cards & Text
        'card-dark': '#18181b',    // zinc-900
        'card-darker': '#27272a',  // zinc-800
        'text-body': '#d4d4d8',    // zinc-300
        'text-muted': '#a1a1aa',   // zinc-400
        
        // Accent (10%) - "The Spicy Color"
        'spicy-orange': {
          DEFAULT: '#FF4500',      // Signal Orange
          light: '#FF6347',
          dark: '#CC3700',
        },
        'electric-purple': {
          DEFAULT: '#8B5CF6',      // Purple-500
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        
        // Gradients
        'gradient-dark': 'radial-gradient(circle at top, #8B5CF6 0%, #000000 100%)',
      },
      
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 1) 100%)',
        'card-gradient': 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
      },
    },
  },
  darkMode: 'class', // Always dark mode
}
```

### Usage Examples
```jsx
// Background - Always dark
<body className="bg-studio-black text-text-body">

// Cards
<div className="bg-card-dark hover:bg-card-darker">

// Primary CTA - "The Spicy Button"
<button className="bg-spicy-orange hover:bg-spicy-orange-dark text-white">
  WATCH LATEST EPISODE
</button>

// Secondary CTA
<button className="border-2 border-white bg-studio-black text-white hover:bg-white hover:text-studio-black">
  WORK WITH US
</button>

// Hero with gradient
<section className="bg-hero-gradient">
```

### Dark Mode Support
```javascript
// Use Tailwind's dark mode
darkMode: 'class',

// Example usage
<div className="bg-neutral-50 dark:bg-neutral-900">
  <h1 className="text-neutral-900 dark:text-neutral-50">Title</h1>
</div>
```

### Accessibility
- All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Never use pure black (#000) or pure white (#FFF)
- Test with tools: WebAIM Contrast Checker

---

## 2. TYPOGRAPHY - Loud & Clear

### Font Families - "Newspaper Headlines Meet Street Culture"
```javascript
// tailwind.config.js
fontFamily: {
  display: ['Clash Display', 'Oswald', 'system-ui', 'sans-serif'], // Headlines - LOUD
  body: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],           // Body - Readable
}
```

### Type Scale - Aggressive Sizing
```javascript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
  'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
  '5xl': ['3rem', { lineHeight: '1' }],             // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],          // 60px - Hero
  '7xl': ['4.5rem', { lineHeight: '1' }],           // 72px - Hero
}
```

### Font Weights - Bold Everything
```javascript
fontWeight: {
  regular: '400',    // Body only
  medium: '500',     // Rarely used
  semibold: '600',   // Subheadings
  bold: '700',       // Headlines
  black: '900',      // Hero headlines - MAXIMUM IMPACT
}
```

### Letter Spacing - Tight & Modern
```javascript
letterSpacing: {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
}
```

### Usage Guidelines - "Headline Everything"
```jsx
// H1 - Hero Headlines (UPPERCASE, BOLD, TIGHT)
<h1 className="font-display text-6xl md:text-7xl font-black uppercase tracking-tighter text-white">
  OPENCHATS OVER EVERYTHING.
</h1>

// H2 - Section Headers (UPPERCASE)
<h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
  TRENDING EPISODES
</h2>

// H3 - Episode Titles (UPPERCASE)
<h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
  EP 101: THE STREETS ARE TALKING
</h3>

// Body Text - Readable
<p className="font-body text-base md:text-lg font-regular text-text-body leading-relaxed">
  SA's most unfiltered podcast. No scripts, no PR, just raw conversations 
  about dating, money, and the streets.
</p>

// Navigation - Bold
<nav className="font-body text-sm md:text-base font-semibold uppercase tracking-wide">
  <a href="/episodes">EPISODES</a>
</nav>

// Stats/Numbers - HUGE
<span className="font-display text-5xl font-black text-spicy-orange">
  500K+
</span>
```

### Typography Effects
```jsx
// Text Glow Effect (for emphasis)
<h1 className="text-white drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">
  SPICY TAKE
</h1>

// Text Stroke (YouTuber style)
<h2 className="text-white" style={{
  textShadow: '-2px -2px 0 #FF4500, 2px -2px 0 #FF4500, -2px 2px 0 #FF4500, 2px 2px 0 #FF4500'
}}>
  CONTROVERSIAL
</h2>
```

---

## 3. COMPOSITION - Video-First Layout

### Hero Section (Top 41% - Golden Spot)
```jsx
// MUST feature massive image/video of Mtho & Sino
<section className="relative h-screen bg-hero-gradient">
  {/* Background Video Loop */}
  <video 
    autoPlay 
    loop 
    muted 
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  >
    <source src="/hosts-laughing.mp4" type="video/mp4" />
  </video>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto h-full flex items-center">
    <div className="max-w-3xl">
      <h1 className="font-display text-7xl font-black uppercase tracking-tighter text-white mb-6">
        OPENCHATS OVER EVERYTHING.
      </h1>
      <p className="font-body text-xl text-text-body mb-8 leading-relaxed">
        SA's most unfiltered podcast. No scripts, no PR, just raw conversations 
        about dating, money, and the streets. You handle the truth, we'll bring the spice.
      </p>
      <button className="border-2 border-white bg-studio-black text-white px-8 py-4 text-lg font-bold uppercase hover:bg-white hover:text-studio-black transition-all">
        WORK WITH US
      </button>
    </div>
  </div>
</section>
```

### Bento Grid Layout - Mix Vertical & Horizontal
```jsx
// Mix TikTok-style vertical clips with YouTube horizontal episodes
<div className="grid grid-cols-12 gap-4">
  {/* Large horizontal episode */}
  <div className="col-span-8 aspect-video">
    <EpisodeCard />
  </div>
  
  {/* Vertical short clip */}
  <div className="col-span-4 aspect-[9/16]">
    <ShortClip />
  </div>
  
  {/* More variations */}
</div>
```

### Spacing - Tight & Energetic
```javascript
spacing: {
  '0': '0',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
}
```

### The "3 Spots" Rule
1. **Around Primary CTA:** Minimum 32px (space-8) padding
2. **Between Major Sections:** 80-96px (py-20 or py-24) vertical spacing
3. **Text Block Margins:** Max-width 65ch for readability

### Usage Examples
```jsx
// Micro spacing - Related items
<div className="flex gap-4">
  <Button>Primary</Button>
  <Button>Secondary</Button>
</div>

// Macro spacing - Sections
<section className="py-20 px-4">
  <h2>Section Title</h2>
</section>

// Text readability
<article className="max-w-prose mx-auto">
  <p>Long form content...</p>
</article>

// Card spacing
<div className="p-6 space-y-4">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

---

## 4. Layout & Composition

### The 3x3 Grid (Golden Spots)
Visual weight distribution for user attention:
- **Top-Left (41%):** Logo, value proposition, primary hook
- **Center/Top-Right (20%):** Navigation, login, search
- **Bottom-Left (25%):** Social proof, secondary links
- **Bottom-Right (14%):** Chat widgets, scroll to top

### Container Widths
```javascript
maxWidth: {
  'xs': '20rem',    // 320px
  'sm': '24rem',    // 384px
  'md': '28rem',    // 448px
  'lg': '32rem',    // 512px
  'xl': '36rem',    // 576px
  '2xl': '42rem',   // 672px
  '3xl': '48rem',   // 768px
  '4xl': '56rem',   // 896px
  '5xl': '64rem',   // 1024px
  '6xl': '72rem',   // 1152px
  '7xl': '80rem',   // 1280px - Main content
  'prose': '65ch',  // Readable text width
}
```

### Grid Layouts
```jsx
// Product grid - Responsive
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map(product => <ProductCard key={product.id} {...product} />)}
</div>

// Two-column layout
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <aside className="lg:col-span-1">Sidebar</aside>
  <main className="lg:col-span-2">Content</main>
</div>

// Hero section
<section className="container mx-auto max-w-7xl px-4 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>Text content</div>
    <div>Image</div>
  </div>
</section>
```

---

## 5. UX Laws Implementation

### Fitt's Law - Target Size
```jsx
// Primary buttons - Large and isolated
<button className="min-h-[44px] px-8 py-3 text-lg font-semibold rounded-lg
                   bg-accent-500 text-white hover:bg-accent-600
                   transition-colors duration-200">
  Add to Cart
</button>

// Minimum touch target: 44x44px
<button className="w-11 h-11 flex items-center justify-center">
  <Icon />
</button>
```

### Jakob's Law - Familiar Patterns
```jsx
// Standard navigation
<header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b">
  <nav className="container mx-auto flex items-center justify-between h-16 px-4">
    <Logo className="w-32" /> {/* Top-left */}
    <Menu /> {/* Top-right */}
  </nav>
</header>

// Mobile hamburger - Top-right
<button className="lg:hidden" aria-label="Menu">
  <HamburgerIcon />
</button>
```

### Miller's Law - Chunking
```jsx
// Max 5-7 menu items
<nav>
  <a href="/">Home</a>
  <a href="/episodes">Episodes</a>
  <a href="/shop">Shop</a>
  <a href="/community">Community</a>
  <a href="/profile">Profile</a>
</nav>

// Max 3-5 cards per row
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Max 3 cards */}
</div>

// Load more for long lists
{items.length > 7 && <button>Load More</button>}
```

### Hick's Law - Limited Choices
```jsx
// One primary, one secondary CTA
<div className="flex gap-4">
  <button className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold">
    Buy Now
  </button>
  <button className="border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg">
    Learn More
  </button>
</div>

// Never 3 equal-weight buttons
// ❌ Bad: <Button>Option 1</Button> <Button>Option 2</Button> <Button>Option 3</Button>
// ✅ Good: One primary, one secondary max
```

### Law of Proximity - Grouping
```jsx
// Group related elements
<div className="border rounded-lg p-4 shadow-sm">
  <img src={product.image} alt={product.name} />
  <h3 className="mt-4 font-semibold">{product.name}</h3>
  <p className="text-sm text-neutral-600">{product.description}</p>
  <p className="mt-2 text-lg font-bold">${product.price}</p>
</div>
```

---

## 6. Components

### Button Variants
```jsx
// Primary CTA
<button className="bg-accent-500 hover:bg-accent-600 text-white 
                   px-6 py-3 rounded-lg font-semibold
                   transition-colors duration-200
                   shadow-sm hover:shadow-md">
  Primary Action
</button>

// Secondary
<button className="border-2 border-neutral-300 hover:border-neutral-400
                   text-neutral-700 dark:text-neutral-300
                   px-6 py-3 rounded-lg font-medium
                   transition-colors duration-200">
  Secondary Action
</button>

// Ghost
<button className="text-primary-600 hover:text-primary-700
                   px-4 py-2 font-medium
                   transition-colors duration-200">
  Ghost Action
</button>

// Disabled
<button disabled className="bg-neutral-200 text-neutral-400 
                           px-6 py-3 rounded-lg font-semibold
                           cursor-not-allowed">
  Disabled
</button>
```

### Card Component
```jsx
<div className="bg-white dark:bg-neutral-800 
                rounded-lg shadow-sm hover:shadow-md
                transition-shadow duration-200
                overflow-hidden">
  <img src={image} alt={title} className="w-full h-48 object-cover" />
  <div className="p-6 space-y-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    <button className="w-full bg-accent-500 text-white py-2 rounded-lg">
      Action
    </button>
  </div>
</div>
```

### Input Fields
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
    Email Address
  </label>
  <input 
    type="email"
    className="w-full px-4 py-2 
               border border-neutral-300 dark:border-neutral-600
               rounded-lg
               focus:ring-2 focus:ring-primary-500 focus:border-transparent
               bg-white dark:bg-neutral-800
               text-neutral-900 dark:text-neutral-100
               placeholder:text-neutral-400"
    placeholder="you@example.com"
  />
</div>
```

### Badge Component
```jsx
// Status badges
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
  New
</span>

<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                 bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200">
  Limited
</span>
```

---

## 7. Navigation Structure

### Header
```jsx
<header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b">
  <nav className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
    <Logo />
    <div className="hidden lg:flex items-center gap-8">
      <NavLink href="/episodes">Episodes</NavLink>
      <NavLink href="/shop">Shop</NavLink>
      <NavLink href="/community">Community</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </div>
    <MobileMenu className="lg:hidden" />
  </nav>
</header>
```

### Footer
```jsx
<footer className="bg-neutral-100 dark:bg-neutral-900 border-t">
  <div className="container mx-auto max-w-7xl px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          <li><a href="/episodes">Episodes</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/community">Community</a></li>
        </ul>
      </div>
      
      {/* About */}
      <div>
        <h4 className="font-semibold mb-4">About</h4>
        <ul className="space-y-2">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Resources */}
      <div>
        <h4 className="font-semibold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
      
      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p>Email: hello@podcast.com</p>
      </div>
    </div>
    
    <hr className="my-8 border-neutral-300 dark:border-neutral-700" />
    
    {/* Legal - Separated */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
      <p>&copy; 2025 Podcast Name. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 8. Animation & Micro-interactions

### Transition Utilities
```jsx
// Hover transitions
<button className="transition-colors duration-200 hover:bg-primary-600">
  Hover Me
</button>

// Transform on hover
<div className="transition-transform duration-300 hover:scale-105">
  Card
</div>

// Fade in
<div className="animate-fade-in">
  Content
</div>
```

### Custom Animations (Tailwind Config)
```javascript
// tailwind.config.js
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-in': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
},
animation: {
  'fade-in': 'fade-in 0.5s ease-out',
  'slide-in': 'slide-in 0.3s ease-out',
}
```

---

## 9. Responsive Breakpoints

```javascript
// Tailwind breakpoints
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Mobile-First Approach
```jsx
// Stack on mobile, grid on desktop
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="lg:w-1/4">Sidebar</aside>
  <main className="lg:w-3/4">Content</main>
</div>

// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">Mobile only</div>
```

---

## 10. Accessibility Checklist

- [ ] All interactive elements have min 44x44px touch target
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus states visible on all interactive elements
- [ ] Semantic HTML (header, nav, main, footer, article)
- [ ] Alt text on all images
- [ ] ARIA labels on icon-only buttons
- [ ] Keyboard navigation support
- [ ] Skip to main content link
- [ ] Form labels associated with inputs
- [ ] Error messages clearly visible

---

## 4. UX & NAVIGATION - "The Hype Experience"

### Primary Navigation
```jsx
<nav className="fixed top-0 w-full bg-studio-black/80 backdrop-blur-md z-50 border-b border-zinc-800">
  <div className="container mx-auto flex items-center justify-between h-16 px-4">
    {/* Logo with glitch effect */}
    <a href="/" className="font-display text-2xl font-black uppercase">
      <img src="/logo-glitch.gif" alt="Open Chats" className="h-10" />
    </a>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8">
      <a href="/episodes" className="font-body text-sm font-semibold uppercase tracking-wide hover:text-spicy-orange transition">
        EPISODES
      </a>
      <a href="/merch" className="font-body text-sm font-semibold uppercase tracking-wide hover:text-spicy-orange transition">
        MERCH
      </a>
      <a href="/hosts" className="font-body text-sm font-semibold uppercase tracking-wide hover:text-spicy-orange transition">
        HOSTS
      </a>
      <a href="/contact" className="font-body text-sm font-semibold uppercase tracking-wide hover:text-spicy-orange transition">
        CONTACT
      </a>
    </div>
    
    {/* Search Icon */}
    <button className="text-white hover:text-spicy-orange">
      <SearchIcon />
    </button>
  </div>
</nav>
```

### The "Hype" Button - Primary CTA
```jsx
// NEVER say "Learn More" - Always action-oriented
<button className="bg-spicy-orange hover:bg-spicy-orange-dark text-white px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]">
  WATCH LATEST EPISODE
</button>

// Secondary CTA
<button className="border-2 border-white bg-studio-black text-white px-8 py-4 text-lg font-bold uppercase hover:bg-white hover:text-studio-black transition-all">
  WORK WITH US
</button>

// Tertiary CTA
<button className="text-white hover:text-spicy-orange font-semibold uppercase underline">
  JOIN THE OPERATORS
</button>
```

### Sticky Audio Player - Glassmorphism
```jsx
<div className="fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 p-4 z-50">
  <div className="container mx-auto flex items-center gap-4">
    {/* Thumbnail */}
    <img src="/episode-thumb.jpg" className="w-16 h-16 rounded" />
    
    {/* Info */}
    <div className="flex-1">
      <h4 className="font-display text-sm font-bold uppercase text-white">
        EP 101: THE STREETS ARE TALKING
      </h4>
      <p className="text-xs text-text-muted">Mtho & Sino</p>
    </div>
    
    {/* Controls */}
    <button className="text-white hover:text-spicy-orange">
      <PlayIcon />
    </button>
    
    {/* Progress */}
    <div className="flex-1 max-w-md">
      <div className="h-1 bg-zinc-700 rounded-full">
        <div className="h-1 bg-spicy-orange rounded-full w-1/3"></div>
      </div>
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>15:23</span>
        <span>45:12</span>
      </div>
    </div>
    
    {/* Volume & Close */}
    <button className="text-white hover:text-spicy-orange">
      <VolumeIcon />
    </button>
    <button className="text-white hover:text-spicy-orange">
      <CloseIcon />
    </button>
  </div>
</div>
```

## 5. SOCIAL PROOF - "Trust Through Hype"

### Stats Bar
```jsx
<div className="bg-card-dark py-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="font-display text-5xl font-black text-spicy-orange mb-2">
          500K+
        </div>
        <div className="font-body text-sm uppercase text-text-muted">
          Subscribers
        </div>
      </div>
      <div>
        <div className="font-display text-5xl font-black text-spicy-orange mb-2">
          100M+
        </div>
        <div className="font-body text-sm uppercase text-text-muted">
          Total Views
        </div>
      </div>
      <div>
        <div className="font-display text-5xl font-black text-spicy-orange mb-2">
          #1
        </div>
        <div className="font-body text-sm uppercase text-text-muted">
          Podcast in SA
        </div>
      </div>
      <div>
        <div className="font-display text-5xl font-black text-spicy-orange mb-2">
          2024
        </div>
        <div className="font-body text-sm uppercase text-text-muted">
          Award Winners
        </div>
      </div>
    </div>
  </div>
</div>
```

### Marquee - Infinite Scroll
```jsx
<div className="bg-spicy-orange py-4 overflow-hidden">
  <div className="animate-marquee whitespace-nowrap">
    <span className="font-display text-2xl font-bold uppercase text-white mx-8">
      UNFILTERED
    </span>
    <span className="text-white mx-4">•</span>
    <span className="font-display text-2xl font-bold uppercase text-white mx-8">
      RAW
    </span>
    <span className="text-white mx-4">•</span>
    <span className="font-display text-2xl font-bold uppercase text-white mx-8">
      CONTROVERSIAL
    </span>
    <span className="text-white mx-4">•</span>
    <span className="font-display text-2xl font-bold uppercase text-white mx-8">
      TRENDING
    </span>
    <span className="text-white mx-4">•</span>
    {/* Repeat for infinite effect */}
  </div>
</div>

{/* CSS for marquee animation */}
<style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`}</style>
```

## 6. COMPONENTS - "YouTuber Aesthetic"

### Episode Card with Play Overlay
```jsx
<div className="group relative aspect-video bg-card-dark rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
  {/* Thumbnail */}
  <img 
    src="/episode-thumb.jpg" 
    alt="Episode" 
    className="w-full h-full object-cover"
  />
  
  {/* Play Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="w-20 h-20 rounded-full bg-spicy-orange flex items-center justify-center">
      <PlayIcon className="w-10 h-10 text-white ml-1" />
    </div>
  </div>
  
  {/* Duration Badge */}
  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">
    45:12
  </div>
  
  {/* Hot Badge */}
  <div className="absolute top-2 left-2 bg-spicy-orange px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
    <FireIcon className="w-4 h-4" />
    HOT
  </div>
</div>

{/* Episode Info */}
<div className="mt-4">
  <h3 className="font-display text-xl font-bold uppercase text-white mb-2 line-clamp-2">
    EP 101: THE STREETS ARE TALKING 🔥
  </h3>
  <div className="flex items-center gap-4 text-sm text-text-muted">
    <span>1.2M views</span>
    <span>•</span>
    <span>2 days ago</span>
  </div>
</div>
```

### Merch Card
```jsx
<div className="bg-card-dark rounded-lg overflow-hidden hover:bg-card-darker transition group">
  {/* Product Image */}
  <div className="aspect-square relative overflow-hidden">
    <img 
      src="/merch-hoodie.jpg" 
      alt="Hoodie" 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
    />
    {/* Limited Badge */}
    <div className="absolute top-2 right-2 bg-spicy-orange px-3 py-1 rounded-full text-xs font-bold text-white">
      LIMITED
    </div>
  </div>
  
  {/* Product Info */}
  <div className="p-4">
    <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
      OPEN CHATS HOODIE
    </h3>
    <div className="flex items-center justify-between">
      <span className="font-display text-2xl font-black text-spicy-orange">
        R650
      </span>
      <button className="bg-spicy-orange hover:bg-spicy-orange-dark text-white px-6 py-2 rounded font-bold uppercase text-sm transition">
        BUY
      </button>
    </div>
  </div>
</div>
```

### Short Clip Card (Vertical)
```jsx
<div className="relative aspect-[9/16] bg-card-dark rounded-lg overflow-hidden cursor-pointer group">
  {/* Video Thumbnail */}
  <img 
    src="/short-clip.jpg" 
    alt="Short" 
    className="w-full h-full object-cover"
  />
  
  {/* Play Overlay */}
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition">
      <PlayIcon className="w-8 h-8 text-white ml-1" />
    </div>
  </div>
  
  {/* Views */}
  <div className="absolute bottom-4 left-4 right-4">
    <div className="text-white font-bold text-sm drop-shadow-lg">
      50K views
    </div>
  </div>
</div>
```

## 7. EFFECTS & ANIMATIONS

### Glow Effect
```jsx
// Text glow
<h1 className="text-white drop-shadow-[0_0_30px_rgba(255,69,0,0.5)]">
  SPICY TAKE
</h1>

// Button glow on hover
<button className="hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]">
  WATCH NOW
</button>
```

### Glitch Effect (Logo)
```jsx
// Use Jitter to create glitch animation, export as GIF
<img src="/logo-glitch.gif" alt="Open Chats" className="h-10" />
```

### Hover Scale
```jsx
<div className="hover:scale-105 transition-transform duration-300">
  Card content
</div>
```

### Gradient Backgrounds
```jsx
// Hero gradient
<div className="bg-gradient-to-b from-electric-purple/30 to-studio-black">
  Hero content
</div>

// Card gradient
<div className="bg-gradient-to-br from-card-dark to-studio-black">
  Card content
</div>
```

## 8. FREE TOOLS INTEGRATION

### Photopea - Thumbnail Creation
1. Open Photopea.com
2. Import photo of Mtho/Sino
3. Use Lasso Select to cut them out
4. Add Stroke (3px white or orange)
5. Add Drop Shadow (10px, 50% opacity)
6. Add text overlay (UPPERCASE, Bold)
7. Export as WebP

### Phosphor Icons
```jsx
import { Microphone, YoutubeLogo, TiktokLogo, Fire, Play } from 'phosphor-react';

<Fire size={24} weight="fill" className="text-spicy-orange" />
```

### CapCut - Short Clips
1. Upload 30-second "spicy moment"
2. Add auto-captions (free feature)
3. Add zoom effects on key moments
4. Export vertical (9:16) for shorts
5. Upload to platform

## 9. MOBILE-FIRST NAVIGATION (Fitt's Law)

### Touch Target Sizes
```javascript
// Minimum sizes for mobile
touchTargets: {
  minimum: '48px',      // Apple/Google standard
  comfortable: '56px',  // Recommended
  ideal: '64px',        // Open Chats standard
}
```

### Mobile Header
```jsx
<header className="fixed top-0 left-0 right-0 z-40 bg-studio-black/80 backdrop-blur-md border-b border-zinc-800">
  <div className="flex items-center justify-between h-16 px-4">
    <a href="/" className="font-display text-xl font-black uppercase">
      OPEN CHATS
    </a>
    <button className="p-4 -mr-4">
      <List size={32} weight="bold" />
    </button>
  </div>
</header>
```

### Full-Screen Menu Overlay
```jsx
<div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl">
  {/* Close Button */}
  <button className="absolute top-4 right-4 p-4">
    <X size={32} weight="bold" />
  </button>
  
  {/* Centered Links - MASSIVE */}
  <nav className="flex flex-col items-center justify-center h-full gap-8">
    <button className="font-display text-4xl font-black uppercase text-white hover:text-spicy-orange">
      EPISODES
    </button>
    <button className="font-display text-4xl font-black uppercase text-white hover:text-spicy-orange">
      MERCH
    </button>
    <button className="font-display text-4xl font-black uppercase text-white hover:text-spicy-orange">
      HOSTS
    </button>
    <button className="font-display text-4xl font-black uppercase text-white hover:text-spicy-orange">
      CONTACT
    </button>
  </nav>
</div>
```

### Sticky Audio Player (Bottom - Thumb Zone)
```jsx
<div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-zinc-800">
  {/* Progress Bar - 2px Orange Line */}
  <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-800">
    <div className="h-full bg-spicy-orange" style={{ width: `${progress}%` }} />
  </div>
  
  {/* Player Grid: 20% | 60% | 20% */}
  <div className="grid grid-cols-[20%_60%_20%] items-center gap-3 p-3">
    {/* Thumbnail */}
    <img src="/thumb.jpg" className="w-full aspect-square rounded-md" />
    
    {/* Track Info with Marquee */}
    <div className="overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-display text-sm font-bold uppercase text-white">
          EP 54: MTHO ADDRESSES THE RUMORS...
        </span>
      </div>
      <p className="text-xs text-gray-400">Mtho & Sino</p>
    </div>
    
    {/* MASSIVE Play Button - 48x48px */}
    <button className="flex items-center justify-center">
      <PlayCircle size={48} weight="fill" className="text-white" />
    </button>
  </div>
</div>
```

### Marquee Animation (CSS)
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

.animate-marquee::after {
  content: attr(data-text);
  padding-left: 2rem;
}
```

### Tap Feedback Micro-Interaction
```jsx
const handleLinkClick = (href) => {
  // Flash orange for 150ms
  link.classList.add('text-spicy-orange');
  
  setTimeout(() => {
    setIsOpen(false);
    router.push(href);
  }, 150);
};
```

### Phosphor Icons (Required)
```jsx
import { 
  List,           // Menu (32px, bold)
  X,              // Close (32px, bold)
  PlayCircle,     // Play (48px, fill)
  PauseCircle,    // Pause (48px, fill)
} from 'phosphor-react';
```

### Mobile Layout Structure
```jsx
<div className="min-h-screen bg-studio-black pb-20">
  {/* Header - z-40 */}
  <Header />
  
  {/* Content - pt-16 (header height) */}
  <main className="pt-16">
    {children}
  </main>
  
  {/* Audio Player - z-50, bottom */}
  <StickyAudioPlayer />
  
  {/* Menu Overlay - z-50 */}
  <MobileMenu />
</div>
```

### Thumb Zone Optimization
```
Screen Zones (Mobile):
┌─────────────────┐
│  Hard to Reach  │ ← Header (secondary)
├─────────────────┤
│   Easy Reach    │ ← Content (scrollable)
├─────────────────┤
│  Thumb Zone     │ ← Audio Player (primary)
└─────────────────┘
```

## 11. Design Tokens Export

```javascript
// design-tokens.js - Open Chats Dark Mode System
export const tokens = {
  colors: {
    // Base
    studioBlack: '#000000',
    studioDark: '#09090b',
    cardDark: '#18181b',
    cardDarker: '#27272a',
    
    // Text
    textBody: '#d4d4d8',
    textMuted: '#a1a1aa',
    
    // Accent
    spicyOrange: '#FF4500',
    spicyOrangeLight: '#FF6347',
    spicyOrangeDark: '#CC3700',
    electricPurple: '#8B5CF6',
    
    // Gradients
    heroGradient: 'radial-gradient(circle at top, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 1) 100%)',
  },
  
  typography: {
    fontFamily: {
      display: 'Clash Display, Oswald, system-ui',
      body: 'DM Sans, Inter, system-ui',
    },
    fontSize: {
      hero: '4.5rem',      // 72px
      h1: '3.75rem',       // 60px
      h2: '2.25rem',       // 36px
      h3: '1.5rem',        // 24px
      body: '1rem',        // 16px
      bodyLarge: '1.25rem', // 20px
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
    },
  },
  
  spacing: {
    micro: '1rem',
    medium: '2rem',
    macro: '5rem',
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
  
  effects: {
    glow: '0 0 30px rgba(255, 69, 0, 0.5)',
    glowPurple: '0 0 30px rgba(139, 92, 246, 0.5)',
    glassmorphism: 'backdrop-blur(12px)',
  },
};
```

---

## 12. Free Tools Integration

### Photopea (Image Editing)
- Crop and optimize product images
- Remove backgrounds
- Add noise/grain to gradients
- Export as WebP for web

### Penpot (UI Design)
- Design layouts and prototypes
- Export SVG icons
- Generate CSS code
- Collaborate with team

### Animista (CSS Animations)
- Copy animation CSS
- Apply to components
- Test different effects
- Customize timing

---

*This design system is a living document and should be updated as the project evolves.*
