/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'primary-dark': '#23D997',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
