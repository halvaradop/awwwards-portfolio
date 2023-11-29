import plugin from 'tailwindcss/plugin'

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
        xs: '470px',
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
        },
        purple: {
          DEFAULT: '#831ED2'
        }
      },
      fontFamily: {
        vollkorn: "'Vollkorn', serif"
      },
      gridTemplateColumns: {
        sec: '1fr, 0.55fr'
      },
      backgroundImage: {
        aurora: 'linear-gradient(to right, #c084fc, #a855f7, #38bdf8, #d8b4fe)'
      }
    },
  },
  plugins: [
    plugin(({ matchVariant }) => {
      matchVariant('nth', value => {
        return `& :nth-child(${value})`
      }, {
        values: {
          '1': 1,
          '2': 2,
          '3': 3
        }
      })
    })
  ],
}

