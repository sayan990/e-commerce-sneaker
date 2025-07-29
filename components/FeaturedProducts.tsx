
import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import CarouselButton from './CarouselButton';
import CarouselContainer from './CarouselContainer';
import { useCarousel } from '../hooks/useCarousel';

const FeaturedProducts: React.FC = () => {
  const { scrollContainer, canScrollLeft, canScrollRight, scroll } = useCarousel();

  return (
    <section className="bg-brand-light py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
            Las mejores zapatillas de este Mes
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Productos seleccionados, amados por ti.
          </p>
        </div>
        
        <div className="relative">
          <CarouselButton
            direction="left"
            onClick={() => scroll('left')}
            isVisible={canScrollLeft}
          />
          
          <CarouselContainer ref={scrollContainer}>
            {FEATURED_PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </CarouselContainer>
          
          <CarouselButton
            direction="right"
            onClick={() => scroll('right')}
            isVisible={canScrollRight}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
