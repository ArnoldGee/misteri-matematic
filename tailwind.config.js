module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        denim: "#335C67",
        cream: "#FFF3B0",
        rouge: "#9E2A2B"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
