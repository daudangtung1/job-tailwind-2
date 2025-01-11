/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        galleryBlue1: 'rgb(10, 103, 233)',
        white1: 'rgb(250, 250, 250)',
        lightGray1: 'rgb(36, 36, 36)',
        lightGray2: 'rgb(84, 84, 84)',
        lightGray3: 'rgb(234, 242, 254)',
        lightGray4: 'rgb(228, 228, 228)',
        defaultOrange: 'rgb(244, 64, 37)',
        orange1: 'rgb(242, 66, 13)',
        orange2: 'rgb(242, 67, 13)',
        darkBlue1: 'rgb(5, 31, 77)',
        darkBlue2: 'rgb(7, 58, 145)',
        darkBlue3: 'rgb(5, 34, 74)',
        blue1: 'rgb(41, 99, 255)',
        whiteTransparent: 'rgba(255, 255, 255, 0)',
      },
      screens: {
        'full-screen': '1920px',
        'tablet-lg': '992px',
        'xs': '410px',
      },
      boxShadow: {
        shadow1: '2px 7px 15px 0px rgba(0, 0, 0, 0.2)',
        shadow2: 'rgb(5, 34, 74) 0px 2px 0px 0px'
      },
      borderRadius: {
        'bottom-left-370px': '0 0 0 370px'
      },
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {};
      for (let i = 1; i <= 20; i++) {
          utilities[`.break-para-${i}`] = {
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': `${i}`,
              wordBreak: 'break-word',
          };
      }
      addUtilities(utilities, ['responsive']);
    }),
  ],
}
