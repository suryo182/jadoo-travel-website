module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'blue-1': 'hsla(233, 16%, 44%, 1)',
        'blue-2': 'hsla(215, 20%, 16%, 1)',
        'blue-3': 'hsla(233, 52%, 19%, 1)',
        'blue-4': 'hsla(241, 45%, 21%, 1)',
        'blue-5': 'hsla(234, 51%, 16%, 1)',
        'black-1': 'hsla(202, 0%, 3%, 1)',
        'yellow-1': 'hsla(41, 99%, 47%, 1)',
        'red-1': 'hsla(10, 69%, 60%, 1)',
        'gray-1': 'hsla(220, 7%, 44%, 1)',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        'blue-1': 'hsla(233, 16%, 44%, 1)',
        'blue-2': 'hsla(215, 20%, 16%, 1)',
        'blue-3': 'hsla(233, 52%, 19%, 1)',
        'blue-4': 'hsla(241, 45%, 21%, 1)',
        'blue-5': 'hsla(234, 51%, 16%, 1)',
        'black-1': 'hsla(202, 0%, 3%, 1)',
        'yellow-1': 'hsla(41, 99%, 47%, 1)',
        'red-1': 'hsla(10, 69%, 60%, 1)',
        'gray-1': 'hsla(220, 7%, 44%, 1)',
      }),
      backgroundImage: {
        'button-subscribe': 'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'sans-serif'],
      },
      width: {
        '3.25rem': '52px',
        '24.0625rem': '385px',
      },
      height: {
        '3.25rem': '52px',
      },
      fontSize: {
        '1.0625rem': '17px',
      },
      lineHeight: {
        '1.4375rem': '23px',
        '1.875rem': '30px',
        '5.5625rem': '89px',
      },
      borderRadius: {
        '0.3125rem': '5px',
        '2.25rem': '36px',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: 'hsla(215, 20%, 16%, 1)',
      }),
      boxShadow: {
        primary:
          '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
      },
      zIndex: {
        '-1': '-1',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
