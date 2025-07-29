/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#8D5B4C',
        'brand-secondary': '#D97706',
        'brand-light': '#F5EFE6',
        'brand-dark': '#3A2E29',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
} 