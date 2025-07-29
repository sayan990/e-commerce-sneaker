
import React, { useState } from 'react';
import { MugIcon, CartIcon, UserIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Tienda' },
    { href: '#', label: 'Sobre Nosotros' },
    { href: '#', label: 'Contacto' },
  ];

  return (
    <header className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <MugIcon className="h-8 w-8 text-brand-primary" />
            <span className="text-2xl font-bold font-serif text-brand-dark">Sneaker Store</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-300 font-medium relative group"
              >
                {link.label}
              </a>
            ))}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <button className="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                <CartIcon className="h-6 w-6"/>
            </button>
            <a href="#" className="text-brand-primary font-semibold hover:text-brand-dark transition-colors duration-300">
              Iniciar Sesión
            </a>
            <a
              href="#"
              className="bg-brand-secondary text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md"
            >
              Registrarse
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-200 w-full">
                <a href="#" className="text-brand-primary font-semibold hover:text-brand-dark transition-colors duration-300">
                  Iniciar Sesión
                </a>
                <a
                  href="#"
                  className="bg-brand-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md"
                >
                  Registrarse
                </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
