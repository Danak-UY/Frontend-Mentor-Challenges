"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "hsl(180, 29%, 50%)",
      cyan: {
        lightGraysh: "hsl(180, 52%, 96%)",
        veryLightGraysh: "hsl(180, 31%, 95%)",
        darkGraysh: "hsl(180, 8%, 52%)",
        veryDarkGraysh: "hsl(180, 14%, 20%)"
      },
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)"
    },
    fontFamily: {
      sans: ["Spartan"].concat(_toConsumableArray(defaultTheme.fontFamily.sans))
    },
    extend: {}
  },
  variants: {},
  plugins: []
};