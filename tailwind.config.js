/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#F8F8F6',
        'cream': '#F5F5F0',
        'gold': '#E5B84C',
        'gold-light': '#F0D78C',
        'gold-dark': '#C9A03E',
        'black': '#0A0A0A',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      borderRadius: {
        '3xl': '28px',
        '2xl': '22px',
      },
      boxShadow: {
        card: "0 18px 40px rgba(0, 0, 0, 0.12)",
        gold: "0 18px 40px rgba(229, 184, 76, 0.25)",
      },
    },
  },
  plugins: [],
}