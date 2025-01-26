module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
              'from-game-primary': '#4f46e5',
              'via-game-secondary': '#7c3aed',
              'to-game-accent': '#db2777',
            },
            animation: {
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
          },
    },
    plugins: [require('@tailwindcss/forms')],
}
