/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' , './javascript/*.js'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        'Desaturated-Red': 'hsl(0, 36%, 70%)',
        'Soft-Red' : 'hsl(0, 93%, 68%)',
        'Dark-Grayish-Red': 'hsl(0, 6%, 24%)',
      },
      gradientColorStops: theme => ({
        'gradient-1-start': 'hsl(0, 0%, 100%)',
        'gradient-1-end': 'hsl(0, 100%, 98%)',
        'gradient-2-start': 'hsl(0, 80%, 86%)',
        'gradient-2-end': 'hsl(0, 74%, 74%)',
      }),
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

