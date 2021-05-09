const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: defaultTheme.fontFamily,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
