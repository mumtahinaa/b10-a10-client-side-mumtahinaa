/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      backgroundImage:{
        'footer-img':"url('/assets/RectLight.svg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
  daisyui: {
    themes: [
      {
        light: {
          
        },
      },
      {
        dark: {
         
        },
      },
    ],
  },
}

