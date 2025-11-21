# Getting Started with Open Chats Platform

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Phosphor Icons
- All dev dependencies

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### 3. View the Homepage

Open your browser and navigate to `http://localhost:3000`

You should see:
- ✅ Hero section with "OPENCHATS OVER EVERYTHING"
- ✅ Scrolling marquee bar
- ✅ Trending episodes grid
- ✅ Merch drop section (3 products)
- ✅ Stats bar
- ✅ Sticky audio player (bottom)

## Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx       # Root layout (fonts, header, footer)
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── layout/          # Header, Footer, MobileMenu
│   ├── features/        # Feature-specific components
│   │   ├── home/        # Homepage sections
│   │   └── audio/       # Audio player
│   └── ui/              # Reusable UI components
```

## Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Testing the Build

### 1. Test Mobile Menu
- Click the hamburger icon (top right)
- Full-screen menu should appear
- Click any link or X to close

### 2. Test Responsive Design
- Resize browser window
- Mobile: Single column layout
- Desktop: Multi-column grids

### 3. Test Hover Effects
- Hover over episode cards → Scale up + play button appears
- Hover over product cards → Scale up
- Hover over navigation links → Orange color

### 4. Test Animations
- Marquee bar scrolls continuously
- Hero section fades in
- Scroll indicator bounces

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'spicy-orange': {
    DEFAULT: '#FF4500',  // Change this
  },
}
```

### Change Fonts

Edit `src/app/layout.tsx`:

```typescript
import { Your_Font } from 'next/font/google';
```

### Add New Pages

Create files in `src/app/`:
- `src/app/episodes/page.tsx` → `/episodes`
- `src/app/shop/page.tsx` → `/shop`

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors

```bash
# Regenerate types
npm run build
```

### Styling Not Applied

```bash
# Restart dev server
# Press Ctrl+C, then npm run dev
```

## Next Steps

Once the foundation is running:

1. **Add Real Content**
   - Replace placeholder images
   - Add actual episode data
   - Add product images

2. **Build More Pages**
   - Episodes archive (`/episodes`)
   - Episode detail (`/episodes/[id]`)
   - Shop (`/shop`)
   - Product detail (`/shop/[id]`)

3. **Add Backend**
   - Set up MongoDB
   - Create API routes
   - Add authentication

4. **Deploy**
   - Push to GitHub
   - Deploy to Vercel
   - Configure environment variables

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Phosphor Icons](https://phosphoricons.com/)
- [Design System](./DESIGN_SYSTEM.md)
- [Technical Spec](./TECHNICAL_SPEC.md)

## Support

If you encounter issues:
1. Check the console for errors
2. Review the documentation files
3. Ensure all dependencies are installed
4. Try clearing cache and rebuilding

---

**Happy Coding! 🚀**
