/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [
    ({addUtilities}) => {
      addUtilities({
        ".padding": {
          "@apply sm:px-16 px-8 sm:py-24 py-12" : {}
        },
      
        ".padding-x": {
          "@apply sm:px-16 px-8" : {}
        },
      
        ".padding-y": {
          "@apply sm:py-24 py-12" : {}
        },
      
        ".padding-l": {
          "@apply sm:pl-16 pl-8" : {}
        },
      
        ".padding-r": {
          "@apply sm:pr-16 pr-8" : {}
        },
      
        ".padding-t": {
          "@apply sm:pt-24 pt-12" : {}
        },
      
        ".padding-b": {
          "@apply sm:pb-24 pb-12" : {}
        },
      
        ".info-text": {
          "@apply font-montserrat text-slate-gray text-lg leading-7" : {}
        },
      });
    }
  ]
}