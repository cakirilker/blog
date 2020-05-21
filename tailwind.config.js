module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        wetasphalt: "#34495e",
        emerland: "#2ecc71",
        nephritis: "#27ae60",
        midnightblue: "#2c3e50"
      }
    },
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: [],
}
