// components/ui/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RatingBadge from './RatingBadge';
import PriceRow from './PriceRow';
import { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  className = ''
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add button
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className={`
        group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
        overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer
        hover:-translate-y-1 ${className}
      `}>
        {/* Product Image */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badge */}
          {product.badge && (
            <div className={`
              absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-md
              ${product.badge === 'NEW' 
                ? 'bg-green-500 text-white' 
                : 'bg-orange-500 text-white'
              }
            `}>
              {product.badge}
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-red-600 px-3 py-1 rounded-md">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name - 2 lines max */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-5 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Rating */}
          <div className="mb-3">
            <RatingBadge rating={product.rating} size="sm" />
          </div>

          {/* Price and Add Button */}
          <div className="flex items-center justify-between">
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`
                px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                ${product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {product.inStock ? 'Add' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;