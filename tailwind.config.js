module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"], 
  
  theme: {
    extend: {
      animation:{
        beat: "beat 1s ease-out infinite",
      },
      keyframes:{
        beat:{
          '0%, 100%': {transform: 'scale(1)'},
          '25%': {transform: 'scale(1.2)'}
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
