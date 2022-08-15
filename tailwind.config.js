module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      384: '384px',
      576: '576px',
      768: '768px',
      960: '960px',
      1200: '1200px',
      1440: '1440px',
      1680: '1680px',
      1920: '1920px',
    },
    extend: {
      colors: {
        'black-48': 'rgba(0, 0, 0, 0.48)',
      },
      maxWidth: {
        'container-sm': '720px',
        'container-md': '960px',
        'container-lg': '1200px',
        'container-full': '1400px',
      },
    },
  },
  plugins: [],
}
