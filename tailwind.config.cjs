/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-daterange/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
 
};
