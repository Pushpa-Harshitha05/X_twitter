/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*.js"],
  theme: {
    extend: {
      fontSize: {
        "2xl": "1.33rem",
      },
      screens: {
        "3xl": "1160px",
        "4xl": "500px",
        "5xl": "350px",
      },
    },
    screens: {
      sm: "740px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
