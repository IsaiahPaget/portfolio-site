/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      blue: "#00D0D0",
      purple: "#5400d1",
      pink: "#FC6060",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#404D56",
      gray: "#8492a6",
      "gray-light": "#BEB2A9",
      primary: "#237ADE",
      secondary: "#FFA50B",
      tertiary: "#333a46",
      info: "#1F51D1",
      alert: "#EC7200",
      white: "#ffffff",
      whitesmoke: "#efefef",
      "light-black": "#22272f",
      "dark-green": "#2EA37A",
      babyblue: "#8fc0de"
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

