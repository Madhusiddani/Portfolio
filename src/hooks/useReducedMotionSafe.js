import { useEffect, useState } from 'react';

/**
 * Custom hook to check if user prefers reduced motion
 * Returns true if prefers-reduced-motion is set to reduce
 * 
 * Usage:
 * const prefersReducedMotion = useReducedMotionSafe();
 * <motion.div animate={prefersReducedMotion ? {} : { y: 10 }} />
 */
export const useReducedMotionSafe = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    // Initialize from mediaQuery on mount
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Handle changes
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Higher-order variant modifier that respects reduced motion
 * Pass animation variants and returns safe variants
 * 
 * Usage:
 * const variants = getSafeVariants(fadeUpVariant, prefersReducedMotion);
 */
export const getSafeVariants = (variants, prefersReducedMotion) => {
  if (!prefersReducedMotion) return variants;

  // Return instant animations for reduced motion
  return {
    initial: variants.initial || {},
    animate: variants.animate || {},
    exit: variants.exit || {},
    transition: { duration: 0 }, // No transition time
  };
};

/**
 * Helper to create motion-safe configuration
 * Returns empty transition if reduced motion is preferred
 */
export const getSafeTransition = (prefersReducedMotion, normalTransition) => {
  if (prefersReducedMotion) {
    return { duration: 0 };
  }
  return normalTransition;
};
