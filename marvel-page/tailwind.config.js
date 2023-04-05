/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#393939",
        "light-black": "#202020",
        "dark-black": "#151515",
      },
    },
    letterSpacing: {
      "1px": "1px",
    },
  },
  plugins: [],
};
