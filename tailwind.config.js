
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'drone-mountain': "url('/src/assets/DroneMountain.jpg')"
      },
      colors: {
        "cloudone-blue": "rgba(var(--cloudone-blue))",
        "cloudone-red" : "rgba(var(--cloudone-red))",
        "cloudone-gradient-one" : "rgba(var(--cloudone-gradient-one))",
        "cloudone-gradient-two" : "rgba(var(--cloudone-gradient-two))",
        "cloudone-gradient-three" : "rgba(var(--cloudone-gradient-three))",
        "cloudone-gradient-four" : "rgba(var(--cloudone-gradient-four))"
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
}

