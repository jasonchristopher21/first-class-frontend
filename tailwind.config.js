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
      "red": "#F36464",
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      tall: {'raw': '(min-height: 768px) and (min-width: 768px)'}
    }
  },
  plugins: [],
};
