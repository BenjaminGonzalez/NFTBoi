module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink:"#cd00c9"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
