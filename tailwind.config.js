/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const MyClass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden",
    }
   })
})

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors:{
        primary:"#1d1f23",
        secondary:"#252729",
        lightPurple: "#7a6be1",
        textPurple: "#6547bd",
        textPink: "#ad76b1",
      }
    },
  },
  plugins: [MyClass],
}
