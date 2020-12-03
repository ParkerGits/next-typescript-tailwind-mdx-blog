const {NONAME} = require('dns')

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      blue: {
        lord: '#53d5f8',
      },
      pink: {
        lord: '#DB2777',
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
              color: '#2e9bf0',
              '&:hover': {
                color: '#2273b3',
              },
            },
          },
        },
        '3xl': {
          css: {
            fontSize: '1.875rem',
            h1: {
              fontSize: '4rem',
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
