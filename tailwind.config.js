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
      screens:{
        "mf":"1000px",
      },
      colors:{
        primary:"#1d1f23",
        secondary:"#252729",
        lightPurple: "#7a6be1",
        textPurple: "#6547bd",
        textPink: "#ad76b1",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [MyClass],
}
