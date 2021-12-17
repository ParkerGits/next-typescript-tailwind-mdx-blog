const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    colors: {
      blue: {
        lord: '#53d5f8',
        hover: '#389bb5',
      },
      darkblue: {
        lord: '#0a2d61',
        hover: '#061b3b',
      },
      pink: {
        lord: '#C8549C',
        hover: '#ab4685',
      },
      yellow: {
        lord: '#fbb04d',
        hover: '#c2873a',
      },
      orange: {
        lord: '#d4620d',
        hover: '#9e4a0b',
      },
      gray: {
        50: '#f8fafc',
        300: '#d1d5db',
        500: '#6b7280',
        700: '#1e293b',
        800: '#121212',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              color: '#C8549C',
              '&:hover': {
                color: '#ab4685',
              },
            },
            code: {
              backgroundColor: 'rgba(17,24,39,1)',
              color: 'white',
              paddingLeft: '5px',
              paddingRight: '5px',
            },
            'code::before': false,
            'code::after': false,
          },
        },
        dark: {
          css: {
            color: 'white',
            a: {
              textDecoration: 'none',
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            code: {
              backgroundColor: 'black',
            },
            pre: {
              backgroundColor: 'black',
            },
            th: {
              color: 'white',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
