module.exports = {
  mode: 'jit', // Aktifkan JIT mode
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#0F172A', //item
      surface: '#1E293B', //item abu
      primary: '#1d4ed8', //biru -  button, logo
      secondary: '#b91c1c', //merah
      white: '#fff',
      grey: '#e2e8f0',
      gold: '#F3B742',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@themesberg/flowbite/plugin')],
};
