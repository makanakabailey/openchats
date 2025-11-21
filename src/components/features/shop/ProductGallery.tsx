'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  images: string[];
  badge: string;
  badgeColor: 'orange' | 'white' | 'red';
}

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const badgeStyles = {
    orange: 'bg-spicy-orange text-white',
    white: 'bg-white text-black',
    red: 'border-2 border-red-500 text-red-500 bg-transparent',
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden">
        {product.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase z-10 ${badgeStyles[product.badgeColor]}`}>
            {product.badge}
          </div>
        )}
        
        <Image
          src={product.images[selectedImage]}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 gap-4">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index 
                ? 'border-spicy-orange' 
                : 'border-zinc-700 hover:border-zinc-600'
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="text-center text-text-muted text-sm">
        {selectedImage + 1} / {product.images.length}
      </div>
    </div>
  );
}