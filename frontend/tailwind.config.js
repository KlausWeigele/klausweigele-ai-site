/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"],
        wide: ["var(--font-wide)", "var(--font-sans)"]
      },
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          light: "#1C6BAE"
        },
        accent: "#F97316",
        surface: "#0E1C30"
      },
      boxShadow: {
        card: "0 30px 60px -25px rgba(15, 76, 129, 0.45)",
        glow: "0 0 80px rgba(15, 76, 129, 0.45)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
