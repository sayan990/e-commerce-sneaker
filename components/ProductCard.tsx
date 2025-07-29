
import React, { memo } from 'react';
import type { Product } from '../types';
import { calculateDiscount } from '../utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const isSale = product.originalPrice && product.originalPrice !== product.price;
  const discountPercentage = isSale 
    ? calculateDiscount(product.originalPrice!, product.price)
    : 0;

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        {isSale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{discountPercentage}%
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-brand-secondary text-white px-6 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-primary transition-colors duration-300 min-h-[56px]">
            {product.name}
          </h3>
        </div>
        <div className="mt-2">
          <p className="text-brand-primary font-bold text-xl">
            {product.price}
            {isSale && (
              <span className="text-gray-500 font-normal line-through ml-2 text-base">
                {product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
