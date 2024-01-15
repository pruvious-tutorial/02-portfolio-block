import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['blocks/**/*.vue'],
  theme: {
    extend: {
      colors: {
        heading: '#010203',
        copy: '#234345',
        accent: '#268baa',
        border: '#e2e4e8',
        dim: '#59797b',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1rem' }],
      },
      screens: {
        lp: { max: '1440px' },
        tl: { max: '1199px' },
        tp: { max: '1023px' },
        ph: { max: '767px' },
      },
      spacing: {
        23: '5.75rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('group-hocus', ['.group:hover &', '.group:focus &'])
    }),
  ],
}
