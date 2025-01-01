/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        "text-28" : "28px",
        "text-40" : "40px"
      },
      colors:{
        "primary-b" : "#212529",
        "secondary-b" : "#212529BF",
        "tertiary" : "#f8f9fa"
      },
      screens:{
        "xs" : "425px"
      }
    },
  },
  plugins: [],
}

