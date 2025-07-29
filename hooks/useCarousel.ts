import { useRef, useState, useEffect, useCallback } from 'react';

interface UseCarouselOptions {
  scrollAmount?: number;
  buffer?: number;
  delay?: number;
}

export const useCarousel = (options: UseCarouselOptions = {}) => {
  const { scrollAmount = 0.8, buffer = 5, delay = 100 } = options;
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - buffer);
    }
  }, [buffer]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const { clientWidth } = scrollContainer.current;
      const amount = direction === 'left' ? -clientWidth * scrollAmount : clientWidth * scrollAmount;
      scrollContainer.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }, [scrollAmount]);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const timer = setTimeout(checkScrollability, delay);
    
    container.addEventListener('scroll', checkScrollability);
    window.addEventListener('resize', checkScrollability);
    
    return () => {
      clearTimeout(timer);
      container.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability, delay]);

  return {
    scrollContainer,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
}; 