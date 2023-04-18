/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '576px'
    },
    extend: {
      backgroundColor: {
        primary: '#2C2C38',
        secondary: '#21212D',
        btn: '#645FC6',
        todo: '#47C2E2',
        doing: '#826EF2',
        done: '#67E2AC',
        subtitle: '#7F8291'
      },
      colors: {
        primary: '#2C2C38',
        secondary: '#21212D',
        btn: '#645FC6',
        todo: '#47C2E2',
        doing: '#826EF2',
        done: '#67E2AC',
        subtitle: '#7F8291'
      },
      height: {
        navbar: '10vh'
      },
      borderColor: {
        primary: '#2C2C38',
        secondary: '#21212D',
        btn: '#645FC6',
        todo: '#47C2E2',
        doing: '#826EF2',
        done: '#67E2AC',
        subtitle: '#7F8291'
      }
    },
  },
  plugins: [],
}