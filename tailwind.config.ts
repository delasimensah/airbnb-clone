/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        grey: "#5E5D5E",
        dark: "#1A1A1A",
      },
      fontFamily: {
        "mont-r": ["Montserrat_400Regular"],
        "mont-sb": ["Montserrat_600SemiBold"],
        "mont-b": ["Montserrat_700Bold"],
      },
    },
  },
  plugins: [],
};
