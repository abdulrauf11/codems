module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   white: '#F2F1F1',
    //   black: '#1E1E1E',
    //   green: '#55FE7D',
    // },
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
