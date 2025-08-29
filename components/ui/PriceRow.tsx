// components/ui/PriceRow.tsx
import React from 'react';

interface PriceRowProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alignment?: 'left' | 'center' | 'right';
  showDiscount?: boolean;
}

const PriceRow: React.FC<PriceRowProps> = ({
  price,
  originalPrice,
  currency = '$',
  size = 'md',
  alignment = 'left',
  showDiscount = false
}) => {
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const originalPriceSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex items-center gap-2 ${alignmentClasses[alignment]}`}>
      {/* Current Price */}
      <span className={`${sizeClasses[size]} font-bold text-gray-900`}>
        {currency}{price.toFixed(2)}
      </span>

      {/* Original Price (if discounted) */}
      {hasDiscount && (
        <span className={`${originalPriceSizeClasses[size]} text-gray-500 line-through`}>
          {currency}{originalPrice.toFixed(2)}
        </span>
      )}

      {/* Discount Badge */}
      {hasDiscount && showDiscount && (
        <span className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-md">
          -{discountPercentage}%
        </span>
      )}

      {/* Stock Status Indicator */}
      <div className="flex items-center">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="ml-1 text-xs text-gray-500">In Stock</span>
      </div>
    </div>
  );
};

export default PriceRow;