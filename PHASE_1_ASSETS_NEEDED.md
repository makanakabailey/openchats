# Phase 1 - Assets & Content Needed

## 📸 Images Required

### 1. **Logo & Branding**
- [ ] **Logo (Primary)** - `public/logo.png` or `public/logo.svg`
  - Format: PNG or SVG (SVG preferred for scalability)
  - Size: 200x60px minimum
  - Background: Transparent
  - Usage: Header navigation
  - Note: Can be animated GIF for "glitch effect" if desired

- [ ] **Favicon** - `public/favicon.ico`
  - Format: ICO or PNG
  - Size: 32x32px or 16x16px
  - Usage: Browser tab icon

### 2. **Hero Section**
- [ ] **Hero Background Video** (Optional) - `public/hero-video.mp4`
  - Format: MP4 (H.264 codec)
  - Duration: 10-30 seconds (looping)
  - Size: Max 5MB (compressed)
  - Content: Mtho & Sino laughing/talking
  - Alternative: High-quality photo if video not available

- [ ] **Hero Background Image** (Fallback) - `public/hero-bg.jpg`
  - Format: JPG or WebP
  - Size: 1920x1080px minimum
  - Content: Mtho & Sino portrait
  - Usage: If video not available

### 3. **Episode Thumbnails** (3 episodes for homepage)
- [ ] **Episode 101 Thumbnail** - `public/episodes/101.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 16:9 (1280x720px recommended)
  - Content: Episode artwork with Mtho & Sino
  - Text overlay: Episode title (optional, can be added in design)

- [ ] **Episode 100 Thumbnail** - `public/episodes/100.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 16:9 (1280x720px)
  - Content: Episode artwork

- [ ] **Episode 99 Thumbnail** - `public/episodes/99.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 16:9 (1280x720px)
  - Content: Episode artwork

### 4. **Merch Product Images** (3 products for homepage)
- [ ] **T-Shirt Product Photo** - `public/merch/tee.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 3:4 (portrait - 900x1200px recommended)
  - Style: Ghost mannequin or flat lay
  - Background: White or transparent
  - Content: "OPENCHATS OVER EVERYTHING" tee

- [ ] **Hoodie Product Photo** - `public/merch/hoodie.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 3:4 (900x1200px)
  - Style: Ghost mannequin or flat lay
  - Content: "OPERATOR" hoodie

- [ ] **Cap Product Photo** - `public/merch/cap.jpg`
  - Format: JPG or WebP
  - Aspect Ratio: 3:4 (900x1200px)
  - Style: Product shot
  - Content: "DON'T CALL ME" cap

### 5. **Audio Player**
- [ ] **Episode Thumbnail (Small)** - Used in sticky player
  - Same as episode thumbnails above
  - Will be automatically resized

---

## 📝 Content/Text Required

### 1. **Episode Data** (3 episodes for homepage)

**Episode 101:**
- Title: "EP 101: THE STREETS ARE TALKING 🔥"
- Duration: "45:12"
- Views: "1.2M"
- Published: "2 days ago"
- Description: (Optional for Phase 1)

**Episode 100:**
- Title: "EP 100: MTHO VS SINO DEBATE 💀"
- Duration: "52:30"
- Views: "890K"
- Published: "1 week ago"
- Description: (Optional for Phase 1)

**Episode 99:**
- Title: "EP 99: DATING IN 2025 IS DEAD 💔"
- Duration: "38:22"
- Views: "750K"
- Published: "2 weeks ago"
- Description: (Optional for Phase 1)

### 2. **Product Data** (3 products for homepage)

**Product 1: T-Shirt**
- Name: "OPENCHATS OVER EVERYTHING TEE"
- Price: R350
- Badge: "SELLING FAST"
- Specs: ["HEAVYWEIGHT COTTON", "GSM: 240"]
- Description: "Wear the controversy. No refunds if your feelings get hurt."

**Product 2: Hoodie**
- Name: "OPEN CHATS OPERATOR HOODIE"
- Price: R650
- Badge: "NEW DROP"
- Specs: ["PUFF PRINT LOGO", "GSM: 400"]
- Description: "Studio warm. Essential for late-night spacing out."

**Product 3: Cap**
- Name: "DON'T CALL ME CAP"
- Price: R250
- Badge: "LOW STOCK"
- Specs: ["ADJUSTABLE SNAPBACK", "ONE SIZE"]
- Description: "Hide your eyes from the haters."

### 3. **Stats Bar Data**
- Subscribers: "500K+"
- Total Views: "100M+"
- Ranking: "#1 Podcast in SA"
- Awards: "2024 Award Winners"

### 4. **Contact Information**
- Email: hello@openchats.co.za (or your actual email)
- Social Media Links:
  - YouTube: https://youtube.com/@openchats
  - TikTok: https://tiktok.com/@openchats
  - Instagram: https://instagram.com/openchats
  - Twitter/X: https://twitter.com/openchats
  - Spotify: https://open.spotify.com/show/openchats

### 5. **About/Mission Statement**
Current text:
> "SA's most unfiltered podcast. No scripts, no PR, just raw conversations about dating, money, and the streets. You handle the truth, we'll bring the spice."

Confirm or provide updated version.

---

## 🎨 Design Assets (Optional but Recommended)

### 1. **Brand Colors** (Already implemented, confirm if correct)
- Primary Orange: #FF4500
- Purple Accent: #8B5CF6
- Confirm these match your brand

### 2. **Typography** (Already implemented)
- Headlines: Oswald (bold, uppercase)
- Body: DM Sans
- Confirm if this works or if you have specific fonts

### 3. **Logo Variations**
- [ ] Logo (Light version) - For dark backgrounds
- [ ] Logo (Dark version) - For light backgrounds (if needed)
- [ ] Logo (Icon only) - For mobile/small spaces

---

## 📁 File Organization

Once you have the assets, organize them like this:

```
public/
├── logo.svg                    # Main logo
├── favicon.ico                 # Browser icon
├── hero-video.mp4             # Hero background (optional)
├── hero-bg.jpg                # Hero fallback image
├── episodes/
│   ├── 101.jpg                # Episode thumbnails
│   ├── 100.jpg
│   └── 99.jpg
└── merch/
    ├── tee.jpg                # Product photos
    ├── hoodie.jpg
    └── cap.jpg
