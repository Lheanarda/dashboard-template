module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors:{
        primary:'#04ac4d'
      },
      fontFamily:{
        monts:['Montserrat','sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
