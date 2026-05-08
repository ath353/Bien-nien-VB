/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        parchment: "#f5f0e8",
        ink: "#1a1410",
        sepia: "#8b6914",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e8e0d0",
            a: { color: "#c9a84c" },
            h1: { color: "#f5f0e8", fontFamily: "Playfair Display, serif" },
            h2: { color: "#f5f0e8", fontFamily: "Playfair Display, serif" },
            h3: { color: "#f5f0e8", fontFamily: "Playfair Display, serif" },
            strong: { color: "#f5f0e8" },
            blockquote: { color: "#c9a84c", borderLeftColor: "#c9a84c" },
          },
        },
      },
    },
  },
  plugins: [],
};