```

---

## 🎯 Image Specifications Summary

| Asset Type | Format | Size | Aspect Ratio |
|------------|--------|------|--------------|
| Logo | SVG/PNG | 200x60px | Flexible |
| Favicon | ICO/PNG | 32x32px | 1:1 |
| Hero Video | MP4 | Max 5MB | 16:9 |
| Hero Image | JPG/WebP | 1920x1080px | 16:9 |
| Episode Thumbnails | JPG/WebP | 1280x720px | 16:9 |
| Product Photos | JPG/WebP | 900x1200px | 3:4 |

---

## 🚀 Priority Levels

### **Critical (Must Have Before Phase 2)**
1. Logo (any format)
2. 3 Episode thumbnails
3. 3 Product photos
4. Social media links

### **High Priority (Recommended)**
5. Hero background image or video
6. Favicon
7. Confirmed episode/product data

### **Nice to Have**
8. Multiple logo variations
9. High-res assets
10. Video content

---

## 📋 Quick Checklist

Before moving to Phase 2, ensure you have:

- [ ] Logo file ready
- [ ] 3 episode thumbnail images
- [ ] 3 product photos
- [ ] Social media URLs
- [ ] Contact email
- [ ] Confirmed pricing (ZAR)
- [ ] Episode titles and metadata
- [ ] Product names and descriptions

---

## 💡 Tips for Creating Assets

### Episode Thumbnails:
- Use bold text overlays
- Include Mtho & Sino faces
- High contrast colors
- Readable at small sizes
- Add emoji for personality (🔥💀💔)

### Product Photos:
- Clean, professional shots
- Consistent lighting
- White or transparent background
- Show product details clearly
- Ghost mannequin style works best

### Logo:
- Keep it simple and bold
- Works in black and white
- Scalable (vector preferred)
- Readable at small sizes

---

## 🎬 Next Steps

1. **Gather all assets** from the checklist above
2. **Place files** in the `public/` folder with correct names
3. **Update component data** with real content
4. **Test the site** to ensure images load correctly
5. **Move to Phase 2** - Build Episodes and Shop pages

---

## ❓ Questions to Answer

Before Phase 2, please confirm:

1. Are the current colors (Orange #FF4500, Purple #8B5CF6) correct?
2. Do you have actual episode audio files or just metadata for now?
3. What payment methods do you want? (PayFast for SA, Stripe for international?)
4. Do you have a domain name ready?
5. Any specific features you want prioritized in Phase 2?

---

**Once you have these assets ready, we can integrate them and move to Phase 2!** 🚀
