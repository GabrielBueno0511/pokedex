/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"'],
      },
      colors: {
        green: {
          dark: "#446051",
          light: "#2FD67B",
        },
        white: {
          light: "#e3e3e3",
        },
        yellow: {
          light: "#fafcd3",
        },
        gray: {
          light: "#f1f5f9",
          dark: "#aaafa9",
          medium: "#D4D4D4",
        },
        orange: {
          light: "#FF8A1E"
        }
      },
    },
  },
  plugins: [],
};