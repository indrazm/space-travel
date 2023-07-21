/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        moon: "url('/assets/img/moon.png')",
      },
    },
  },
  plugins: [],
};
