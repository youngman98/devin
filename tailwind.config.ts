import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { },
    colors: {
      'theme': '#f2f2f2',
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
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
