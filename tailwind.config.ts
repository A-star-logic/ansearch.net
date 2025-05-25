/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          '50': '#fef6ee',
          '100': '#fdecd7',
          '200': '#fad4ae',
          '300': '#f6b67b',
          '400': '#f39c5e',
          '500': '#ed6e22',
          '600': '#df5517',
          '700': '#b93f15',
          '800': '#933319',
          '900': '#772d17',
          '950': '#40140a',
        },
      },
    },
  },
};
