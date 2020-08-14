const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "hsl(180, 29%, 50%)",
      cyan: {
        lightGraysh: "hsl(180, 52%, 96%)",
        veryLightGraysh: "hsl(180, 31%, 95%)",
        darkGraysh: "hsl(180, 8%, 52%)",
        veryDarkGraysh: "hsl(180, 14%, 20%)",
      },
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
    },
    fontFamily: {
      sans: ["Spartan", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
