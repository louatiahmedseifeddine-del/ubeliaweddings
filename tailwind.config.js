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
        ivory:     '#FBFAF6',
        cream:     '#F4F0E8',
        blush:     { DEFAULT: '#EDD5C5', deep: '#C4866A' },
        sage:      { DEFAULT: '#B0BAA8', deep: '#687060' },
        gold:      { DEFAULT: '#B59354', light: '#EAD9B2' },
        mocha:     '#4A3828',
        charcoal:  '#252018',
        dark:      '#1A1710',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:      ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1280px',
      },
      letterSpacing: {
        'brand-xs': '0.22em',
        'brand-sm': '0.35em',
        'brand':    '0.42em',
        'brand-lg': '0.45em',
        'brand-xl': '0.55em',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        badgePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.02)' },
        },
        draw: {
          from: { strokeDashoffset: '283' },
          to:   { strokeDashoffset: '0' },
        },
      },
      animation: {
        marquee:     'marquee 32s linear infinite',
        fadeUp:      'fadeUp 0.5s ease forwards',
        badgePulse:  'badgePulse 2s ease-in-out infinite',
        draw:        'draw 1s ease forwards',
      },
    },
  },
  plugins: [],
};
