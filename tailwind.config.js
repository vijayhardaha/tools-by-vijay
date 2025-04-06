/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all relevant file paths are included
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eeba2c",
        black: "#000000",
        dark1: "#161616",
        dark2: "#212121",
        dark3: "#262626",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
