// Framer Motion Animation Variants
// Reusable animation configurations for consistent motion across the portfolio

/**
 * Fade In and Move Up Animation
 * Used for text blocks, cards, and content
 */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  exit: { opacity: 0, y: -20 },
};

/**
 * Stagger Container - Orchestrates child animations
 * Use with staggerChildren for cascading effects
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger Item - Applied to children of staggerContainer
 */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

/**
 * Hover Lift Effect - Cards and interactive elements
 */
export const hoverLift = {
  initial: { y: 0 },
  whileHover: { y: -10 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

/**
 * Scale In Animation - For cards entering viewport
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/**
 * Glow Pulse Animation - For glowing elements
 */
export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(59, 130, 246, 0.3)',
      '0 0 40px rgba(59, 130, 246, 0.5)',
      '0 0 20px rgba(59, 130, 246, 0.3)',
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

/**
 * Rotate In Animation - For subtle spin effects
 */
export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6 },
};

/**
 * Slide In from Left
 */
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide In from Right
 */
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Expand In - Grows from center
 */
export const expandIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/**
 * Scroll Trigger Animation - Content reveals on scroll
 */
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

/**
 * Header Scroll Animation
 */
export const headerReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
};
