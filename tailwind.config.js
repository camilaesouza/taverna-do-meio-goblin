/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          1: '#D6C4A1',
          2: '#77643F',
        },
        brown: {
          1: '#251F11',
        },
      },
      height: {
        '2px': '2px',
        '65px': '65px',
      },
      width: {
        '75px': '75px',
        '100px': '100px',
        '200px': '200px',
        '570px': '570px',
        '430px': '430px',
      },
      fontSize: {
        '55px': '55px',
        '30px': '30px',
        '12px': '12px',
      },
      margin: {
        '0': '0',
        '-2': '-2rem',
        '-6': '-6rem',
        '-9': '-9rem',
        '1': '1rem',
        '-12px': '-12px',
      },
      boxShadow: {
        'text-1': '1px 4px 3px #00000063',
      },
      fontFamily: {
        railey: ['Railey', 'serif'],
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-1': {
          textShadow: '1px 4px 3px #00000063',
        },
        '.hover\\:text-shadow-1:hover': {
          textShadow: '1px 4px 3px #00000063',
        },
      })
    }
  ],
}