// app/(shop)/products/[id]/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getCategoryById, products } from '@/lib/data/products';
import RatingBadge from '@/components/ui/RatingBadge';
import CategoryPill from '@/components/ui/CategoryPill';
import ProductCard from '@/components/ui/ProductCard';
import { ProductDetailSkeleton } from '@/components/ui/SkeletonLoader';

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);

  const product = useMemo(() => getProductById(productId), [productId]);
  const category = useMemo(() => 
    product ? getCategoryById(product.category) : null, 
    [product]
  );

  // Get related products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, Math.min(10, newQuantity)));
  };

  const handleAddToCart = () => {
    setIsLoading(true);
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + quantity
    }));
    
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleRemoveFromCart = () => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[product.id] && newCart[product.id] > 0) {
        newCart[product.id] -= 1;
        if (newCart[product.id] === 0) {
          delete newCart[product.id];
        }
      }
      return newCart;
    });
  };

  const cartQuantity = cart[product.id] || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            {category && (
              <>
                <span className="text-gray-600">{category.name}</span>
                <span className="text-gray-400">/</span>
              </>
            )}
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`
                      flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200
                      ${selectedImageIndex === index 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Badge */}
            <div>
              {product.badge && (
                <div className="mb-3">
                  <CategoryPill
                    name={product.badge}
                    variant={product.badge === 'NEW' ? 'primary' : 'secondary'}
                    size="sm"
                  />
                </div>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {category && (
                <Link 
                  href={`/products?category=${category.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {category.name}
                </Link>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <RatingBadge rating={product.rating} size="lg" />
              <span className="text-sm text-gray-500">
                Based on customer reviews
              </span>
            </div>

            {/* Price */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                ${product.price.toFixed(2)}
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.fullDesc}</p>
            </div>

            {/* Quantity and Cart Controls */}
            <div className="space-y-4">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-20 px-3 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cart Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isLoading}
                  className={`
                    flex-1 py-3 px-6 rounded-md font-semibold text-white transition-all duration-200
                    ${product.inStock && !isLoading
                      ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
                      : 'bg-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </span>
                  ) : (
                    `Add ${quantity} to Cart`
                  )}
                </button>

                {cartQuantity > 0 && (
                  <button
                    onClick={handleRemoveFromCart}
                    className="px-6 py-3 border-2 border-red-500 text-red-600 rounded-md font-semibold hover:bg-red-50 transition-colors"
                  >
                    Remove (${cartQuantity})
                  </button>
                )}
              </div>

              {cartQuantity > 0 && (
                <div className="text-center text-sm text-green-600 bg-green-50 py-2 rounded-md">
                  ✓ {cartQuantity} item(s) in cart
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
              <Link 
                href={`/products?category=${product.category}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;