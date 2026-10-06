/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        civic: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b4c8fb',
          400: '#8ba7f7',
          500: '#6382f2',
          600: '#4f46e5', // Primary Civic Indigo
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e1b4b', // Deep Navy
        },
        lavender: {
          50: '#faf9fd',
          100: '#f4f2fb',
          200: '#ece7f7',
          300: '#ddd4f0',
          400: '#c5b6e4',
          500: '#ab95d6',
          600: '#9275c5',
          700: '#7b5eb0',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'soft-lg': '0 10px 25px -3px rgba(79, 70, 229, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
