/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily :{ 
          proxima: ["proxima","sans-serif"], 
          outfit: ["outfit","sans"], 
        } 
      }
    },
    plugins: [],
  }
  