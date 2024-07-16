/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      md: '1.25rem',
      base: '1.5rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '4.5rem',
      '6xl': '5.625rem',
    },
    extend: {
      colors: {
        'do-teal-100': '#177E89',
        'do-teal-200': '#0C7898',
        'do-teal-300': '#084C61',
        'do-orange': '#DB3A34',
        'do-yellow': '#ffc857',
        'do-gray': '#323031'
      }
    }
  }
}
