/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
        lustria: ['"Lustria"', "serif"],
      },
      colors: {
        background: "#FFFDF7",
        primary: "#D8B259",
        "primary-light": "rgba(216, 178, 89, 0.48)",
        secondary: "rgba(168, 187, 162)",
        "secondary-light": "rgba(168, 187, 162, 0.48)",
        tertiary: "#D69F7E",
        text: "#37383C",
        "text-sub": "#555555",
        border: "#BFC0C0",
      },
    },
  },
  plugins: [],
};
