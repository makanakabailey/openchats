'use client';

import { useState } from 'react';

export default function CartSummary() {
  const [discountCode, setDiscountCode] = useState('');
  
  // Mock cart totals
  const subtotal = 1350; // R350 * 2 + R650 * 1
  const shipping = subtotal >= 800 ? 0 : 99; // Free shipping over R800
  const discount = 0;
  const total = subtotal + shipping - discount;

  const handleApplyDiscount = () => {
    // Discount code logic here
    console.log('Applying discount code:', discountCode);
  };

  return (
    <div className="bg-card-dark rounded-lg p-6 border border-zinc-700 sticky top-24">
      <h2 className="font-display text-xl font-bold uppercase text-white mb-6">
        Order Summary
      </h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-text-body">
          <span>Subtotal</span>
          <span>R{subtotal}</span>
        </div>
        
        <div className="flex justify-between text-text-body">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `R${shipping}`}</span>
        </div>
        
        {shipping === 0 && (
          <div className="text-green-400 text-sm">
            ✓ Free shipping (orders over R800)
          </div>
        )}
        
        {discount > 0 && (
          <div className="flex justify-between text-green-400">
            <span>Discount</span>
            <span>-R{discount}</span>
          </div>
        )}
        
        <hr className="border-zinc-700" />
        
        <div className="flex justify-between font-display text-xl font-black text-white">
          <span>Total</span>
          <span>R{total}</span>
        </div>
      </div>

      {/* Discount Code */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-white mb-2">
          Discount Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 px-3 py-2 bg-studio-black border border-zinc-700 rounded text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
          />
          <button
            onClick={handleApplyDiscount}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded font-semibold transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full btn-primary mb-4">
        PROCEED TO CHECKOUT
      </button>

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-text-muted text-sm mb-3">We accept:</p>
        <div className="flex justify-center gap-4 text-text-muted">
          <span className="text-xs">PayFast</span>
          <span className="text-xs">•</span>
          <span className="text-xs">Visa</span>
          <span className="text-xs">•</span>
          <span className="text-xs">Mastercard</span>
          <span className="text-xs">•</span>
          <span className="text-xs">EFT</span>
        </div>
      </div>

      {/* Security Badge */}
      <div className="mt-6 p-3 bg-studio-black rounded border border-zinc-700 text-center">
        <p className="text-text-muted text-xs">
          🔒 Secure checkout powered by PayFast & Stripe
        </p>
      </div>
    </div>
  );
}