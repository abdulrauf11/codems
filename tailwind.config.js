module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#F2F1F1',
      black: '#000000',
      green: '#68F42A',
      red: '#F42A2A',
      yellow: '#FCE84D',
      slate: '#334155',
    },
    extend: {
      fontFamily: {
        sans: ['RedHatMono', 'sans-serif'],
        text: ['RedHatMono', 'sans-serif'],
        heading: ['Trap', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
