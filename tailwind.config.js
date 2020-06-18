const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: false,
  theme: {
    extend: {
        inset: {
          '-1': '-1rem',
          '-24': '-6rem',
        },
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
