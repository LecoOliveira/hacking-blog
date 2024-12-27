/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
// import withMT from '@material-tailwind/react/utils/withMT';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif',
    },
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.75s ease-in-out',
        slideUp: 'slideUp 0.75s ease-out',
        slideLeft: 'slideLeft 0.75s ease-out',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} as Config;
