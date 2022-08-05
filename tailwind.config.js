/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: '#0d5cb6',
        light_blue: '#1a94ff',
        light_gray: '#efefef'
      },
    },
  },
  plugins: [],
}
