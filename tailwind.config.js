const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
        zIndex: {
            '-10': '-10',
        },
        fontFamily: {
            sans: ["Lato", ...defaultTheme.fontFamily.sans],
            serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
        }
    },
  },
  variants: {},
  plugins: [],
}
