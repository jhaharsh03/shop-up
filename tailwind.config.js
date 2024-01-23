/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        BrandWhite: "#eeeeee",
      }, 
      container: {
        center:true, 
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
        }
      }
    },
  },
  plugins: [],
}

