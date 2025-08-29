// components/ui/CategoryPill.tsx
import React from 'react';

interface CategoryPillProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const CategoryPill: React.FC<CategoryPillProps> = ({
  name,
  isActive = false,
  onClick,
  variant = 'outline',
  size = 'md'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer hover:scale-105';
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: isActive 
      ? 'bg-blue-600 text-white shadow-lg' 
      : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    secondary: isActive 
      ? 'bg-gray-800 text-white shadow-lg' 
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    outline: isActive 
      ? 'bg-blue-600 text-white border-2 border-blue-600 shadow-lg' 
      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:text-blue-600'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      type="button"
    >
      {name}
      {isActive && (
        <span className="ml-1 text-xs opacity-75">✓</span>
      )}
    </button>
  );
};

export default CategoryPill;