/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./html/*.html"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
