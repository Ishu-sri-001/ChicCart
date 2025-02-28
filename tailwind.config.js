/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}