'use client';

import { useState } from 'react';
import { Star, Heart, ShareNetwork, ShoppingCart } from '@phosphor-icons/react';

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    // Add to cart logic here
    console.log('Adding to cart:', {
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    
    alert('Added to cart!');
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-black uppercase text-white mb-4">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                weight={i < Math.floor(product.rating) ? 'fill' : 'regular'}
                className="text-spicy-orange"
              />
            ))}
          </div>
          <span className="text-text-muted text-sm">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        <div className="font-display text-3xl font-black text-spicy-orange mb-4">
          R{product.price}
        </div>

        <p className="text-text-body leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-3">
          Size
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 text-center border-2 rounded font-semibold transition-colors ${
                selectedSize === size
                  ? 'border-spicy-orange text-spicy-orange bg-spicy-orange/10'
                  : 'border-zinc-700 text-text-body hover:border-zinc-600 hover:text-white'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-3">
          Color
        </h3>
        <div className="flex gap-3">
          {product.colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 border-2 rounded font-semibold transition-colors ${
                selectedColor === color
                  ? 'border-spicy-orange text-spicy-orange bg-spicy-orange/10'
                  : 'border-zinc-700 text-text-body hover:border-zinc-600 hover:text-white'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-3">
          Quantity
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-zinc-700 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-white hover:bg-zinc-700 transition-colors"
            >
              -
            </button>
            <span className="px-4 py-2 text-white font-semibold min-w-[60px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-white hover:bg-zinc-700 transition-colors"
            >
              +
            </button>
          </div>
          
          {product.inStock ? (
            <span className="text-green-400 text-sm">✓ In Stock</span>
          ) : (
            <span className="text-red-400 text-sm">✗ Out of Stock</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-3 bg-spicy-orange hover:bg-spicy-orange-dark disabled:bg-zinc-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold uppercase text-lg transition-colors"
        >
          <ShoppingCart size={24} weight="bold" />
          {product.inStock ? 'COP THIS' : 'OUT OF STOCK'}
        </button>

        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border-2 border-zinc-700 hover:border-zinc-600 text-white py-3 rounded-lg font-semibold transition-colors">
            <Heart size={20} />
            Wishlist
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border-2 border-zinc-700 hover:border-zinc-600 text-white py-3 rounded-lg font-semibold transition-colors">
            <ShareNetwork size={20} />
            Share
          </button>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="bg-card-dark p-4 rounded-lg border border-zinc-700">
        <h4 className="font-semibold text-white mb-2">Shipping Info</h4>
        <ul className="text-text-body text-sm space-y-1">
          <li>• Free shipping over R800 in South Africa</li>
          <li>• International shipping available</li>
          <li>• 3-5 business days delivery</li>
          <li>• 30-day return policy</li>
        </ul>
      </div>
    </div>
  );
}