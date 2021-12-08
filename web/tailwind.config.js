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
        'light-blue-1': 'hsla(203, 74%, 63%, 1)',
        'purple-1': 'hsla(254, 74%, 91%, 1)',
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
        'light-blue-1': 'hsla(203, 74%, 63%, 1)',
        'purple-1': 'hsla(254, 74%, 91%, 1)',
      }),
      backgroundImage: {
        'button-subscribe': 'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)',
        'conic-gradient':
          'conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'sans-serif'],
      },
      width: {
        '3.25rem': '52px',
        '19.6875rem': '315px',
        '24.0625rem': '385px',
        26.75: '107px',
        38: '152px',
        88.5: '384px',
        98.75: '395px',
        121.25: '485px',
        126: '504px',
      },
      height: {
        '3.25rem': '52px',
        88.5: '384px',
      },
      fontSize: {
        '1.0625rem': '17px',
      },
      spacing: {
        14.75: '59px',
        17.75: '71px',
      },
      lineHeight: {
        13.5: '54px',
        16: '64px',
        '1.4375rem': '23px',
        '1.875rem': '30px',
        '5.5625rem': '89px',
      },
      borderRadius: {
        2.5: '10px',
        4.375: '17.5px',
        5: '20px',
        '0.3125rem': '5px',
        '2.25rem': '36px',
        32.25: '129px',
      },
      maxWidth: {
        156.25: '625px',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: 'hsla(215, 20%, 16%, 1)',
      }),
      boxShadow: {
        primary:
          '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)',
        secondary:
          '0px 1.8518518209457397px 3.1481480598449707px 0px hsla(0, 0%, 0%, 0),0px 8.148148536682129px 6.518518447875977px 0px hsla(0, 0%, 0%, 0.01),0px 20px 13px 0px hsla(0, 0%, 0%, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px hsla(0, 0%, 0%, 0.01),0px 64.81481170654297px 46.85185241699219px 0px hsla(0, 0%, 0%, 0.02),0px 100px 80px 0px hsla(0, 0%, 0%, 0.02)',
        logo: '0px 2px 10px 0px hsla(0, 0%, 0%, 0.1)',
      },
      zIndex: {
        '-1': '-1',
      },
      gridTemplateColumns: {
        'custom-3fr': 'repeat(3, 314px)',
        'footer-grid': '1fr .5fr .5fr .5fr 1fr',
      },
      blur: {
        37.5: '150px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
