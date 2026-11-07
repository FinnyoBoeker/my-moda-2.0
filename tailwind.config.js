/** Nur für den optionalen Produktiv-Build (siehe README). */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        nude: { 100: '#F1E6DC', 200: '#E6D3C3', 300: '#D4B8A2', 400: '#B9937A' },
        ink: { 900: '#232323', 800: '#2F2F2F', 600: '#555250' },
        paper: '#FAF8F5'
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
