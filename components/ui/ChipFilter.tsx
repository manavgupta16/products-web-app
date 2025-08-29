// components/ui/ChipFilter.tsx
import React from 'react';

interface ChipOption {
  id: string;
  label: string;
  count?: number;
}

interface ChipFilterProps {
  options: ChipOption[];
  selectedValue?: string;
  onSelectionChange: (value: string) => void;
  placeholder?: string;
  allowMultiple?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ChipFilter: React.FC<ChipFilterProps> = ({
  options,
  selectedValue,
  onSelectionChange,
  placeholder = 'All',
  allowMultiple = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base'
  };

  const handleChipClick = (optionId: string) => {
    if (selectedValue === optionId) {
      // Deselect if clicking the same chip
      onSelectionChange('');
    } else {
      onSelectionChange(optionId);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {/* "All" option */}
      <button
        onClick={() => onSelectionChange('')}
        className={`
          ${sizeClasses[size]}
          inline-flex items-center justify-center font-medium rounded-full 
          transition-all duration-200 hover:scale-105
          ${!selectedValue || selectedValue === ''
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
          }
        `}
        type="button"
      >
        {placeholder}
      </button>

      {/* Filter options */}
      {options.map((option) => {
        const isSelected = selectedValue === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => handleChipClick(option.id)}
            className={`
              ${sizeClasses[size]}
              inline-flex items-center justify-center font-medium rounded-full 
              transition-all duration-200 hover:scale-105
              ${isSelected
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }
            `}
            type="button"
          >
            <span>{option.label}</span>
            {option.count !== undefined && (
              <span className={`ml-1 ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                ({option.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ChipFilter;