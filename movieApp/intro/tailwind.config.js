/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010025",
        secondary: "#FE9D00",
        black: "#000000",
        white: "#ffffff",
        grey: "#c6c6c6",
      },
    },
  },
  plugins: [],
};