/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        'translate-down': {
          from: { top: '-20px', opacity: 0 },
          to: { top: '35px', opacity: 1 },
        },
        'opacity-visible': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'translate-down': 'translate-down 250ms ease-out',
        'opacity-visible': 'opacity-visible 0.9s ease-out',
      },
    },
  },
  plugins: [],
};
