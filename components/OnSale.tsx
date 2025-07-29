
import React from 'react';
import { ON_SALE_PRODUCTS } from '../constants';
import ProductSection from './ProductSection';

const OnSale: React.FC = () => {
  return (
    <ProductSection
      title="Ofertas por Tiempo Limitado"
      subtitle="¡No te pierdas estas increíbles ofertas!"
      products={ON_SALE_PRODUCTS}
      className="bg-brand-primary/5"
    />
  );
};

export default OnSale;
