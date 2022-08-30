/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#1D242B',
      'gray': '#DFDFDE', 
      'white': '#F7F7F7',
      'yellow': '#F0A500'
    }
  },
  plugins: [],
}
