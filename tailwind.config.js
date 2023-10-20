/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      screens: {
        xs: '480px',
      },
      colors: {
        primary: '#3b82f6', // blue-500
        // primary: '#2563eb', // blue-600
        // 'primary-light': '#', // blue-
        secondaryDark: '#06b6d4', // cyan-500
        secondary: '#0ea5e9', // sky-500
        // 'secondaryDark-light': '#', // cyan-
        ternary: '#f59e0b', // amber-500
        'ternary-light': '#fbbf24', // amber-400
        'cf-dark': '#0f172a', // slate-900
        'cf-white': '#f4f4f5', // zinc-100
        'cf-gray-light': '#e5e7eb', // gray-200
        'cf-gray': '#d1d5db', // gray-300
        'cf-gray-dark': '#9ca3af', // gray-400
      },
    },
  },
  plugins: [],
}
