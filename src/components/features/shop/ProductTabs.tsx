'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  features: string[];
  sizeGuide: Record<string, { chest: string; length: string }>;
  reviewCount: number;
}

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'size-guide', label: 'Size Guide' },
    { id: 'reviews', label: `Reviews (${product.reviewCount})` },
    { id: 'shipping', label: 'Shipping' },
  ];

  return (
    <div className="mb-12">
      {/* Tab Navigation */}
      <div className="border-b border-zinc-700 mb-6">
        <nav className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-spicy-orange text-spicy-orange'
                  : 'border-transparent text-text-muted hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="text-text-body">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                Product Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-spicy-orange mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                Care Instructions
              </h3>
              <ul className="space-y-2">
                <li>• Machine wash cold with like colors</li>
                <li>• Do not bleach</li>
                <li>• Tumble dry low heat</li>
                <li>• Iron inside out on low heat</li>
                <li>• Do not dry clean</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'size-guide' && (
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              Size Guide (cm)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-zinc-700 rounded-lg">
                <thead>
                  <tr className="bg-card-dark">
                    <th className="border border-zinc-700 px-4 py-3 text-left font-semibold text-white">Size</th>
                    <th className="border border-zinc-700 px-4 py-3 text-left font-semibold text-white">Chest</th>
                    <th className="border border-zinc-700 px-4 py-3 text-left font-semibold text-white">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.sizeGuide).map(([size, measurements]) => (
                    <tr key={size}>
                      <td className="border border-zinc-700 px-4 py-3 font-semibold">{size}</td>
                      <td className="border border-zinc-700 px-4 py-3">{measurements.chest}</td>
                      <td className="border border-zinc-700 px-4 py-3">{measurements.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-muted text-sm mt-4">
              Measurements are taken flat across the front. For best fit, compare to a similar garment you own.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              Customer Reviews
            </h3>
            <div className="space-y-6">
              {/* Sample Reviews */}
              <div className="border border-zinc-700 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-spicy-orange">★</span>
                    ))}
                  </div>
                  <span className="font-semibold text-white">Thabo M.</span>
                  <span className="text-text-muted text-sm">Verified Purchase</span>
                </div>
                <p className="text-text-body">
                  "Quality is insane! The print is crisp and the material feels premium. 
                  Definitely worth the price. Repping Open Chats everywhere now! 🔥"
                </p>
              </div>

              <div className="border border-zinc-700 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-spicy-orange">★</span>
                    ))}
                    <span className="text-zinc-600">★</span>
                  </div>
                  <span className="font-semibold text-white">Nomsa K.</span>
                  <span className="text-text-muted text-sm">Verified Purchase</span>
                </div>
                <p className="text-text-body">
                  "Love the design and fit. Only complaint is it took a bit long to arrive, 
                  but customer service was helpful. Will definitely order again."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                South Africa Shipping
              </h3>
              <ul className="space-y-2">
                <li>• <strong>Free shipping</strong> on orders over R800</li>
                <li>• Standard shipping: R99 (3-5 business days)</li>
                <li>• Express shipping: R199 (1-2 business days)</li>
                <li>• Major cities: Johannesburg, Cape Town, Durban, Pretoria</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                International Shipping
              </h3>
              <ul className="space-y-2">
                <li>• Available worldwide</li>
                <li>• Shipping costs calculated at checkout</li>
                <li>• Delivery time: 7-14 business days</li>
                <li>• Customs duties may apply</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                Returns & Exchanges
              </h3>
              <ul className="space-y-2">
                <li>• 30-day return policy</li>
                <li>• Items must be unworn and in original packaging</li>
                <li>• Free returns for defective items</li>
                <li>• Exchange for different size available</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}