
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import OnSale from './components/OnSale';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <OnSale />
      </main>
      <Footer />
    </div>
  );
};

export default App;