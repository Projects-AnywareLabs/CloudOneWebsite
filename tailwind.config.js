/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "drone-mountain": "url('/src/assets/DroneMountain.jpg')",
      },
      colors: {
        "cloudone-blue": "rgba(var(--cloudone-blue))",
        "cloudone-red": "rgba(var(--cloudone-red))",
        "cloudone-gradient-one": "rgba(var(--cloudone-gradient-one))",
        "cloudone-gradient-two": "rgba(var(--cloudone-gradient-two))",
        "cloudone-gradient-three": "rgba(var(--cloudone-gradient-three))",
        "cloudone-gradient-four": "rgba(var(--cloudone-gradient-four))",
      },
      boxShadow: {
        productOverViewCard: "0px 20px 35px 0px #92C83E40",
        combined: `
        0px 1.35px 1.35px 0px #0000001F,
        0px 2.7px 2.7px 0px #0000000A,
        0px 5.4px 5.4px 0px #0000000A,
        inset 0px 2.7px 6.75px 1.35px #FFFFFF
      `,
      },
      screens: {
        "xl2": "1400px",
        "3xl": "1800px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        plusJakartaSans: ["Open Sans", "sans-serif"],
      }
      // keyframes:{
      //   "move-left": {
      //     "0%, 100%": { translate-X : }
      //   }
      // },
      // animation:{
      //   "move-left" : "move-left 1s linear infinite"
      // }
    },
  },
  plugins: [],
};
