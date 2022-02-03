module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          500: '#FF66F0',
          800: '#5200FF',
        },
        gray: {
          800: '#282727',
        },
        orange: {
          500: '#F84E29',
        },
        blue: {
          500: '#4B4AEF',
        },
      },
      width: {
        50: '50px',
        61: '60px',
        65: '64px',
        376: '376px',
      },
      height: {
        30: '30px',
        50: '50px',
        65: '64px',
        140: '140px',
      },
      maxHeight: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
