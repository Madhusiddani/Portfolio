/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          950: '#051420',
        },
        primary: '#64ffda',
        blue: {
          glow: '#3b82f6',
          accent: '#60a5fa',
          dark: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.5)',
        'glow-blue': '0 0 20px rgba(96, 165, 250, 0.4)',
      },
    },
  },
  plugins: [],
}

