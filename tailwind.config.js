module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"], 
  
  theme: {
    extend: {
      animation:{
        beat: "beat 1s ease-in-out infinite",
      },
      keyframes:{
        beat:{
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.5)'}
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
