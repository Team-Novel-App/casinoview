module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
              'game-primary': '#4f46e5',
              'game-secondary': '#7c3aed',
              'game-accent': '#db2777',
              'random': '#DFD3C3',
              'custom1': '#928a80',
            },
            animation: {
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
          },
    },
    plugins: [require('@tailwindcss/forms')],
}
