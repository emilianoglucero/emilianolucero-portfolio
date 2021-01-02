module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    textColor: {
      'primary': '#181818',
      'secondary': '#607890',
      'third': '#607890',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
