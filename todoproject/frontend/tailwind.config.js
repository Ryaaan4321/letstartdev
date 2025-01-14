/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["San Francisco", "Helvetica Neue", "Lucida Grande", "sans-serif"],
      },
    },
  },
  plugins: [],
};
