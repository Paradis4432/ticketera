/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundPosition: {
        'custom-1': '20% 30%',
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
};
