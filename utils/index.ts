// Utility functions for the e-commerce app

export const formatPrice = (price: string): string => {
  return price.startsWith('$') ? price : `$${price}`;
};

export const calculateDiscount = (originalPrice: string, salePrice: string): number => {
  const original = parseFloat(originalPrice.replace('$', ''));
  const sale = parseFloat(salePrice.replace('$', ''));
  return Math.round(((original - sale) / original) * 100);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}; 