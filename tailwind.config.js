module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          fontFamily: {
              sans: ['sans-serif', 'system-ui', 'sans-serif'],
              marquee: ['FontMarquee', 'sans-serif'], 
          },
          colors: {
              'game-primary': '#4f46e5',
              'game-secondary': '#7c3aed',
              'game-accent': '#db2777',
          },
          backgroundClip: {
              text: 'text',
          },
      },
  },
  plugins: [require('@tailwindcss/forms')],
}
