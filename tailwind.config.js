/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js, tsx}", "./node_modules/preline/dits/*.js"],
  theme: {
    extend: {},
  },

  plugins: [require("preline/plugin")],
};
