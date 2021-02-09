const {NONAME} = require('dns')

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      blue: {
        lord: '#53d5f8',
        hover: '#389bb5',
      },
      pink: {
        lord: '#C8549C',
        hover: '#ab4685',
      },
      yellow: {
        lord: '#fbb04d',
        hover: '#c2873a',
      },
      gray: {
        300: '#d1d5db',
        500: '#6b7280',
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
            pre: {
              '&:hover': {
                '& code': {
                  color: '#DB2777',
                },
              },
            },
            code: {
              backgroundColor: 'rgba(17,24,39,1)',
              color: 'white',
              paddingLeft: '5px',
              paddingRight: '5px',
              '&:hover': {
                color: '#DB2777',
              },
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
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark', 'responsive'],
  },
  plugins: [require('@tailwindcss/typography')],
}
