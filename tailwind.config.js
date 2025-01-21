/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'offwhite' : '#F0F0D7',
        'green-light' : '#D0DDD0',
        'green-medium' : '#AAB99A',
        'green-dark' : '#727D73'
      },
    },
    fontFamily: {
      'primary': 'Rubik, sans-serif'
    }
  },
  plugins: [],
}

