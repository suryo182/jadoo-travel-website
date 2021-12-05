module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: 'hsla(215, 20%, 16%, 1)',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: 'hsla(215, 20%, 16%, 1)',
      }),
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'sans-serif'],
      },
      fontSize: {
        '4.25rem': '17px',
      },
      lineHeight: {
        '5.75rem': '23px',
      },
      borderRadius: {
        '1.25rem': '5px',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: 'hsla(215, 20%, 16%, 1)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
