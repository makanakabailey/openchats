# Quick Start Guide - Week 1 Implementation
## Open Chats Platform - South African Podcast

## Day 1: Project Setup

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest open-chats-platform --typescript --tailwind --app --src-dir
cd open-chats-platform
```

### 2. Install Core Dependencies
```bash
npm install mongodb mongoose
npm install next-auth
npm install @stripe/stripe-js stripe  # International payments
npm install pusher pusher-js
npm install @vercel/blob
npm install react-hook-form zod
npm install date-fns
npm install lucide-react  # Icons
npm install crypto  # For PayFast signature generation
```

### 3. Install Dev Dependencies
```bash
npm install -D @types/node
npm install -D prettier prettier-plugin-tailwindcss
npm install -D eslint-config-prettier
```

### 4. Project Structure
```
open-chats-platform/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/
│   │   │   ├── page.tsx
│   │   │   ├── episodes/
│   │   │   ├── shop/
│   │   │   ├── community/
│   │   │   ├── live/
│   │   │   ├── submit/
│   │   │   └── profile/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── episodes/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   └── community/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── features/
│   ├── lib/
│   │   ├── db/
│   │   ├── auth/
│   │   └── utils/
│   └── types/
├── public/
├── .env.local
└── package.json
```

---

## Day 2: Database & Authentication

### 1. Set Up MongoDB Atlas
1. Go to mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for development)
5. Get connection string

### 2. Create Database Connection
```typescript
// src/lib/db/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
```

### 3. Create User Model
```typescript
// src/lib/db/models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  passwordHash: String,
  avatar: String,
  bio: String,
  role: { 
    type: String, 
    enum: ['user', 'moderator', 'admin', 'host'],
    default: 'user'
  },
  badges: [String],
  stats: {
    postsCount: { type: Number, default: 0 },
    likesReceived: { type: Number, default: 0 },
    purchasesCount: { type: Number, default: 0 }
  },
  preferences: {
    emailNotifications: { type: Boolean, default: true },
    merchAlerts: { type: Boolean, default: true },
    replyNotifications: { type: Boolean, default: true },
    weeklyDigest: { type: Boolean, default: false },
    profileVisibility: { 
      type: String, 
      enum: ['public', 'members', 'private'],
      default: 'public'
    }
  }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
```

### 4. Set Up NextAuth
```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/lib/db/mongodb';
import User from '@/lib/db/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        
        if (!user) {
          throw new Error('No user found');
        }
        
        const isValid = await bcrypt.compare(
          credentials?.password || '', 
          user.passwordHash
        );
        
        if (!isValid) {
          throw new Error('Invalid password');
        }
        
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.username,
          role: user.role
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
```

### 5. Environment Variables
```bash
# .env.local
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/podcast-platform
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Pusher
PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
PUSHER_CLUSTER=

# Vercel Blob
BLOB_READ_WRITE_TOKEN=

# Email
EMAIL_API_KEY=
```

---

## Day 3: Tailwind Configuration

### 1. Update Tailwind Config
```javascript
// tailwind.config.ts
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
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        'prose': '65ch',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
```

### 2. Update Global Styles
```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-display: 'Inter', system-ui, sans-serif;
  }
  
  body {
    @apply bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50;
  }
}

@layer components {
  .btn-primary {
    @apply bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md;
  }
  
  .btn-secondary {
    @apply border-2 border-neutral-300 hover:border-neutral-400 text-neutral-700 dark:text-neutral-300 px-6 py-3 rounded-lg font-medium transition-colors duration-200;
  }
  
  .card {
    @apply bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200;
  }
}
```

---

## Day 4: Base Layout Components

### 1. Create Header Component
```typescript
// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <nav className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-bold">
          Open Chats 🇿🇦
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/episodes" className="font-medium hover:text-primary-600 transition-colors">
            Episodes
          </Link>
          <Link href="/shop" className="font-medium hover:text-primary-600 transition-colors">
            Shop
          </Link>
          <Link href="/community" className="font-medium hover:text-primary-600 transition-colors">
            Community
          </Link>
          {session ? (
            <>
              <Link href="/profile" className="font-medium hover:text-primary-600 transition-colors">
                Profile
              </Link>
              <button onClick={() => signOut()} className="font-medium hover:text-primary-600 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          )}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/episodes" className="font-medium">Episodes</Link>
            <Link href="/shop" className="font-medium">Shop</Link>
            <Link href="/community" className="font-medium">Community</Link>
            {session ? (
              <>
                <Link href="/profile" className="font-medium">Profile</Link>
                <button onClick={() => signOut()} className="font-medium text-left">Logout</button>
              </>
            ) : (
              <Link href="/login" className="btn-primary">Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
```

### 2. Create Footer Component
```typescript
// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/episodes" className="hover:text-primary-600">Episodes</Link></li>
              <li><Link href="/shop" className="hover:text-primary-600">Shop</Link></li>
              <li><Link href="/community" className="hover:text-primary-600">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary-600">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-primary-600">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: hello@podcast.com</p>
          </div>
        </div>
        
        <hr className="my-8 border-neutral-300 dark:border-neutral-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>&copy; 2025 Podcast Name. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-primary-600">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### 3. Update Root Layout
```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Chats - South Africa\'s #1 Conversation Podcast',
  description: 'Join the Open Chats community. Listen to episodes, shop exclusive merch, and connect with fellow listeners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
```

### 4. Create Providers
```typescript
// src/app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

---

## Day 5: Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/podcast-platform.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to vercel.com
2. Import GitHub repository
3. Add environment variables
4. Deploy

### 3. Set Up MongoDB Production
1. Update MongoDB whitelist for Vercel IPs
2. Update NEXTAUTH_URL to production URL
3. Test authentication flow

---

## Week 1 Checklist

- [ ] Next.js project initialized
- [ ] MongoDB connected
- [ ] Authentication working
- [ ] Tailwind configured with design system
- [ ] Header and Footer components
- [ ] Deployed to Vercel
- [ ] Environment variables configured
- [ ] Basic routing structure created

---

## Next Steps (Week 2)

1. Create database models for Episodes, Products, Posts
2. Build API routes for CRUD operations
3. Create reusable UI components (Button, Card, Input)
4. Start building homepage
5. Implement episode listing page

---

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint

# Format with Prettier
npx prettier --write .
```

---

## Troubleshooting

### MongoDB Connection Issues
- Check connection string format
- Verify IP whitelist
- Ensure database user has correct permissions

### NextAuth Issues
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches your domain
- Clear browser cookies and try again

### Vercel Deployment Issues
- Check build logs for errors
- Verify all environment variables are set
- Ensure MongoDB allows Vercel IPs

---

*Ready to start building! Follow this guide for a smooth Week 1 setup.*
