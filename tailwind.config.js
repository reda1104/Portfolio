/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        marc: ["var(--font-Marcellus)"],
        mark: ["var(--font-MarckScript)"],
        st: ["var(--font-Staatliches)"],
        mont: ["var(--font-Montserrat)"],
      },
      colors: {
        pinkSelection: ["rgb(206, 100, 134)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
    },
  },
  plugins: [],
};
