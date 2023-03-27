/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'rgb(225, 225, 230)',
          200: 'rgb(196, 196, 204)',
          400: 'rgb(124, 124, 138)',
          800: 'rgb(32, 32, 36)',
          900: 'rgb(18, 18, 20)',
        },
        cyan: {
          500: 'rgb(129, 216, 247)',
        },
      },
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      screens: {
        xs: { max: '340px' },
      },
    },
  },
  plugins: [],
}
