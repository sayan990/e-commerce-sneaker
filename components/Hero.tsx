
import React from 'react';


const Hero: React.FC = () => {


  return (
    <section className="relative w-full h-[70vh] min-h-[450px] max-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/hero_bk.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight drop-shadow-lg">
            Binvenido a nuestra tienda
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg drop-shadow-md">
            Somos un equipo de personas apasionadas que estamos dedicados a proporcionar los mejores productos y servicios a nuestros clientes.
          </p>
          <a
            href="/products"
            className="mt-8 inline-block bg-brand-secondary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Comprar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;