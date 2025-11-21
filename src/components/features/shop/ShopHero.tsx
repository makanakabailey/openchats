'use client';

import { useState } from 'react';

export default function ShopHero() {
  const [selectedCurrency, setSelectedCurrency] = useState('ZAR');

  const currencies = [
    { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
  ];

  return (
    <section className="bg-hero-gradient pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            SHOP THE CULTURE
          </h1>
          <p className="font-body text-lg md:text-xl text-text-body mb-8 max-w-2xl mx-auto">
            Rep Open Chats. Support the movement.
          </p>
          
          {/* Currency Selector */}
          <div className="inline-flex items-center gap-2 bg-card-dark border border-zinc-700 rounded-lg p-2">
            <span className="text-text-muted text-sm px-2">Currency:</span>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
            >
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code} className="bg-card-dark">
                  {currency.code} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}