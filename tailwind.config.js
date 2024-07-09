/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'rowdies': ["Rowdies"],
    },
    screens: {
      'tablet': '640px',

      'custom-md': { 'max': '640px' },
      
      'laptop': '1400px',
      
      'desktop': '1520px',
    },
  },
  plugins: [],
}
