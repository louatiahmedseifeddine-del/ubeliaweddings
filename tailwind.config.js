/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50:  '#fff5f7',
          100: '#ffe4ea',
          200: '#ffc2cf',
          300: '#ff94aa',
          400: '#ff5c7d',
          500: '#f03058',
          600: '#d01245',
          700: '#a80e39',
          800: '#880f32',
          900: '#72102e',
        },
        gold: {
          50:  '#fefbe8',
          100: '#fef5c3',
          200: '#fee98a',
          300: '#fdd347',
          400: '#fbbf16',
          500: '#d99a04',
          600: '#b07602',
          700: '#8a5505',
          800: '#71430c',
          900: '#5f3810',
        },
        ivory: '#faf8f5',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
