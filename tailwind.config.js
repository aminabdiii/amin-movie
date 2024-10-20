/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        500: '500px',
        xs: '450px',
        xxs: '400px',
        vxs: '350px',
        550: '550px',
      },
    },
  },
  plugins: [],
};
