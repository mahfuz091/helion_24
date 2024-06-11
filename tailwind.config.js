/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-color': '#09090B',
        'text-color': '#646464',
        'primary-color': '#38B6FF',
      },
      fontFamily: {
        NeueMachina: ['Neue Machina'],
      },
    },
  },
  plugins: [],
};
