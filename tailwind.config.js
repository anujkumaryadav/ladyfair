/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*"
  ],
  theme: {
    extend: {
      colors: {
        pink1: '#FF006B',
        pink2: '#FF6589',
        pink3: '#FFF5FC',
        black1: '#263238',
        black2: '#455A64',

      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

