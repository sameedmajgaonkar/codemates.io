/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#2D3142",
      primary_dark: "#1f222d",
      secondary: "#4F5D75",
      orange: "#EF8354",
      white: "#FFFFFF",
      grey: "#BFC0C0",
      red: "#D24545",
      green: "#5BBA6F",
      blue: "#1DA1F2",
      black: "#000",
      yellow: "#FFB703",
      orange_bright: "#FB8500",
      transparent: "#00000000",
    },
  },
  plugins: [],
};
