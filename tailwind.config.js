/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLightGrey: "#EFEFEF",
        primaryWhite: "#FFFFFF",
        primaryYellow: "#FFE900",
        orange: "#FFAE00",
        yellowAccent: "#FFFBCC",
        darkGrey: "#888888",
        black: "#1F201E"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      tall: {'raw': '(min-height: 768px) and (min-width: 768px)'}
    },
  },
  plugins: [],
}

