/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      emerald: "#34D399",
      "light-blue": "#38BDF8",
      yellow: "#F59E0B",
      rose: "#F43F5E",
      white: "#FFFFFF",
      gray: {
        900: "#111827",
        800: "#8D8D99",
        700: "#C4C4CC",
        600: "#E1E1E6",
      },
    },
    extend: {},
  },
  plugins: [],
};
