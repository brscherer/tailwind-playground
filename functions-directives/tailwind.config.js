/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'var(--color-brand-light)',
          DEFAULT: 'var(--color-brand)',
          dark: 'var(--color-brand-dark)',
        }
      },
      spacing: {
        'dynamic': 'var(--spacing-dynamic)',
      },
      fontSize: {
        'responsive': 'clamp(1rem, 2.5vw, 2.5rem)',
      }
    },
  },
  plugins: [],
}
