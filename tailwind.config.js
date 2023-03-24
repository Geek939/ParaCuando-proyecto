/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'app-blue': '#1b4db1',
        'app-yellow': '#f3f243',
        'app-pink': '#ff64bc',
        'app-gris': 'rgba(217, 217, 217, 1)', // gris, fondo del corazon, background color to heart button icon -- FOR CARD --
        'link-blue': 'rgba(27, 77, 177, 1)', // link color azul, link color blue -- FOR CARD --
        'black-light': 'rgba(26, 30, 46, 1)', // negro titulo y votos, black letter for title and vote -- FOR CARD --
        'gray-letter': 'rgba(110, 106, 108, 1)', // letras descripcion, gray description color -- FOR CARD --
        'pink-heart': '#FF64BC', // Fondo rosa para el like, Pink click background heart icon --FOR CARD --
        'gris-dark': '#6E6A6C',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'app-card': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
      
    },
  },
  plugins: [],
};
