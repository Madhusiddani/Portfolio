import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-triggered animations
 * Returns an object with ref and controls for Framer Motion
 * 
 * Usage:
 * const { ref, isInView } = useScrollAnimation();
 * <motion.div ref={ref} initial="initial" animate={isInView ? "animate" : "initial"} />
 */
export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // Trigger when 30% of element is visible
  });

  return { ref, isInView };
};

/**
 * Alternative hook that returns simple trigger status
 * Useful for simpler animations
 */
export const useInViewAnimation = (amount = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
};
