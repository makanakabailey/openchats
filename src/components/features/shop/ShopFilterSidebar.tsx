'use client';

import { useState } from 'react';

export default function ShopFilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Apparel']);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSort, setSelectedSort] = useState('Popular');

  const categories = ['Apparel', 'Accessories', 'Home', 'Digital'];
  const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-4 h-4 rounded border-zinc-600 bg-card-dark text-spicy-orange focus:ring-spicy-orange focus:ring-2"
              />
              <span className="text-text-body hover:text-white transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Price (ZAR)
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-sm">R0</span>
            <div className="flex-1 h-2 bg-zinc-700 rounded-full relative">
              <div 
                className="absolute h-full bg-spicy-orange rounded-full"
                style={{ width: '70%' }}
              />
              <div 
                className="absolute w-4 h-4 bg-spicy-orange rounded-full -mt-1 cursor-pointer"
                style={{ left: '70%' }}
              />
            </div>
            <span className="text-text-muted text-sm">R1000</span>
          </div>
          <div className="text-center text-white font-semibold">
            R{priceRange[0]} - R{priceRange[1]}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Sort By
        </h3>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          className="w-full px-3 py-2 bg-card-dark border border-zinc-700 rounded text-white focus:border-spicy-orange focus:outline-none"
        >
          {sortOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-display text-lg font-bold uppercase text-white mb-4">
          Size
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <button
              key={size}
              className="py-2 text-center border border-zinc-700 rounded text-text-body hover:border-spicy-orange hover:text-white transition-colors"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button 
        onClick={() => {
          setSelectedCategories([]);
          setPriceRange([0, 1000]);
          setSelectedSort('Popular');
        }}
        className="w-full py-2 text-sm text-spicy-orange hover:text-spicy-orange-light transition-colors border border-spicy-orange rounded hover:bg-spicy-orange/10"
      >
        Clear All Filters
      </button>
    </div>
  );
}