/** @type {import('tailwindcss').Config} */;
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}", './blog/*.{html,js}', './stars/profiles/*.html' , './votenow/*.html', './viewersprizeplay/*.html'],
  theme: {
    screens: {
      xsmd: "450px",
      ssmd: "540px",
      smd: "630px",
      blogxmd: "680px",
      xmd: "760px",
      md: "900px",
      lg: "1100px"
    },
    fontFamily: {
      "nunito": "Raleway",
      "raleway": "Nunito",
      "montserrat": "Montserrat",
    },
    listStyleType: {
      square: 'square',
      disc: 'disc'
    },
    extend: {
      colors: {
        ...colors,
        'darkgold': 'rgb(225 173 74)',
        'error-red': 'hsl(0 100% 66%)',
        'light-orange': 'rgb(252 174 30)',
        'dark-orange': '#ED820E',
        'magenta': 'rgb(255 0 255)',
      }
    },
  },
  plugins: [],
}