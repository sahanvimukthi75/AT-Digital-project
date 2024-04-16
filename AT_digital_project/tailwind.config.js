/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F28D35", 
        backgroundColor: "#b7bca9",
        lightText: "#959595",
        boxcolor:"#47b9a9",
        navbarcolor:"#6B3CC9",
        question:"#FAF8FF",
      }
    }
  },
  plugins: [],
};
