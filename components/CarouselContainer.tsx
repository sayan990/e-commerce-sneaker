import React, { forwardRef } from 'react';

interface CarouselContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CarouselContainer = forwardRef<HTMLDivElement, CarouselContainerProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex overflow-x-auto space-x-8 pb-4 scroll-smooth carousel-container ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {children}
      </div>
    );
  }
);

CarouselContainer.displayName = 'CarouselContainer';

export default CarouselContainer; 