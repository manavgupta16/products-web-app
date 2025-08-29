// components/ui/RatingBadge.tsx
import React from 'react';

interface RatingBadgeProps {
  rating: number;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ 
  rating, 
  showNumber = true, 
  size = 'md' 
}) => {
  // Clamp rating between 0 and 5
  const clampedRating = Math.max(0, Math.min(5, rating));
  
  // Generate stars array
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= clampedRating;
    const isHalfFilled = starValue - 0.5 <= clampedRating && starValue > clampedRating;
    
    return {
      id: index,
      filled: isFilled,
      halfFilled: isHalfFilled
    };
  });

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {stars.map((star) => (
          <svg
            key={star.id}
            className={`${sizeClasses[size]} ${
              star.filled 
                ? 'text-yellow-400' 
                : star.halfFilled 
                ? 'text-yellow-400' 
                : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {star.halfFilled ? (
              <defs>
                <linearGradient id={`half-${star.id}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            ) : null}
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              fill={star.halfFilled ? `url(#half-${star.id})` : 'currentColor'}
            />
          </svg>
        ))}
      </div>
      {showNumber && (
        <span className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
          {clampedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingBadge;