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
      
      'laptop': '1440px',
      
      'desktop': '1520px',
    },
  },
  plugins: [],
}
