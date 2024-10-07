/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    height: {
      'screen-h': '100dvh',
      'screen-w': '100dvw',
    },
    fontFamily: {
      'primary': ['Montserrat', 'sans-serif'],
    },
    colors: {
      background: '#2b2726',
      orange: "#ff9012",
      brown: '#513b23',
      yellow: '#ffce00',
      green: '#6cc04a',
      button: '#90D26D',
      text: "rgba(255,255,255,.9)",
      sub: "#2C7865",
    },
    extend: {},
  },
  plugins: [],
}

