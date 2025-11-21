'use client';

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import ShopFilterSidebar from './ShopFilterSidebar';

export default function ProductsGrid() {
  const [showFilters, setShowFilters] = useState(false);

  // Extended product catalog
  const allProducts = [
    // Featured products (repeated for catalog)
    {
      id: 1,
      name: 'OPENCHATS OVER EVERYTHING TEE',
      price: 350,
      currency: 'ZAR',
      image: '/merch/product1.jpg',
      badge: 'SELLING FAST',
      badgeColor: 'orange' as const,
      specs: ['HEAVYWEIGHT COTTON', 'GSM: 240'],
      description: 'Wear the controversy.',
      category: 'Apparel',
    },
    {
      id: 2,
      name: 'OPERATOR HOODIE',
      price: 650,
      currency: 'ZAR',
      image: '/merch/product2.jpg',
      badge: 'NEW DROP',
      badgeColor: 'white' as const,
      specs: ['PUFF PRINT LOGO', 'GSM: 400'],
      description: 'Studio essential.',
      category: 'Apparel',
    },
    {
      id: 3,
      name: 'DON\'T CALL ME CAP',
      price: 250,
      currency: 'ZAR',
      image: '/merch/product3.jpg',
      badge: 'LOW STOCK',
      badgeColor: 'red' as const,
      specs: ['ADJUSTABLE SNAPBACK', 'ONE SIZE'],
      description: 'Hide from haters.',
      category: 'Accessories',
    },
    // Additional products
    {
      id: 4,
      name: 'UNFILTERED STICKER PACK',
      price: 95,
      currency: 'ZAR',
      image: '/merch/product1.jpg',
      badge: 'HOT 🔥',
      badgeColor: 'orange' as const,
      specs: ['WATERPROOF', '10 STICKERS'],
      description: 'Rep everywhere.',
      category: 'Accessories',
    },
    {
      id: 5,
      name: 'SPICY TAKES POSTER',
      price: 280,
      currency: 'ZAR',
      image: '/merch/product2.jpg',
      badge: '',
      badgeColor: 'white' as const,
      specs: ['A2 SIZE', 'MATTE FINISH'],
      description: 'Wall art with attitude.',
      category: 'Home',
    },
    {
      id: 6,
      name: 'CONTROVERSY JACKET',
      price: 850,
      currency: 'ZAR',
      image: '/merch/product3.jpg',
      badge: 'PREMIUM',
      badgeColor: 'white' as const,
      specs: ['WINDBREAKER', 'EMBROIDERED LOGO'],
      description: 'Weather the storm.',
      category: 'Apparel',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ShopFilterSidebar />
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-card-dark border border-zinc-700 rounded-lg text-white"
            >
              <span>Filters</span>
              <div className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>
            
            {showFilters && (
              <div className="mt-4 p-4 bg-card-dark rounded-lg border border-zinc-700">
                <ShopFilterSidebar />
              </div>
            )}
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-text-muted">
                Showing {allProducts.length} products
              </p>
              <select className="px-3 py-2 bg-card-dark border border-zinc-700 rounded text-white focus:border-spicy-orange focus:outline-none">
                <option>Sort: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                LOAD MORE PRODUCTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}