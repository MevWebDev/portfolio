/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add the font families here
      fontFamily: {
        fira: ["var(--font-fira-sans)"],
        playfair: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
