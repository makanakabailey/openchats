'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash, Plus, Minus } from '@phosphor-icons/react';

export default function CartItems() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'OPENCHATS OVER EVERYTHING TEE',
      price: 350,
      image: '/merch/product1.jpg',
      size: 'L',
      color: 'Black',
      quantity: 2,
    },
    {
      id: 2,
      name: 'OPERATOR HOODIE',
      price: 650,
      image: '/merch/product2.jpg',
      size: 'M',
      color: 'Black',
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="font-display text-2xl font-bold uppercase text-white mb-4">
          Your cart is empty
        </h2>
        <p className="text-text-muted mb-8">
          Add some spicy merch to get started!
        </p>
        <a href="/shop" className="btn-primary">
          SHOP NOW
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div key={`${item.id}-${item.size}-${item.color}`} className="bg-card-dark rounded-lg p-6 border border-zinc-700">
          <div className="flex gap-6">
            {/* Product Image */}
            <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-2">
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {item.name}
              </h3>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <span>Size: {item.size}</span>
                <span>Color: {item.color}</span>
              </div>
              <div className="font-display text-xl font-black text-spicy-orange">
                R{item.price}
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex flex-col items-end gap-4">
              <button
                onClick={() => removeItem(item.id)}
                className="text-text-muted hover:text-red-400 transition-colors"
              >
                <Trash size={20} />
              </button>
              
              <div className="flex items-center border border-zinc-700 rounded">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-2 text-white hover:bg-zinc-700 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-white font-semibold min-w-[60px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-2 text-white hover:bg-zinc-700 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <div className="font-semibold text-white">
                R{item.price * item.quantity}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Continue Shopping */}
      <div className="pt-6 border-t border-zinc-700">
        <a 
          href="/shop" 
          className="text-spicy-orange hover:text-spicy-orange-light font-semibold"
        >
          ← Continue Shopping
        </a>
      </div>
    </div>
  );
}