// app/(shop)/products/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { products, categories, sortProducts } from '@/lib/data/products';
import ProductCard from '@/components/ui/ProductCard';
import ChipFilter from '@/components/ui/ChipFilter';
import CategoryPill from '@/components/ui/CategoryPill';
import { ProductGridSkeleton } from '@/components/ui/SkeletonLoader';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'popularity'>('popularity');
  const [isLoading, setIsLoading] = useState(false);

  // Cart state (in a real app, this would be in a context or store)
  const [cart, setCart] = useState<Record<string, number>>({});

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory 
      ? products.filter(p => p.category === selectedCategory)
      : products;
    
    return sortProducts(filtered, sortBy);
  }, [selectedCategory, sortBy]);

  // Get category options with product counts
  const categoryOptions = useMemo(() => {
    return categories.map(category => ({
      id: category.id,
      label: category.name,
      count: products.filter(p => p.category === category.id).length
    }));
  }, []);

  const handleAddToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    
    // Show a brief loading state for user feedback
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as typeof sortBy);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              NFC Cards & Smart Tags
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium NFC cards and smart tags for business, 
              social media, and home automation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          {/* Category Filter */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category</h3>
            <ChipFilter
              options={categoryOptions}
              selectedValue={selectedCategory}
              onSelectionChange={setSelectedCategory}
              placeholder="All Categories"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="lg:w-64">
            <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700 mb-2">
              Sort by
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Showing {filteredAndSortedProducts.length} of {products.length} products
            {selectedCategory && (
              <span className="ml-1">
                in {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            )}
          </div>
          
          {/* Cart Summary */}
          <div className="text-sm text-gray-600">
            Cart: {Object.values(cart).reduce((sum, qty) => sum + qty, 0)} items
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <ProductGridSkeleton count={8} />
        ) : (
          <>
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search different categories.
                </p>
              </div>
            )}
          </>
        )}

        {/* Category Info Section */}
        {selectedCategory && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              {(() => {
                const category = categories.find(c => c.id === selectedCategory);
                return (
                  <>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {category?.name}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {category?.description}
                    </p>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;