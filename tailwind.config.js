/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        base: '900px'
      },
      colors: {
        black: {
          DEFAULT: '#232323',
          100: '#111111'
        },
        gray: {
          DEFAULT: '#383838',
          100: '#FFFFFF'
        }
      },
      fontFamily: {
        vollkorn: "'Vollkorn', serif"
      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
}

