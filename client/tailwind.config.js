/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "white",
        additional: "rgb(118, 227, 131)",
        accent: "rgb(73, 140,81)",
      },
      fontFamily: {
        sans: ["Comic Sans MS", "Comic Sans", "cursive"],
      }
    },
  },
  plugins: [],
}
