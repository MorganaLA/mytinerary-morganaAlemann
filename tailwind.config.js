/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    extend: {
      fontFamily: {
        custom: ['Nunito', 'sans-serif'],
      },
      screens: {
        'sm': '400px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
      ss: '0.5rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    boxShadow: {
      'fxs': '0px 7px 5px 5px rgba(79,70,229,0.55)',
    }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}

