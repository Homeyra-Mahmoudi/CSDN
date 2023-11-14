/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'roboto': ['Roboto', 'sans-serif'],
        'apple-system': ['-apple-system', 'sans-serif'],
         'raleway': ['Raleway', 'sans'],
         'monteserat-alternates': ['Montserrat Alternates', 'sans-serif'],
      },
      fontWeight: {
        extrathin: '50',
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      backgroundImage: {
        'wave-line': "url('/home/https___lottiefiles.com_9414-wave-line.gif')"
      },
      colors: {
        'footer-blue-dark': '#051C38',
        'footer-black-darker': '#000000',
        'basic-light-blue': '#C4CAEC',
        'light-blue-row': '#E8EAF6',
        'Eventi-Passati-bg': '#C3C6E7'
      },
  },
  plugins: [],
}
}

