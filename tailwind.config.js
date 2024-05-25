/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
        '1fr-2fr': '1fr 2fr',
      }
    },
    screens: {
      smallerPhone: "260px",
      // => @media (min-width: 260px) { ... }
      mediumPhone: "358px",
      // => @media (min-width: 358px) { ... }
      extPhone: "490px",
      //some component need multiple break point that's why this extphone
      // => @media (min-width: 358px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
      lagerThenLg: "1206px",
    },
  },
  plugins: [],
};
