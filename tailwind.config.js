/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      gray:  'rgba(0, 0, 0, .2)',
      lavender:   '#0f172a',
      white:      '#ffffff',
      black:      '#000000',
      blue:       '#0000ff',
      'dark-blue': {
        '50': '#f1f3ff',
        '100': '#e5e7ff',
        '200': '#ced1ff',
        '300': '#a7a9ff',
        '400': '#7875ff',
        '500': '#4c3eff',
        '600': '#3617ff',
        '700': '#2506fb',
        '800': '#1e04d2',
        '900': '#1b06ac',
        '950': '#0a0076',
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    fontFamily: {
      // Add fonts here
      serif: [
        ['cm', 'sans-serif'],
      ],
      display: [
        ['Tomasa', 'serif'], {
          fontFeatureSettings: '"ss01"',
        },
      ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    // ...
  ],
}