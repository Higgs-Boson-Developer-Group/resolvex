/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#172554",
        secondary: "#E74C3C",
        success: "#2ECC71",
        warning: "#F1C40F",
        danger: "red",
        info: "#34495E",
        light: "#f2f2f2",
        dark: "#2C3E50",
      },
    },
  },
  plugins: [],
};
