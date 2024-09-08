/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
plugins: [
  require('@tailwindcss/forms'),  // Example plugin for styling forms
  require('@tailwindcss/typography'),  // Example plugin for advanced typography
]

};
