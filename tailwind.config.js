/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#576fd9',
      'primary-400': '#7F95E8',
      'primary-700': '#2B3C9C',
      'white' : '#F5F5FA',
      'gray': '#efefef',
      'black-400': '#898989',
      'black': '#2e2e2e',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
}

