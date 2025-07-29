
import type { Product } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: '$15.99',
    imageUrl: '/nike_uno.png',
  },
  {
    id: 2,
    name: 'Nike Dunk Low',
    price: '$19.99',
    imageUrl: '/nike_dos.png',
  },
  {
    id: 3,
    name: 'Nike Dunk Low Retro "Panda"',
    price: '$17.99',
    imageUrl: '/nike_tres.png',
  },
  {
    id: 4,
    name: 'Air Jordan 1 Mid ',
    price: '$18.99',
    imageUrl: '/nike_cuatro.png',
  },
  {
    id: 5,
    name: 'Nike Air Force 1 "White"',
    price: '$22.99',
    imageUrl: '/nike_cinco.png',
  },
  {
    id: 6,
    name: 'Nike Air Force 1 "Black"',
    price: '$16.99',
    imageUrl: '/nike_seis.png',
  },
];

export const ON_SALE_PRODUCTS: Product[] = [
    {
        id: 7,
        name: 'Nike Dunk Low "Black"',
        price: '$14.99',
        originalPrice: '$19.99',
        imageUrl: '/nike_siete.png',
    },
    {
        id: 8,
        name: 'Nike Dunk Low "White"',
        price: '$18.99',
        originalPrice: '$24.99',
        imageUrl: '/nike_ocho.png',
    },
    {
        id: 9,
        name: 'Nike Dunk Low "Red"',
        price: '$29.99',
        originalPrice: '$35.99',
        imageUrl: '/nike_nueve.png',
    },
    {
        id: 10,
        name: 'Nike Dunk Low "Green"',
        price: '$12.99',
        originalPrice: '$16.99',
        imageUrl: '/nike_diez.png',
    }
];