/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], 
      },
    },
    colors: {
      'primary-color':' #FCA311',
      'secondary-color': '#14213D', 
    
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) 

      'md': '768px',
      // => @media (min-width: 768px) 

      'lg': '1024px',
      // => @media (min-width: 1024px) 
    }
  },
  plugins: [],
};
