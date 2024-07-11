/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundPosition: {
        'custom-1': '20% 30%',
    },
    fontFamily: {
      koulen: ['Koulen', 'sans-serif'],
    }
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
};
