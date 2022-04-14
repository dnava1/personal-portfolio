


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"], 
  
  theme: {
    extend: {
      animation:{
        beat: "beat 1s ease-out infinite",
        bounceintro: "beat 3s"
      },
      keyframes:{
        beat:{
          '0%, 100%': {transform: 'scale(1)'},
          '25%': {transform: 'scale(1.2)'}
        }
      },
      colors:{
        'viceblue': '#0BD3D3',
        'vicepink': '#F890E7',
      },
     
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
