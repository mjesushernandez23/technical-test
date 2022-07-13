/** @type {import('tailwindcss').Config} */
const { deepPurple } = require("@mui/material/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: deepPurple,
      white: "#fff",
      black: "#000",
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
