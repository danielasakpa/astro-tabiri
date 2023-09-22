/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },

      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },

      colors: {
        strongBlue: '#010413',
        strongBlueShade1: '#999ba1',
        strongBlueShade2: '#b3b4b8',
        lightBlue: '#e6e6e7',
        lightBlue1: '#fbdd59',
        lightBlue2: '#b3b4b8',
        blue: '#041925',
        yellow: '#FCDA54',

        darkBlue: '#041721',
        tagColor: 'rgb(29 56 72)',
        textLightGold: '#fdf1bd',
        darkGold: '#b0993b',
        btnBgColor: '#7e6d2a',

        // light and darkmode color group

        lightMainColor: '#E7EBED',
        lightSecondMainColor: '#F7F7F8',
        darkTextGold: '#2F2B1A',

        darkMainColor: '#0A2D42',
        darkSecondMainColor: '#0B3249',
        lightYellow: '#fef8de'

      },
    },
  }

}
