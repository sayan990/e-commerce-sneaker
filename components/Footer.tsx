
import React from 'react';
import { MugIcon } from './Icons';

const Footer: React.FC = () => {
  const footerLinks = {
    Shop: [
      { name: 'Todas las zapatillas', href: '#' },
      { name: 'Zapatillas Personalizadas', href: '#' },
      { name: 'Sets de regalo', href: '#' },
      { name: 'Mas vendidos', href: '#' },
    ],
    Company: [
      { name: 'Sobre Nosotros', href: '#' },
      { name: 'Recorrido', href: '#' },
      { name: 'Presentación', href: '#' },
      { name: 'Afiliados', href: '#' },
    ],
    Support: [
      { name: 'Contacto', href: '#' },
      { name: 'Preguntas Frecuentes', href: '#' },
      { name: 'Envío', href: '#' },
      { name: 'Devoluciones', href: '#' },
    ],
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <MugIcon className="h-8 w-8 text-brand-light" />
              <span className="text-2xl font-bold font-serif text-brand-light">Sneaker Store</span>
            </a>
            <p className="text-gray-400">Las mejores zapatillas, a tu alcance.</p>
            {/* Social icons can be added here if you have them as components */}
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-2 lg:col-span-3">
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-300">Tienda</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.Shop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-300">Sobre Nosotros</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-300">Soporte</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.Support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Maxi Desarrollador. Diseñado y desarrollado con ❤️ usando React, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
