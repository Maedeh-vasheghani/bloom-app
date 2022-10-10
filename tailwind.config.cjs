/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      boxShadow: {
        el1: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        cardcontainer: " 0px 4px 30px 0px rgba(0 ,0 , 0 , 0.11)", 
      },
    
    },
    colors: {
      //background
      greenblue:'#2EC1AC',
      white:'#FFFFFF',
      gris :'#D9D9D9',
      green : "#12564B",
      black : "#000000"
      
    },
    fontFamily: {
      body: ["Filson Pro", "sans-serif"],
      Filson: ["Filson Pro"],
    },
  },
  plugins: [],
};
