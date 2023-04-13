const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
