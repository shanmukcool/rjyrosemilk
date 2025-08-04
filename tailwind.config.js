/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xl2': '2250px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        // Brand primary color
        brand: {
          primary: '#c4002e',
          secondary: '#FFF9F5',
        },
        // Updated rose colors
        rose: {
          50: '#FFF9F5',
          100: '#FFF9F5',
          200: '#FFF9F5',
          300: '#FFF9F5',
          400: '#CC0035',
          500: '#8B2635',
          600: '#8B2635',
          700: '#8B2635',
          800: '#8B2635',
          900: '#8B2635',
        },
        // Text colors
        text: {
          primary: '#000000',
          secondary: '#4B4B4B',
          light: '#FFFFFF',
        },
        // Updated color palette
        mustard: '#D4A574',
        cream: '#FDF6E3',
        gold: '#B8860B',
        dark: '#2C1810',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 10s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};