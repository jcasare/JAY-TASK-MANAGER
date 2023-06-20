/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blueish-gray': ' #394867',
        'dark-blue': '#212A3E',
        'faded-white': 'F1F6F9',
      },
      padding: {
        '5px': '5px',
      },
    },
  },
  plugins: [],
}
