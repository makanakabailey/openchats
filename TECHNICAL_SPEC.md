# Technical Specification Document

## Database Schema Design

### Users Collection
```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  username: String (unique, required),
  passwordHash: String,
  avatar: String (URL),
  bio: String,
  role: String (enum: ['user', 'moderator', 'admin', 'host']),
  badges: [String],
  stats: {
    postsCount: Number,
    likesReceived: Number,
    purchasesCount: Number
  },
  preferences: {
    emailNotifications: Boolean,
    merchAlerts: Boolean,
    replyNotifications: Boolean,
    weeklyDigest: Boolean,
    profileVisibility: String (enum: ['public', 'members', 'private'])
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Episodes Collection
```javascript
{
  _id: ObjectId,
  title: String (required),
  slug: String (unique, required),
  description: String,
  audioUrl: String (required),
  duration: Number (seconds),
  artwork: String (URL),
  season: Number,
  episodeNumber: Number,
  publishedAt: Date,
  topics: [String],
  showNotes: String (markdown),
  transcript: String,
  timestamps: [{
    time: Number,
    label: String
  }],
  resources: [{
    title: String,
    url: String
  }],
  sponsors: [{
    name: String,
    url: String
  }],
  stats: {
    plays: Number,
    favorites: Number,
    discussionCount: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  slug: String (unique, required),
  description: String,
  pricing: {
    zar: Number (required), // South African Rand
    usd: Number,            // US Dollar
    eur: Number,            // Euro
    gbp: Number             // British Pound
  },
  category: String (enum: ['apparel', 'home', 'digital', 'accessories']),
  images: [String] (URLs),
  variants: [{
    name: String (e.g., 'Size'),
    options: [String] (e.g., ['S', 'M', 'L', 'XL'])
  }],
  inventory: {
    trackInventory: Boolean,
    quantity: Number
  },
  rating: {
    average: Number,
    count: Number
  },
  featured: Boolean,
  limitedDrop: {
    isLimited: Boolean,
    endsAt: Date
  },
  printOnDemand: Boolean,
  shippingInfo: {
    southAfrica: String,
    international: String
  },
  status: String (enum: ['active', 'draft', 'archived']),
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  orderNumber: String (unique, required),
  userId: ObjectId (ref: Users),
  items: [{
    productId: ObjectId (ref: Products),
    name: String,
    price: Number,
    currency: String, // ZAR, USD, EUR, GBP
    quantity: Number,
    variant: Object,
    image: String
  }],
  currency: String (required), // Order currency
  subtotal: Number,
  shipping: Number,
  tax: Number, // VAT for South African orders
  discount: Number,
  total: Number,
  discountCode: String,
  customer: {
    email: String,
    firstName: String,
    lastName: String,
    phone: String
  },
  shippingAddress: {
    address: String,
    suburb: String,
    city: String,
    province: String, // For South Africa
    postalCode: String,
    country: String
  },
  shippingMethod: String,
  paymentGateway: String (enum: ['payfast', 'stripe']),
  paymentStatus: String (enum: ['pending', 'paid', 'failed', 'refunded']),
  fulfillmentStatus: String (enum: ['pending', 'processing', 'shipped', 'delivered']),
  payfastPaymentId: String,
  stripePaymentId: String,
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Posts Collection (Community)
```javascript
{
  _id: ObjectId,
  title: String (required),
  content: String (required),
  authorId: ObjectId (ref: Users, required),
  category: String (enum: ['episode-talk', 'fan-art', 'ideas', 'submit-topics', 'general']),
  episodeId: ObjectId (ref: Episodes, optional),
  isPinned: Boolean,
  isLocked: Boolean,
  stats: {
    views: Number,
    replyCount: Number,
    reactions: {
      like: Number,
      love: Number,
      laugh: Number,
      fire: Number
    }
  },
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Replies Collection
```javascript
{
  _id: ObjectId,
  postId: ObjectId (ref: Posts, required),
  parentReplyId: ObjectId (ref: Replies, optional),
  authorId: ObjectId (ref: Users, required),
  content: String (required),
  attachments: [{
    type: String (enum: ['image', 'file']),
    url: String
  }],
  reactions: {
    like: Number,
    love: Number,
    laugh: Number
  },
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### LiveEvents Collection
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  scheduledAt: Date (required),
  duration: Number (minutes),
  status: String (enum: ['scheduled', 'live', 'ended']),
  recordingUrl: String,
  thumbnail: String,
  viewerCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### ChatMessages Collection
```javascript
{
  _id: ObjectId,
  liveEventId: ObjectId (ref: LiveEvents, required),
  userId: ObjectId (ref: Users, required),
  message: String (required),
  isPinned: Boolean,
  isDeleted: Boolean,
  createdAt: Date
}
```

### Submissions Collection
```javascript
{
  _id: ObjectId,
  type: String (enum: ['episode', 'merch', 'question']),
  submitterId: ObjectId (ref: Users, optional),
  submitterName: String,
  submitterEmail: String,
  title: String (required),
  description: String (required),
  reasoning: String,
  attachments: [String] (URLs),
  votes: Number,
  status: String (enum: ['pending', 'under-review', 'approved', 'implemented', 'rejected']),
  adminNotes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Notifications Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users, required),
  type: String (enum: ['reply', 'mention', 'order', 'episode', 'merch', 'live']),
  title: String,
  message: String,
  link: String,
  isRead: Boolean,
  createdAt: Date
}
```

---

## API Routes Structure

### Authentication (`/api/auth/[...nextauth]`)
- POST `/api/auth/signin` - Login
- POST `/api/auth/signup` - Register
- POST `/api/auth/signout` - Logout
- GET `/api/auth/session` - Get current session

### Episodes
- GET `/api/episodes` - List episodes (with filters)
- GET `/api/episodes/[slug]` - Get single episode
- POST `/api/episodes` - Create episode (admin)
- PUT `/api/episodes/[id]` - Update episode (admin)
- DELETE `/api/episodes/[id]` - Delete episode (admin)
- POST `/api/episodes/[id]/favorite` - Toggle favorite
- POST `/api/episodes/[id]/play` - Track play count

### Products
- GET `/api/products` - List products (with filters)
- GET `/api/products/[slug]` - Get single product
- POST `/api/products` - Create product (admin)
- PUT `/api/products/[id]` - Update product (admin)
- DELETE `/api/products/[id]` - Delete product (admin)

### Cart & Orders
- GET `/api/cart` - Get user cart
- POST `/api/cart` - Add to cart
- PUT `/api/cart/[itemId]` - Update cart item
- DELETE `/api/cart/[itemId]` - Remove from cart
- POST `/api/checkout` - Create checkout session
- POST `/api/orders` - Create order
- GET `/api/orders` - List user orders
- GET `/api/orders/[id]` - Get order details

### Community
- GET `/api/posts` - List posts (with filters)
- GET `/api/posts/[id]` - Get single post
- POST `/api/posts` - Create post
- PUT `/api/posts/[id]` - Update post
- DELETE `/api/posts/[id]` - Delete post
- POST `/api/posts/[id]/pin` - Pin post (moderator)
- POST `/api/posts/[id]/react` - Add reaction
- GET `/api/posts/[id]/replies` - Get replies
- POST `/api/posts/[id]/replies` - Create reply
- PUT `/api/replies/[id]` - Update reply
- DELETE `/api/replies/[id]` - Delete reply

### Live Events
- GET `/api/live` - Get current/upcoming events
- GET `/api/live/[id]` - Get event details
- POST `/api/live` - Create event (admin)
- GET `/api/live/[id]/messages` - Get chat messages
- POST `/api/live/[id]/messages` - Send message
- POST `/api/live/[id]/pin` - Pin message (moderator)

### Submissions
- GET `/api/submissions` - List submissions
- GET `/api/submissions/[id]` - Get submission
- POST `/api/submissions` - Create submission
- POST `/api/submissions/[id]/vote` - Vote on submission
- PUT `/api/submissions/[id]/status` - Update status (admin)

### User Profile
- GET `/api/users/[id]` - Get user profile
- PUT `/api/users/[id]` - Update profile
- GET `/api/users/[id]/activity` - Get activity feed
- GET `/api/users/[id]/favorites` - Get favorites

### Notifications
- GET `/api/notifications` - Get user notifications
- PUT `/api/notifications/[id]/read` - Mark as read
- PUT `/api/notifications/read-all` - Mark all as read

---

## Component Architecture

### Shared UI Components (`/components/ui`)
```
Button.tsx
Input.tsx
Card.tsx
Badge.tsx
Avatar.tsx
Modal.tsx
Dropdown.tsx
Tabs.tsx
Toast.tsx
Skeleton.tsx
Spinner.tsx
```

### Layout Components (`/components/layout`)
```
Header.tsx
Footer.tsx
Navigation.tsx
Sidebar.tsx
Container.tsx
```

### Feature Components (`/components/features`)
```
/episodes
  EpisodeCard.tsx
  EpisodePlayer.tsx
  EpisodeList.tsx
  EpisodeFilters.tsx

/shop
  ProductCard.tsx
  ProductGrid.tsx
  ProductFilters.tsx
  CartItem.tsx
  CheckoutForm.tsx

/community
  PostCard.tsx
  PostList.tsx
  ReplyThread.tsx
  ReactionButtons.tsx
  CategorySidebar.tsx

/live
  ChatWindow.tsx
  ChatMessage.tsx
  OnlineUsers.tsx
  EventCountdown.tsx

/profile
  ProfileHeader.tsx
  ActivityFeed.tsx
  OrderHistory.tsx
  SettingsForm.tsx
```

---

## State Management Strategy

### Client-Side State
- **Local State:** React useState for component-specific state
- **Form State:** React Hook Form for complex forms
- **Global State:** React Context for theme, auth, cart

### Server State
- **Data Fetching:** Next.js Server Components + API routes
- **Caching:** React Server Components automatic caching
- **Mutations:** Server Actions for form submissions

### Cart State
```javascript
// Context: CartContext
{
  items: [],
  addItem: (product, variant, quantity) => {},
  updateItem: (itemId, quantity) => {},
  removeItem: (itemId) => {},
  clearCart: () => {},
  total: computed
}
```

---

## Authentication Flow

### NextAuth.js Configuration
```javascript
// /app/api/auth/[...nextauth]/route.ts
providers: [
  CredentialsProvider({
    // Email/password login
  }),
  GoogleProvider({
    // Google OAuth
  }),
  // Add more providers as needed
],
callbacks: {
  async session({ session, token }) {
    // Add user ID and role to session
  },
  async jwt({ token, user }) {
    // Add custom claims
  }
}
```

### Protected Routes
```javascript
// middleware.ts
export function middleware(request) {
  // Protect /profile, /checkout, /community/new
}
```

---

## Payment Integration (Multi-Gateway)

### Payment Gateway Selection
- **South African Users:** PayFast (default)
- **International Users:** Stripe
- **Currency Detection:** Based on user location or manual selection

### PayFast Integration (South Africa)

#### Checkout Flow
1. User clicks "Checkout"
2. Detect currency/location (ZAR = PayFast)
3. Create PayFast payment request
4. Redirect to PayFast payment page
5. Handle ITN (Instant Transaction Notification)
6. Verify payment signature
7. Create order in database
8. Send confirmation email
9. Redirect to success page

#### Webhook Handler
```javascript
// /api/webhooks/payfast
POST handler for:
- payment.complete
- payment.cancelled
- payment.failed
```

#### PayFast Configuration
```javascript
{
  merchant_id: process.env.PAYFAST_MERCHANT_ID,
  merchant_key: process.env.PAYFAST_MERCHANT_KEY,
  return_url: `${baseUrl}/order/success`,
  cancel_url: `${baseUrl}/checkout`,
  notify_url: `${baseUrl}/api/webhooks/payfast`,
}
```

### Stripe Integration (International)

#### Checkout Flow
1. User clicks "Checkout"
2. Detect currency (USD/EUR/GBP = Stripe)
3. Create Stripe Checkout Session
4. Redirect to Stripe hosted page
5. Handle webhook for payment confirmation
6. Create order in database
7. Send confirmation email
8. Redirect to success page

#### Webhook Handler
```javascript
// /api/webhooks/stripe
POST handler for:
- checkout.session.completed
- payment_intent.succeeded
- payment_intent.failed
```

### Multi-Currency Pricing
```javascript
// Currency conversion helper
const convertPrice = (zarPrice, targetCurrency) => {
  const rates = {
    USD: 0.054, // 1 ZAR = 0.054 USD
    EUR: 0.049,
    GBP: 0.042
  };
  return Math.ceil(zarPrice * rates[targetCurrency]);
};
```

---

## Real-Time Features (Pusher)

### Live Chat Implementation
```javascript
// Client
const pusher = new Pusher(key);
const channel = pusher.subscribe(`live-${eventId}`);
channel.bind('new-message', (data) => {
  // Update chat UI
});

// Server
pusher.trigger(`live-${eventId}`, 'new-message', {
  message, user, timestamp
});
```

### Online Users
```javascript
// Presence channel
const channel = pusher.subscribe(`presence-live-${eventId}`);
channel.bind('pusher:subscription_succeeded', (members) => {
  // Show online count
});
```

---

## File Upload Strategy

### Vercel Blob
```javascript
import { put } from '@vercel/blob';

// Upload episode artwork
const blob = await put(`episodes/${slug}.jpg`, file, {
  access: 'public',
});
```

### Image Optimization
- Use Next.js Image component
- Serve WebP format
- Lazy load images
- Responsive sizes

---

## SEO Strategy

### Metadata
```javascript
// /app/episodes/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const episode = await getEpisode(params.slug);
  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      images: [episode.artwork],
    },
  };
}
```

### Sitemap
```javascript
// /app/sitemap.ts
export default async function sitemap() {
  const episodes = await getEpisodes();
  const products = await getProducts();
  
  return [
    { url: '/', changeFrequency: 'daily' },
    ...episodes.map(ep => ({
      url: `/episodes/${ep.slug}`,
      lastModified: ep.updatedAt,
    })),
    ...products.map(p => ({
      url: `/shop/${p.slug}`,
      lastModified: p.updatedAt,
    })),
  ];
}
```

---

## Performance Optimization

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic with App Router)
- Lazy load below-the-fold content

### Caching Strategy
```javascript
// API routes
export const revalidate = 3600; // 1 hour

// Dynamic pages
export const dynamic = 'force-dynamic'; // For real-time data
```

### Image Optimization
```javascript
<Image
  src={product.image}
  alt={product.name}
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, 400px"
  priority={false}
/>
```

---

## Error Handling

### API Error Responses
```javascript
// Standard error format
{
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid email format',
    details: {}
  }
}
```

### Error Boundaries
```javascript
// /app/error.tsx
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## Testing Strategy

### Unit Tests
- Utility functions
- API route handlers
- Component logic

### Integration Tests
- API endpoints
- Database operations
- Authentication flow

### E2E Tests (Optional for MVP)
- Critical user flows
- Checkout process
- Post creation

---

## Deployment Checklist

### Environment Variables
```
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# PayFast (South Africa)
PAYFAST_MERCHANT_ID=
PAYFAST_MERCHANT_KEY=
PAYFAST_PASSPHRASE=
PAYFAST_MODE=sandbox # or live

# Stripe (International)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Other Services
PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
BLOB_READ_WRITE_TOKEN=
EMAIL_API_KEY=

# Currency
DEFAULT_CURRENCY=ZAR
EXCHANGE_RATE_API_KEY=
```

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### MongoDB Indexes
```javascript
// Users
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });

// Episodes
db.episodes.createIndex({ slug: 1 }, { unique: true });
db.episodes.createIndex({ publishedAt: -1 });

// Products
db.products.createIndex({ slug: 1 }, { unique: true });
db.products.createIndex({ category: 1 });

// Posts
db.posts.createIndex({ createdAt: -1 });
db.posts.createIndex({ category: 1 });
```

---

*This technical specification will be updated as implementation progresses.*
