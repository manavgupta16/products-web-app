// components/ui/SkeletonLoader.tsx
import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'line' | 'circle' | 'image' | 'text';
  width?: string;
  height?: string;
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'line',
  width,
  height,
  count = 1,
  className = ''
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'card':
        return 'w-full h-64 rounded-lg';
      case 'circle':
        return 'w-10 h-10 rounded-full';
      case 'image':
        return 'w-full aspect-[4/3] rounded-lg';
      case 'text':
        return 'h-4 rounded';
      case 'line':
      default:
        return 'h-4 rounded';
    }
  };

  const variantClasses = getVariantClasses(variant);

  const style = {
    width: width || undefined,
    height: height || undefined
  };

  // Product Card Skeleton
  if (variant === 'card') {
    return (
      <div className={`${baseClasses} p-4 ${className}`}>
        <div className="animate-pulse">
          {/* Image skeleton */}
          <div className="bg-gray-300 rounded-lg w-full aspect-[4/3] mb-3"></div>
          
          {/* Badge skeleton */}
          <div className="bg-gray-300 rounded-full w-16 h-5 mb-2"></div>
          
          {/* Title skeleton */}
          <div className="space-y-2 mb-3">
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-3/4"></div>
          </div>
          
          {/* Rating skeleton */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-300 rounded w-4 h-4"></div>
            ))}
            <div className="bg-gray-300 rounded w-8 h-4 ml-1"></div>
          </div>
          
          {/* Price and button skeleton */}
          <div className="flex items-center justify-between">
            <div className="bg-gray-300 rounded h-6 w-16"></div>
            <div className="bg-gray-300 rounded-md h-8 w-20"></div>
          </div>
        </div>
      </div>
    );
  }

  // Regular skeleton elements
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style}
    />
  ));

  return count === 1 ? skeletons[0] : <>{skeletons}</>;
};

// Product Grid Skeleton - shows multiple card skeletons
export const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <SkeletonLoader key={index} variant="card" />
      ))}
    </div>
  );
};

// Detail Page Skeleton
export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery Skeleton */}
        <div className="space-y-4">
          <div className="bg-gray-300 rounded-lg w-full aspect-square"></div>
          <div className="flex gap-2">
            <div className="bg-gray-300 rounded w-16 h-16"></div>
            <div className="bg-gray-300 rounded w-16 h-16"></div>
            <div className="bg-gray-300 rounded w-16 h-16"></div>
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <div className="bg-gray-300 rounded h-8 w-3/4"></div>
            <div className="bg-gray-300 rounded h-6 w-1/2"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-300 rounded w-5 h-5"></div>
            ))}
            <div className="bg-gray-300 rounded w-12 h-5"></div>
          </div>

          {/* Price */}
          <div className="bg-gray-300 rounded h-10 w-32"></div>

          {/* Description */}
          <div className="space-y-2">
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-full"></div>
            <div className="bg-gray-300 rounded h-4 w-3/4"></div>
          </div>

          {/* Quantity and Cart */}
          <div className="space-y-4">
            <div className="bg-gray-300 rounded h-12 w-32"></div>
            <div className="bg-gray-300 rounded h-12 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;