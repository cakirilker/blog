module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        wetasphalt: "#34495e",
        emerland: "#2ecc71",
        nephritis: "#27ae60",
        midnightblue: "#2c3e50",
        'link-color': "#5694f1"
      }
    },
    fontFamily: {
      'sans': ['Helvetica Neue', 'Helvetica', 'Roboto'],
    }
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: [],
}
