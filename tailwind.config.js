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
          1: '#E2D6BF',
          2: '#D2C5AB',
        },
        green: {
          1: '#6E7B5E',
        },
        brown: {
          1: '#251F11',
        },
      },
      fontFamily: {
        railey: ['Railey', 'serif'],
      }
    },
  },
  plugins: [
  ],
}