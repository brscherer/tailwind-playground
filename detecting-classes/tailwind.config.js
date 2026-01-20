/** @type {import('tailwindcss').Config} */
export default {
  // Content paths tell Tailwind where to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // These patterns demonstrate how content configuration works
    // Tailwind will scan these files and extract class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
