/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
     themes: [
    {
      mytheme: {
        primary: "#DB4444",
      },
    },
   ],  
  },

  theme: {
    container: {
      padding: "2rem",
      center: true,
    },

    extend: {
      fontFamily: {
       poppins: ["",""]
      }
    },
  },
  plugins: [require('daisyui'),],
}

