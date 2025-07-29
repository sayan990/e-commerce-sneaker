import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  isVisible: boolean;
  className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
  isVisible,
  className = '',
}) => {
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
  const positionClass = direction === 'left' 
    ? '-left-4 md:-left-6' 
    : '-right-4 md:-right-6';

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 ${positionClass} transform -translate-y-1/2
        bg-white/80 backdrop-blur-sm hover:bg-white 
        text-brand-dark p-2 rounded-full shadow-lg z-10 
        transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        ${className}
      `}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} Products`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};

export default CarouselButton; 