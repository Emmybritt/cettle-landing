/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxs": "280px"
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
        RedHatText: ['Red Hat Text', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
