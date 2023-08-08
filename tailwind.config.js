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
        'md': '700px',
        'mt': '800',
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
        'fxc': '0px 3px 10px 2px rgba(79,70,229,0.60)'
      },
      dropShadow:{
        'fxc': '0px 3px 10px 2px rgba(79,70,229,0.60)',
      },
      colors: {
        insta: {
          '0': 'rgba(254,207,89,1)',
          '40': 'rgba(255,84,40,1)',
          '80': 'rgba(189,43,188,1)',
          '100': 'rgba(1,67,224,1)',
        },
      },
      keyframes: {
        beat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },

        }

      }, animation: {
        beat: 'beat 3s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}

