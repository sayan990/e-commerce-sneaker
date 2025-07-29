import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  className?: string;
  showCarousel?: boolean;
  children?: React.ReactNode;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  className = '',
  showCarousel = false,
  children,
}) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
            {title}
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        
        {children || (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection; 