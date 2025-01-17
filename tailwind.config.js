/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        spin988: "spin988 3s linear infinite",
      },
      keyframes: {
        spin988: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "20%, 25%": { transform: "scale(1.3) rotate(90deg)" },
          "45%, 50%": { transform: "scale(1) rotate(180deg)" },
          "70%, 75%": { transform: "scale(1.3) rotate(270deg)" },
          "95%, 100%": { transform: "scale(1) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
