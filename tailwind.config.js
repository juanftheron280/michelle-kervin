/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        charcoal: '#1A1A1A',
        cream: '#F4EFE6',
        'cream-warm': '#EDE5D8',
        gold: '#C9A96E',
        'gold-light': '#D4B97A',
        burgundy: '#6B1F1F',
        muted: '#9B8E7A',
      },
      fontFamily: {
        heading: ['Eyesome Script', 'cursive'],
        body: ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
