/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Build your palette here
      gray:  'rgba(0, 0, 0, .2)',
      lavender:   '#e6e6fa',
      white:      '#ffffff',
      black:      '#000000',
      blue:       '#0000ff',
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
        ['tomasa', 'serif'],
      ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    // ...
  ],
}