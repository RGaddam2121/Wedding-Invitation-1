/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#781F35',
          dark: '#521629',
          light: '#8E2841',
        },
        burgundy: '#521629',
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E5C88A',
          dark: '#9E7E38',
          metallic: '#D4AF37',
        },
        ivory: {
          DEFAULT: '#FFF8E9',
          light: '#FFFDF7',
          dark: '#F8EEDC',
        },
        cream: '#F8EEDC',
        rose: {
          muted: '#D9A6A6',
          soft: '#E8C5C5',
        },
        leaf: '#647A54',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Tiro Telugu"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A15B 0%, #F5DEB3 50%, #C6A15B 100%)',
        'royal-gradient': 'linear-gradient(180deg, #521629 0%, #781F35 50%, #521629 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(198, 161, 91, 0.25)',
        'gold-lg': '0 10px 30px -3px rgba(198, 161, 91, 0.4)',
        'maroon': '0 8px 32px 0 rgba(82, 22, 41, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
