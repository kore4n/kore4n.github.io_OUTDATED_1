/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#181E26',
        'main-blue': "#95d3ff",
        'main-cyan': "#22d3ee",
      },
      // boxShadow: {
      //   'glow-blue': '0 0 50px 10px rgba(0, 100, 100, 1)',
      //   'glow-blue-inwards': 'inset 0 0 50px 10px rgba(0, 100, 100, 1)',
      // },
    },
    // fontFamily: {
    //   'cubano': ''
    // }
  },
  plugins: [],
}

// old main background #1f1f1f