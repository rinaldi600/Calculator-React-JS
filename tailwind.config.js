module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '575.98px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '576px', 'max': '767.98px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '768px', 'max': '991.98px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '992px', 'max': '1199.98px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1200px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
