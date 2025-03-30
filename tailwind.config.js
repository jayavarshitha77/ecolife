/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'falling-leaf': {
          '0%': {
            transform: 'translateY(-10vh) rotate(0deg) translateX(0)',
            opacity: '0.8'
          },
          '25%': {
            transform: 'translateY(25vh) rotate(90deg) translateX(50px)',
          },
          '50%': {
            transform: 'translateY(50vh) rotate(180deg) translateX(-50px)',
          },
          '75%': {
            transform: 'translateY(75vh) rotate(270deg) translateX(50px)',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg) translateX(0)',
            opacity: '0'
          }
        }
      },
      animation: {
        'falling-leaf': 'falling-leaf 15s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};