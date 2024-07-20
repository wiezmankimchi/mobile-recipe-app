/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        text: "var(--text)",
        border: "var(--border)",
        notification: "var(--notification)",
        destructive: "var(--destructive)",
      },
      // colors: {
      //   primary: "rgb(var(--primary) / <alpha-value>)",
      //   background: "rgb(var(--background) / <alpha-value>)",
      //   border: "rgb(var(--border) / <alpha-value>)",
      //   notification: "rgb(var(--notification) / <alpha-value>)",
      //   text: "rgb(var(--text) / <alpha-value>)",
      // },
    },
  },
  plugins: [],
};
