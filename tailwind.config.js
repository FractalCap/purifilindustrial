/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}", "!./node_modules/**"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#1F97D5',
        secondary: '#1F97D5',
        accent: '#1F97D5',
        light: '#FFFFFF',
        steel: '#4b5563', // Steel Gray approximation
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
