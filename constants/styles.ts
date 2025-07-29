// Common CSS classes for the e-commerce app

export const SECTION_CLASSES = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  title: 'text-3xl md:text-4xl font-bold font-serif text-brand-dark',
  subtitle: 'mt-3 text-lg text-gray-600',
  header: 'text-center mb-12',
} as const;

export const BUTTON_CLASSES = {
  primary: 'bg-brand-secondary text-white px-6 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300',
  carousel: 'absolute top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-brand-dark p-2 rounded-full shadow-lg z-10 transition-opacity duration-300',
} as const;

export const CARD_CLASSES = {
  product: 'group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full',
  image: 'w-full h-64 object-cover',
  content: 'p-5 flex-grow flex flex-col justify-between',
  title: 'text-lg font-semibold text-brand-dark group-hover:text-brand-primary transition-colors duration-300 min-h-[56px]',
  price: 'text-brand-primary font-bold text-xl',
  saleBadge: 'absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10',
  overlay: 'absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center',
} as const; 