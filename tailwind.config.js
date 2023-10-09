/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#16599B'
        },
        secondary: {
          100: '#1A935F'
        },
        dark: {
          100: '#202024',
          200: '#121214'
        }
      }
    }
  },
  plugins: []
}
