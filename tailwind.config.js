const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
      },
      fontFamily: {
        poppins: ['"Poppins"'],
      },
      backgroundImage: {
        "main-bg-image": "url('./src/assets/appCover.png')",
      },
      colors: {
        secondary: "#f1f6ff",
      },
    },
  },
  plugins: [],
};
