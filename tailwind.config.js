const {NONAME} = require('dns')

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      blue: {
        lord: '#53d5f8',
      },
      pink: {
        lord: '#DB2777',
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
              color: '#6200ed',
              '&:hover': {
                color: '#3700b3',
              },
            },
          },
        },
        dark: {
          css: {
            color: 'white',
            a: {
              textDecoration: 'none',
              color: '#bb86fb',
              '&:hover': {
                color: '#985eff',
              },
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
