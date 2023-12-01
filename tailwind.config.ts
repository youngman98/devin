/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      typography: ({ theme: any }) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            'code::before': false,
            'code::after': false,
            code: {
              color: '#16a34a',
              backgroundColor: '#f2f2f2',
              padding: '0.2em 0.4em',
              borderRadius: '5px',
              fontWeight: 500,
              fontSize: '90%',
            },
          },
        },
      }),
      listStyleImage: {
        checkmark: 'url("/images/icon/check.png")'
      }
    },
    fontFamily: {
      Pretendard: ["Pretendard-Regular"],
      Orbit: ["Orbit-Regular"]
    },
    colors: {
      'theme': '#ffffff',
      'contrast': '#1f2e3d',
    
      'background1': '#8F979E',
      'background2': '#BCC0C5',
      'background3': '#E4E6E8',
      'background4': '#f9f9f9',
    
      'border1': '#eaeaed',
      'border2': '#dee2e6',
      'border3': '#b5b5b5',
      'border4': '#343a40',
    
      'text1': '#626D77',
      'text2': '#414D5A',
      'text3': '#1B2937',
      'text4': '#121D27',
      'text5': '#111827',
      
      'green1': '#f0fdf4',
      'green2': '#dcfce7',
      'green3': '#bbf7d0',
      'green4': '#86efac',
      'green5': '#4ade80',
      'green6': '#22c55e',
      'green7': '#16a34a',
      'green8': '#15803d',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


