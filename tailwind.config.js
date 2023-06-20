/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "black": "#1F201E",
      "dark-grey": "#888888",
      "light-grey": "#EFEFEF",
      "white": "#FFFFFF",
      "orange": "#FFAE00",
      "yellow": "#FFE900",
      "yellow-accent": "#FFFBCC",
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
};
