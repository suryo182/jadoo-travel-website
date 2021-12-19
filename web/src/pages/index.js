import * as React from 'react';
import imageTraveller from '../images/traveller-1.png';
import splashImg from '../images/decore-h1.png';
import category1 from '../images/category-1.png';
import category2 from '../images/category-2.png';
import category3 from '../images/category-3.png';
import category4 from '../images/category-4.png';

import destination1 from '../images/destination-1.png';
import destination2 from '../images/destination-2.png';
import destination3 from '../images/destination-3.png';
import bookTripImg from '../images/book-trip.png';

import client1 from '../images/client-1.png';
import client2 from '../images/client-2.png';
import client3 from '../images/client-3.png';
import client4 from '../images/client-4.png';
import client5 from '../images/client-5.png';

import subLogo from '../images/subscribe-message.png';
import footerLogo from '../images/jadoo-footer-logo.png';

import appleLogo from '../images/apple-logo.png';
import googleLogo from '../images/google-play-logo.png';

import fbLogo from '../images/facebook-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import igLogo from '../images/ig-logo.png';
import hamburgerLogo from '../images/iPhone 11 Pro/Icon.png';
import useToggleMenu from '../../helpers/hooks/useToggleMenu';
import useChangeBgHeader from '../../helpers/hooks/useChangeBgHeader';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const IndexPage = () => {
  useToggleMenu();
  useChangeBgHeader();

  SwiperCore.use([Navigation]);

  return (
    <div id="homepage">
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-100 transition-all duration-300"
      >
        <nav className="nav px-4 max-w-screen-sm sm:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between h-14">
          <a className="w-20">
            <svg
              viewBox="0 0 116 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M74.9999 29L84.4999 32L92.4999 24L102.5 31L113 29L108.5 14.5L92.4999 19.5L83.4999 14.5L73.9999 16L74.9999 29Z"
                fill="#F1A501"
              />
              <path
                d="M0.919922 24.064V21.902L7.03792 20.798V23.788C7.06859 25.4133 7.48259 26.64 8.27992 27.468C9.10792 28.2653 10.1966 28.664 11.5459 28.664C12.8646 28.664 13.9073 28.2347 14.6739 27.376C15.4713 26.5173 15.8699 25.3673 15.8699 23.926V1.38598H22.2179V23.926C22.2179 26.9313 21.2213 29.4767 19.2279 31.562C17.2346 33.6473 14.6893 34.69 11.5919 34.69C8.37192 34.69 5.78059 33.724 3.81792 31.792C1.88592 29.8293 0.919922 27.2533 0.919922 24.064Z"
                fill="black"
              />
              <path
                d="M23.6766 27.836C23.6766 25.904 24.3053 24.3553 25.5626 23.19C26.82 22.0247 28.4453 21.2887 30.4386 20.982L36.0046 20.154C37.1393 20.0007 37.7066 19.464 37.7066 18.544C37.7066 17.6853 37.3693 16.98 36.6946 16.428C36.0506 15.876 35.1153 15.6 33.8886 15.6C32.6006 15.6 31.5733 15.9527 30.8066 16.658C30.0706 17.3633 29.6566 18.2373 29.5646 19.28L24.1366 18.13C24.3513 16.1673 25.3173 14.4347 27.0346 12.932C28.752 11.4293 31.0213 10.678 33.8426 10.678C37.216 10.678 39.7 11.4907 41.2946 13.116C42.8893 14.7107 43.6866 16.7653 43.6866 19.28V30.412C43.6866 31.7613 43.7786 32.9573 43.9626 34H38.3506C38.1973 33.3253 38.1206 32.4207 38.1206 31.286C36.6793 33.5247 34.456 34.644 31.4506 34.644C29.12 34.644 27.234 33.9693 25.7926 32.62C24.382 31.2707 23.6766 29.676 23.6766 27.836ZM32.7386 30.09C34.18 30.09 35.3606 29.6913 36.2806 28.894C37.2313 28.066 37.7066 26.7167 37.7066 24.846V23.834L32.6006 24.616C30.73 24.892 29.7946 25.8427 29.7946 27.468C29.7946 28.204 30.0553 28.8327 30.5766 29.354C31.098 29.8447 31.8186 30.09 32.7386 30.09Z"
                fill="black"
              />
              <path
                d="M67.6577 0.695984V29.906C67.6577 31.4087 67.719 32.7733 67.8417 34H61.9997C61.8463 33.2333 61.7697 32.3593 61.7697 31.378C61.2483 32.3287 60.4203 33.0953 59.2857 33.678C58.1817 34.2607 56.8937 34.552 55.4217 34.552C52.2017 34.552 49.549 33.4327 47.4637 31.194C45.409 28.9247 44.3817 26.0727 44.3817 22.638C44.3817 19.2953 45.3937 16.4893 47.4177 14.22C49.4723 11.9507 52.079 10.816 55.2377 10.816C58.4883 10.816 60.6197 11.7513 61.6317 13.622V0.695984H67.6577ZM50.5457 22.638C50.5457 24.6313 51.067 26.2107 52.1097 27.376C53.1523 28.5107 54.5017 29.078 56.1577 29.078C57.783 29.078 59.117 28.4953 60.1597 27.33C61.2023 26.1647 61.7237 24.5853 61.7237 22.592C61.7237 20.6293 61.2023 19.096 60.1597 17.992C59.117 16.8573 57.783 16.29 56.1577 16.29C54.5323 16.29 53.183 16.8573 52.1097 17.992C51.067 19.1267 50.5457 20.6753 50.5457 22.638Z"
                fill="black"
              />
              <path
                d="M76.6866 27.422C77.8213 28.5567 79.1859 29.124 80.7806 29.124C82.3753 29.124 83.7246 28.5567 84.8286 27.422C85.9633 26.2873 86.5306 24.708 86.5306 22.684C86.5306 20.66 85.9633 19.0807 84.8286 17.946C83.7246 16.8113 82.3753 16.244 80.7806 16.244C79.1859 16.244 77.8213 16.8113 76.6866 17.946C75.5826 19.0807 75.0306 20.66 75.0306 22.684C75.0306 24.708 75.5826 26.2873 76.6866 27.422ZM72.2706 14.082C74.5399 11.8127 77.3766 10.678 80.7806 10.678C84.1846 10.678 87.0059 11.8127 89.2446 14.082C91.5139 16.3513 92.6486 19.2187 92.6486 22.684C92.6486 26.1493 91.5139 29.0167 89.2446 31.286C87.0059 33.5553 84.1846 34.69 80.7806 34.69C77.3766 34.69 74.5399 33.5553 72.2706 31.286C70.0319 29.0167 68.9126 26.1493 68.9126 22.684C68.9126 19.2187 70.0319 16.3513 72.2706 14.082Z"
                fill="black"
              />
              <path
                d="M99.8699 27.422C101.005 28.5567 102.369 29.124 103.964 29.124C105.559 29.124 106.908 28.5567 108.012 27.422C109.147 26.2873 109.714 24.708 109.714 22.684C109.714 20.66 109.147 19.0807 108.012 17.946C106.908 16.8113 105.559 16.244 103.964 16.244C102.369 16.244 101.005 16.8113 99.8699 17.946C98.7659 19.0807 98.2139 20.66 98.2139 22.684C98.2139 24.708 98.7659 26.2873 99.8699 27.422ZM95.4539 14.082C97.7232 11.8127 100.56 10.678 103.964 10.678C107.368 10.678 110.189 11.8127 112.428 14.082C114.697 16.3513 115.832 19.2187 115.832 22.684C115.832 26.1493 114.697 29.0167 112.428 31.286C110.189 33.5553 107.368 34.69 103.964 34.69C100.56 34.69 97.7232 33.5553 95.4539 31.286C93.2152 29.0167 92.0959 26.1493 92.0959 22.684C92.0959 19.2187 93.2152 16.3513 95.4539 14.082Z"
                fill="black"
              />
            </svg>
          </a>
          <div
            className="flex flex-col md:flex-row gap-y-8 gap-x-11 bg-yellow-2 items-center fixed h-full w-full left-0 py-14 md:py-3 px-0 z-50 -top-150% transition-all duration-300"
            id="nav-menu"
          >
            <div className="flex flex-col md:flex-row gap-y-8 gap-x-20">
              <ul className="flex flex-col md:flex-row gap-x-12 gap-y-8 items-center">
                <li className="cursor-pointer font-open-sans text-1.0625rem font-bold leading-1.4375rem text-blue-2">
                  Destinations
                </li>
                <li className="cursor-pointer font-open-sans text-1.0625rem font-bold leading-1.4375rem text-blue-2">
                  Hotels
                </li>
                <li className="cursor-pointer font-open-sans text-1.0625rem font-bold leading-1.4375rem text-blue-2">
                  Flights
                </li>
                <li className="cursor-pointer font-open-sans text-1.0625rem font-bold leading-1.4375rem text-blue-2">
                  Bookings
                </li>
              </ul>
              <div className="flex flex-col md:flex-row w-max gap-y-8 gap-x-12">
                <button className="cursor-pointer font-open-sans text-1.0625rem font-bold text-blue-2">
                  Login
                </button>
                <button className="cursor-pointer font-open-sans text-1.0625rem font-bold text-blue-2 border rounded-0.3125remrem border-primary px-5 py-2">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer  font-open-sans font-bold text-primary">
                <div className="flex items-center">
                  <span className="block mr-2 text-blue-2">EN</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="absolute top-5 right-5 z-100 cursor-pointer md:hidden"
              id="nav-close"
            >
              <i className="ri-close-line text-7"></i>
            </div>
          </div>

          <div className="flex items-center">
            <img
              src={hamburgerLogo}
              className="w-7 h-auto cursor-pointer md:hidden"
              id="nav-toggle"
            />
          </div>
        </nav>
      </header>

      <main className="sm:max-w-screen-sm px-4 md:px-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-14">
        <section className="grid sm:grid-cols-1 md:grid-cols-2 mb-24">
          <div className="pt-8 md:pt-24">
            <span className="font-poppins uppercase text-red-1 text-xs sm:text-base md:text-lg font-bold block mb-5 text-center md:text-left">
              Best Destinations around the world
            </span>
            <h1 className="font-bold font-volkhov text-4xl md:text-6xl lg:text-7xl text-blue-3 mb-3 md:mb-7 leading-tight relative z-10 text-center md:text-left">
              Travel,
              <div className="relative inline-block orange-underline xs:w-40 md:w-24.0625rem">
                enjoy
              </div>
              <br />
              and live a new <br />
              and full life
            </h1>
            <p className="font-poppins text-sm font-medium text-blue-1 s leading-normal sm:leading-1.875rem text-center md:text-left">
              Built Wicket longer admire do barton vanity itself do in it.{' '}
              <br />
              Preferred to sportsmen it engrossed listening. Park gate <br />{' '}
              sell they west hard for the.
            </p>
            <div className="mt-4 md:mt-7 flex gap-x-10 gap-y-4 flex-col items-center">
              <button className="px-4 py-3 bg-yellow-1 rounded-lg text-white font-bold text-xs font-open-sans w-1/2">
                Find Out More
              </button>
              <a className="flex items-center gap-x-5 text-gray-1 font-medium w-1/2 text-xs cursor-pointer justify-center">
                <div className="w-8 h-8 bg-red-1 rounded-full flex justify-center items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Play Now
              </a>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0 overflow-hidden">
            <svg
              viewBox="0 0 167 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 md:top-5 w-48 h-24 -z-1"
            >
              <path
                d="M96.1744 86.8472C94.816 87.1514 93.493 87.715 92.2875 88.5024C89.1467 90.5037 87.3194 93.3604 88.2063 94.8826C89.0933 96.4047 92.3583 96.0154 95.4991 94.0141C96.7209 93.2545 97.8063 92.2837 98.6884 91.1618C99.0978 90.6197 99.1713 89.9442 98.8761 89.4393L97.7239 87.4619C97.4307 86.9554 96.8226 86.7145 96.1744 86.8472Z"
                fill="#D5D6DB"
              />
              <path
                d="M88.2873 59.8541C87.3024 60.0749 86.343 60.4837 85.4687 61.0547C83.1919 62.5055 81.8661 64.5769 82.5087 65.6797C83.1513 66.7825 85.5198 66.5 87.7964 65.0493C88.6823 64.4983 89.4692 63.794 90.109 62.9804C90.4055 62.5874 90.4586 62.0981 90.2446 61.732L89.4103 60.3002C89.1981 59.9331 88.7574 59.758 88.2873 59.8541Z"
                fill="#D5D6DB"
              />
              <path
                d="M75.4733 60.9845C75.254 60.9601 75.0202 61.0185 74.8174 61.148L69.4693 64.5562C69.0219 64.8404 68.8429 65.3878 69.0698 65.779C69.1217 65.8686 69.1927 65.9451 69.279 66.0041L82.4606 75.0891L100.294 63.7244L75.4733 60.9845Z"
                fill="#029BC5"
              />
              <path
                d="M131.85 59.6999L83.3181 90.2521L54.6054 101.677L39.9623 104.588L38.3513 101.851L119.246 51.9044C121.657 50.4095 124.343 49.4919 127.032 49.2448C128.209 49.143 129.372 49.1821 130.493 49.3609C131.487 49.5116 132.43 49.8023 133.294 50.2244C134.258 50.7027 136.092 50.7578 136.687 51.7106C136.689 51.7091 138.091 56.0835 131.85 59.6999Z"
                fill="#E1E6E9"
              />
              <path
                d="M83.9615 86.2095L62.9662 119.679C62.704 120.15 62.8597 120.676 63.3135 120.855C63.5921 120.965 63.933 120.922 64.2194 120.74L69.5634 117.35C70.5913 116.697 71.5014 115.869 72.2375 114.915L112.954 67.0462L83.9615 86.2095Z"
                fill="#029BC5"
              />
              <path
                d="M30.9819 85.092C30.6317 84.9723 30.2149 85.0344 29.8631 85.2584L25.4456 88.0718C24.8437 88.4549 24.6038 89.1913 24.9097 89.717C24.9679 89.8169 25.0436 89.9049 25.1344 89.9773L37.5111 99.8897L50.5241 91.7616L30.9819 85.092Z"
                fill="#029BC5"
              />
              <path
                d="M41.6596 101.677L34.9981 111.006C34.9004 111.14 34.9234 111.308 35.0494 111.382C35.1402 111.435 35.2642 111.425 35.365 111.358L39.4932 108.742C39.5253 108.721 39.5543 108.696 39.5783 108.667L49.3119 96.832L41.6596 101.677Z"
                fill="#029BC5"
              />
              <path
                d="M129.697 49.7631C128.542 49.5777 127.345 49.5381 126.132 49.6447C124.951 51.2958 124.196 53.1505 123.943 55.0239C123.924 55.4003 124.228 55.6711 124.62 55.6289C124.743 55.6157 124.864 55.5728 124.973 55.504L132.581 50.6597C131.692 50.2211 130.72 49.9193 129.697 49.7631Z"
                fill="#029BC5"
              />
              <path
                d="M113.117 58.6712L118.084 55.5343L122.711 63.4033L117.744 66.5403L113.117 58.6712Z"
                fill="#D5D6DB"
              />
              <path
                d="M109.992 61.7834C109.393 62.1626 109.154 62.8914 109.458 63.4111L109.95 64.2531C110.274 64.7595 111.013 64.8486 111.602 64.4519C112.162 64.0741 112.387 63.3874 112.117 62.8804L111.625 62.0384C111.321 61.5192 110.59 61.4049 109.992 61.7834Z"
                fill="#3A556A"
              />
              <path
                d="M105.528 64.5559C104.929 64.9351 104.69 65.6639 104.994 66.1836L105.486 67.0255C105.81 67.532 106.549 67.6211 107.137 67.2244C107.697 66.8466 107.923 66.1599 107.653 65.6529L107.161 64.8109C106.857 64.2918 106.126 64.1775 105.528 64.5559Z"
                fill="#3A556A"
              />
              <path
                d="M101.062 67.3293C100.464 67.7089 100.225 68.4368 100.529 68.9561L101.021 69.798C101.345 70.3045 102.084 70.3935 102.673 69.9968C103.233 69.6191 103.458 68.9324 103.188 68.4254L102.696 67.5834C102.392 67.0638 101.66 66.95 101.062 67.3293Z"
                fill="#3A556A"
              />
              <path
                d="M96.5973 70.1016C95.9994 70.4813 95.7611 71.2092 96.0647 71.7285L96.557 72.5705C96.8808 73.0769 97.6201 73.166 98.2084 72.7693C98.7682 72.3915 98.9937 71.7048 98.7239 71.1978L98.2316 70.3558C97.9274 69.8363 97.1959 69.7225 96.5973 70.1016Z"
                fill="#3A556A"
              />
              <path
                d="M92.1334 72.8743C91.5351 73.2541 91.2966 73.9824 91.6004 74.5018L92.093 75.3442C92.3967 75.8635 93.1279 75.9772 93.7263 75.5982C94.3247 75.2192 94.5636 74.491 94.2599 73.9717L93.7673 73.1294C93.4644 72.6097 92.7334 72.4952 92.1346 72.8735C92.1341 72.8738 92.1339 72.874 92.1334 72.8743Z"
                fill="#3A556A"
              />
              <path
                d="M87.669 75.6468C87.0708 76.0266 86.8323 76.7548 87.1361 77.2743L87.6287 78.1166C87.9323 78.6359 88.6636 78.7496 89.2619 78.3706C89.8603 77.9917 90.0992 77.2635 89.7956 76.7442L89.303 75.9019C89 75.3821 88.269 75.2676 87.6703 75.646C87.6698 75.6463 87.6693 75.6466 87.669 75.6468Z"
                fill="#3A556A"
              />
              <path
                d="M83.2044 78.4193C82.6062 78.7991 82.3677 79.5273 82.6714 80.0468L83.164 80.8891C83.4685 81.4079 84.2001 81.5205 84.7978 81.141C85.3945 80.7621 85.6329 80.0355 85.3306 79.5169L84.838 78.6745C84.5345 78.1549 83.8033 78.0406 83.2044 78.4193Z"
                fill="#3A556A"
              />
              <path
                d="M78.7398 81.1918C78.1416 81.5716 77.9031 82.2998 78.2068 82.8193L78.6994 83.6617C79.0039 84.1805 79.7355 84.293 80.3332 83.9135C80.9299 83.5347 81.1683 82.808 80.866 82.2894L80.3734 81.447C80.0699 80.9274 79.3387 80.8131 78.7398 81.1918Z"
                fill="#3A556A"
              />
              <path
                d="M74.2756 83.9642C73.6773 84.344 73.4388 85.0722 73.7426 85.5917L74.2352 86.434C74.5396 86.9528 75.2712 87.0654 75.869 86.6859C76.4657 86.3071 76.7041 85.5804 76.4018 85.0618L75.9092 84.2195C75.6054 83.7 74.8742 83.5857 74.2756 83.9642Z"
                fill="#3A556A"
              />
              <path
                d="M69.8097 86.7374C69.2114 87.1164 68.9725 87.8446 69.2762 88.3639L69.2768 88.365L69.7694 89.2073C70.0738 89.7261 70.8054 89.8387 71.4031 89.4592C71.9999 89.0803 72.2382 88.3537 71.936 87.835L71.4434 86.9927C71.1399 86.473 70.4086 86.3587 69.8097 86.7374Z"
                fill="#3A556A"
              />
              <path
                d="M65.3465 89.5091C64.7481 89.8881 64.5092 90.6163 64.8129 91.1355L64.8135 91.1366L65.3061 91.9789C65.6106 92.4977 66.3422 92.6103 66.9399 92.2308C67.5366 91.852 67.775 91.1253 67.4728 90.6067L66.9802 89.7644C66.6764 89.2449 65.9451 89.1306 65.3465 89.5091Z"
                fill="#3A556A"
              />
            </svg>
            <img
              src={imageTraveller}
              alt="image traveller"
              className="w-112.5 md:w-full h-auto"
            />
            <svg
              width="167"
              height="154"
              viewBox="0 0 167 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-10 bottom-8 md:-right-8 md:top-20 w-48 h-24 -z-1"
            >
              <path
                d="M96.1744 86.8472C94.816 87.1514 93.493 87.715 92.2875 88.5024C89.1467 90.5037 87.3194 93.3604 88.2063 94.8826C89.0933 96.4047 92.3583 96.0154 95.4991 94.0141C96.7209 93.2545 97.8063 92.2837 98.6884 91.1618C99.0978 90.6197 99.1713 89.9442 98.8761 89.4393L97.7239 87.4619C97.4307 86.9554 96.8226 86.7145 96.1744 86.8472Z"
                fill="#D5D6DB"
              />
              <path
                d="M88.2873 59.8541C87.3024 60.0749 86.343 60.4837 85.4687 61.0547C83.1919 62.5055 81.8661 64.5769 82.5087 65.6797C83.1513 66.7825 85.5198 66.5 87.7964 65.0493C88.6823 64.4983 89.4692 63.794 90.109 62.9804C90.4055 62.5874 90.4586 62.0981 90.2446 61.732L89.4103 60.3002C89.1981 59.9331 88.7574 59.758 88.2873 59.8541Z"
                fill="#D5D6DB"
              />
              <path
                d="M75.4733 60.9845C75.254 60.9601 75.0202 61.0185 74.8174 61.148L69.4693 64.5562C69.0219 64.8404 68.8429 65.3878 69.0698 65.779C69.1217 65.8686 69.1927 65.9451 69.279 66.0041L82.4606 75.0891L100.294 63.7244L75.4733 60.9845Z"
                fill="#029BC5"
              />
              <path
                d="M131.85 59.6999L83.3181 90.2521L54.6054 101.677L39.9623 104.588L38.3513 101.851L119.246 51.9044C121.657 50.4095 124.343 49.4919 127.032 49.2448C128.209 49.143 129.372 49.1821 130.493 49.3609C131.487 49.5116 132.43 49.8023 133.294 50.2244C134.258 50.7027 136.092 50.7578 136.687 51.7106C136.689 51.7091 138.091 56.0835 131.85 59.6999Z"
                fill="#E1E6E9"
              />
              <path
                d="M83.9615 86.2095L62.9662 119.679C62.704 120.15 62.8597 120.676 63.3135 120.855C63.5921 120.965 63.933 120.922 64.2194 120.74L69.5634 117.35C70.5913 116.697 71.5014 115.869 72.2375 114.915L112.954 67.0462L83.9615 86.2095Z"
                fill="#029BC5"
              />
              <path
                d="M30.9819 85.092C30.6317 84.9723 30.2149 85.0344 29.8631 85.2584L25.4456 88.0718C24.8437 88.4549 24.6038 89.1913 24.9097 89.717C24.9679 89.8169 25.0436 89.9049 25.1344 89.9773L37.5111 99.8897L50.5241 91.7616L30.9819 85.092Z"
                fill="#029BC5"
              />
              <path
                d="M41.6596 101.677L34.9981 111.006C34.9004 111.14 34.9234 111.308 35.0494 111.382C35.1402 111.435 35.2642 111.425 35.365 111.358L39.4932 108.742C39.5253 108.721 39.5543 108.696 39.5783 108.667L49.3119 96.832L41.6596 101.677Z"
                fill="#029BC5"
              />
              <path
                d="M129.697 49.7631C128.542 49.5777 127.345 49.5381 126.132 49.6447C124.951 51.2958 124.196 53.1505 123.943 55.0239C123.924 55.4003 124.228 55.6711 124.62 55.6289C124.743 55.6157 124.864 55.5728 124.973 55.504L132.581 50.6597C131.692 50.2211 130.72 49.9193 129.697 49.7631Z"
                fill="#029BC5"
              />
              <path
                d="M113.117 58.6712L118.084 55.5343L122.711 63.4033L117.744 66.5403L113.117 58.6712Z"
                fill="#D5D6DB"
              />
              <path
                d="M109.992 61.7834C109.393 62.1626 109.154 62.8914 109.458 63.4111L109.95 64.2531C110.274 64.7595 111.013 64.8486 111.602 64.4519C112.162 64.0741 112.387 63.3874 112.117 62.8804L111.625 62.0384C111.321 61.5192 110.59 61.4049 109.992 61.7834Z"
                fill="#3A556A"
              />
              <path
                d="M105.528 64.5559C104.929 64.9351 104.69 65.6639 104.994 66.1836L105.486 67.0255C105.81 67.532 106.549 67.6211 107.137 67.2244C107.697 66.8466 107.923 66.1599 107.653 65.6529L107.161 64.8109C106.857 64.2918 106.126 64.1775 105.528 64.5559Z"
                fill="#3A556A"
              />
              <path
                d="M101.062 67.3293C100.464 67.7089 100.225 68.4368 100.529 68.9561L101.021 69.798C101.345 70.3045 102.084 70.3935 102.673 69.9968C103.233 69.6191 103.458 68.9324 103.188 68.4254L102.696 67.5834C102.392 67.0638 101.66 66.95 101.062 67.3293Z"
                fill="#3A556A"
              />
              <path
                d="M96.5973 70.1016C95.9994 70.4813 95.7611 71.2092 96.0647 71.7285L96.557 72.5705C96.8808 73.0769 97.6201 73.166 98.2084 72.7693C98.7682 72.3915 98.9937 71.7048 98.7239 71.1978L98.2316 70.3558C97.9274 69.8363 97.1959 69.7225 96.5973 70.1016Z"
                fill="#3A556A"
              />
              <path
                d="M92.1334 72.8743C91.5351 73.2541 91.2966 73.9824 91.6004 74.5018L92.093 75.3442C92.3967 75.8635 93.1279 75.9772 93.7263 75.5982C94.3247 75.2192 94.5636 74.491 94.2599 73.9717L93.7673 73.1294C93.4644 72.6097 92.7334 72.4952 92.1346 72.8735C92.1341 72.8738 92.1339 72.874 92.1334 72.8743Z"
                fill="#3A556A"
              />
              <path
                d="M87.669 75.6468C87.0708 76.0266 86.8323 76.7548 87.1361 77.2743L87.6287 78.1166C87.9323 78.6359 88.6636 78.7496 89.2619 78.3706C89.8603 77.9917 90.0992 77.2635 89.7956 76.7442L89.303 75.9019C89 75.3821 88.269 75.2676 87.6703 75.646C87.6698 75.6463 87.6693 75.6466 87.669 75.6468Z"
                fill="#3A556A"
              />
              <path
                d="M83.2044 78.4193C82.6062 78.7991 82.3677 79.5273 82.6714 80.0468L83.164 80.8891C83.4685 81.4079 84.2001 81.5205 84.7978 81.141C85.3945 80.7621 85.6329 80.0355 85.3306 79.5169L84.838 78.6745C84.5345 78.1549 83.8033 78.0406 83.2044 78.4193Z"
                fill="#3A556A"
              />
              <path
                d="M78.7398 81.1918C78.1416 81.5716 77.9031 82.2998 78.2068 82.8193L78.6994 83.6617C79.0039 84.1805 79.7355 84.293 80.3332 83.9135C80.9299 83.5347 81.1683 82.808 80.866 82.2894L80.3734 81.447C80.0699 80.9274 79.3387 80.8131 78.7398 81.1918Z"
                fill="#3A556A"
              />
              <path
                d="M74.2756 83.9642C73.6773 84.344 73.4388 85.0722 73.7426 85.5917L74.2352 86.434C74.5396 86.9528 75.2712 87.0654 75.869 86.6859C76.4657 86.3071 76.7041 85.5804 76.4018 85.0618L75.9092 84.2195C75.6054 83.7 74.8742 83.5857 74.2756 83.9642Z"
                fill="#3A556A"
              />
              <path
                d="M69.8097 86.7374C69.2114 87.1164 68.9725 87.8446 69.2762 88.3639L69.2768 88.365L69.7694 89.2073C70.0738 89.7261 70.8054 89.8387 71.4031 89.4592C71.9999 89.0803 72.2382 88.3537 71.936 87.835L71.4434 86.9927C71.1399 86.473 70.4086 86.3587 69.8097 86.7374Z"
                fill="#3A556A"
              />
              <path
                d="M65.3465 89.5091C64.7481 89.8881 64.5092 90.6163 64.8129 91.1355L64.8135 91.1366L65.3061 91.9789C65.6106 92.4977 66.3422 92.6103 66.9399 92.2308C67.5366 91.852 67.775 91.1253 67.4728 90.6067L66.9802 89.7644C66.6764 89.2449 65.9451 89.1306 65.3465 89.5091Z"
                fill="#3A556A"
              />
            </svg>
          </div>
        </section>

        <section className="text-center mb-24">
          <span className="text-sm md:text-base font-semibold uppercase text-blue-1 font-poppins mb-2 block">
            CATEGORY
          </span>
          <h3 className="font-volkhov text-4xl md:text-5xl font-bold text-blue-5">
            We Offer Best Services
          </h3>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5">
            <div className="hover:shadow-primary cursor-pointer flex flex-col items-center px-10 py-12 rounded-2.25rem">
              <img
                src={category1}
                alt="calculated weather"
                className="h-auto max-w-32"
              />
              <h5 className="font-open-sans font-semibold text-blue-4 mt-6 mb-4">
                Calculated Weather
              </h5>
              <span className="font-poppins font-medium text-sm md:text-base text-blue-1">
                Built Wicket longer admire do barton vanity itself do in it.
              </span>
            </div>
            <div className="hover:shadow-primary cursor-pointer flex flex-col items-center px-10 py-12 rounded-2.25rem">
              <img
                src={category2}
                alt="best flights"
                className="h-auto max-w-32"
              />
              <h5 className="font-open-sans font-semibold text-blue-4 mt-6 mb-4">
                Best Flights
              </h5>
              <span className="font-poppins font-medium text-sm md:text-base text-blue-1">
                Engrossed listening. Park gate sell they west hard for the.
              </span>
            </div>
            <div className="hover:shadow-primary cursor-pointer flex flex-col items-center px-10 py-12 rounded-2.25rem">
              <img
                src={category3}
                alt="local events"
                className="h-auto max-w-32"
              />
              <h5 className="font-open-sans font-semibold text-blue-4 mt-6 mb-4">
                Local Events
              </h5>
              <span className="font-poppins font-medium text-sm md:text-base text-blue-1">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </span>
            </div>
            <div className="hover:shadow-primary cursor-pointer flex flex-col items-center px-10 py-12 rounded-2.25rem">
              <img
                src={category4}
                alt="customization"
                className="h-auto max-w-32"
              />
              <h5 className="font-open-sans font-semibold text-blue-4 mt-6 mb-4">
                Customization
              </h5>
              <span className="font-poppins font-medium text-base text-blue-1">
                We deliver outsourced aviation services for military customers
              </span>
            </div>
          </div>
        </section>

        <section className="text-center mb-44">
          <span className="text-sm md:text-base font-semibold uppercase text-blue-1 font-poppins mb-2 block">
            Top Selling
          </span>
          <h3 className="font-volkhov text-4xl md:text-5xl font-bold text-blue-5">
            Top Destinations
          </h3>
          <Swiper
            slidesPerView="auto"
            spaceBetween={32}
            loop={true}
            className="mt-16 grid grid-cols-custom-3fr justify-center"
          >
            <SwiperSlide className="relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                src={destination1}
                className="w-full h-full bg-cover object-cover"
              />
              <div className="absolute bottom-0 h-32 w-full flex justify-between gap-x-3 bg-white pt-7 px-5 pb-10">
                <div>
                  <h3 className="text-lg font-medium font-poppins text-blue-1 mb-4">
                    Rome, Italy
                  </h3>
                  <div className="flex items-center gap-x-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                        fill="#080809"
                      />
                    </svg>
                    <span className="text-blue-1 font-medium font-poppins text-base">
                      10 Days Trip
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium font-poppins text-blue-1 text-lg">
                    $5,42k
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                src={destination2}
                className="w-full h-full bg-cover object-cover"
              />
              <div className="absolute bottom-0 h-32 w-full flex justify-between bg-white pt-7 px-5 pb-10">
                <div>
                  <h3 className="text-lg font-medium font-poppins text-blue-1 mb-4">
                    London, UK
                  </h3>
                  <div className="flex items-center gap-x-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                        fill="#080809"
                      />
                    </svg>
                    <span className="font-poppins font-medium text-blue-1 text-base">
                      12 Days Trip
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-base font-poppins font-medium text-blue-1">
                    $4.2k
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                src={destination3}
                className="w-full h-full bg-cover object-cover"
              />
              <div className="absolute bottom-0 h-32 w-full flex justify-between bg-white pt-7 px-5 pb-10">
                <div>
                  <h3 className="font-medium text-blue-1 text-lg font-poppins mb-4">
                    Full Europe
                  </h3>
                  <div className="flex items-center gap-x-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                        fill="#080809"
                      />
                    </svg>
                    <span className="font-poppins text-blue-1 text-base font-medium">
                      28 Days Trip
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-poppins font-medium text-blue-1">
                    $15k
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="flex flex-col md:flex-row mb-44 gap-y-12">
          <div className="w-full md:w-3/5">
            <span className="block text-blue-1 font-poppins font-semibold text-md md:text-lg mb-4 text-center sm:text-left">
              Easy and Fast
            </span>
            <h3 className="font-volkhov font-bold text-blue-5 text-4xl md:text-5xl mb-8 text-center sm:text-left">
              Book your next trip <br />
              in 3 easy steps
            </h3>
            <div className="flex flex-col gap-y-12 md:w-98.75">
              <div className="flex gap-x-5 items-center">
                <div className="w-12 h-12">
                  <svg
                    width="47"
                    height="48"
                    viewBox="0 0 47 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="47" height="48" rx="13" fill="#F0BB1F" />
                    <path
                      d="M13.5446 17.4755C13.248 17.4755 13.0054 17.2328 13 16.9363V13.5446C13 13.2426 13.2426 13 13.5446 13H16.9363C17.2328 13 17.4755 13.2426 17.4755 13.5446V14.7255H30.5245V13.5446C30.5245 13.248 30.7672 13.0054 31.0637 13H34.4554C34.752 13 34.9946 13.2426 35 13.5446V16.9363C35 17.2328 34.7574 17.4755 34.4554 17.4755H33.2745V30.5245H34.4554C34.752 30.5245 34.9946 30.7672 35 31.0637V34.4554C35 34.752 34.7574 34.9946 34.4554 35H31.0637C30.7672 35 30.5245 34.7574 30.5245 34.4554V33.2745H17.4755V34.4554C17.4755 34.752 17.2328 34.9946 16.9363 35H13.5446C13.248 35 13.0054 34.7574 13 34.4554V31.0637C13 30.7672 13.2426 30.5245 13.5446 30.5245H14.7255V17.4755H13.5446ZM33.9216 16.3971V14.0784H31.6029V16.3971H33.9216ZM31.6029 33.9216H33.9216V31.6029H31.6029V33.9216ZM17.4755 31.0637V32.1961H30.5245V31.0637C30.5245 30.7672 30.7672 30.5245 31.0637 30.5245H32.1961V17.4755H31.0637C30.7672 17.4755 30.5245 17.2328 30.5245 16.9363V15.8039H17.4755V16.9363C17.4755 17.2328 17.2328 17.4755 16.9363 17.4755H15.8039V30.5245H16.9363C17.2328 30.5245 17.4755 30.7672 17.4755 31.0637ZM14.0784 31.6029V33.9216H16.3971V31.6029H14.0784ZM16.3971 16.3971V14.0784H14.0784V16.3971H16.3971Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-poppins font-medium text-base text-blue-1">
                    Choose Destination
                  </h5>
                  <span className="font-poppins font-normal text-base text-blue-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </span>
                </div>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="w-12 h-12">
                  <svg
                    width="47"
                    height="48"
                    viewBox="0 0 47 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="47" height="48" rx="13" fill="#F15A2B" />
                    <path
                      d="M32.8184 31.9286C32.3682 31.9378 31.926 31.809 31.5512 31.5595C31.2723 31.3772 30.9462 31.2802 30.613 31.2802C30.2797 31.2802 29.9537 31.3772 29.6747 31.5595C29.2961 31.8006 28.8566 31.9286 28.4077 31.9286C27.9589 31.9286 27.5194 31.8006 27.1408 31.5595C26.8618 31.377 26.5357 31.2799 26.2023 31.2799C25.869 31.2799 25.5429 31.377 25.2639 31.5595C24.8853 31.8006 24.4458 31.9286 23.9969 31.9286C23.5481 31.9286 23.1086 31.8006 22.7299 31.5595C22.4512 31.3772 22.1253 31.28 21.7922 31.28C21.459 31.28 21.1331 31.3772 20.8544 31.5595C20.5111 31.7876 20.1105 31.9144 19.6985 31.9253L19.6758 31.2767C19.9801 31.2695 20.2757 31.1732 20.5258 30.9997C20.9044 30.7587 21.3438 30.6307 21.7925 30.6307C22.2412 30.6307 22.6806 30.7587 23.0591 30.9997C23.3381 31.1821 23.6641 31.2792 23.9974 31.2792C24.3307 31.2792 24.6567 31.1821 24.9357 30.9997C25.3143 30.7585 25.754 30.6304 26.203 30.6304C26.6519 30.6304 27.0916 30.7585 27.4703 30.9997C27.7492 31.1821 28.0753 31.2792 28.4085 31.2792C28.7418 31.2792 29.0679 31.1821 29.3468 30.9997C29.7255 30.7588 30.165 30.6308 30.6138 30.6308C31.0626 30.6308 31.5021 30.7588 31.8808 30.9997C32.1604 31.1825 32.4872 31.2799 32.8213 31.2799C33.1554 31.2799 33.4822 31.1825 33.7618 30.9997C34.1362 30.751 34.5776 30.6224 35.027 30.6313V31.2799C34.6924 31.2708 34.3636 31.3686 34.0884 31.5592C33.7127 31.809 33.2695 31.9379 32.8184 31.9286Z"
                      fill="white"
                    />
                    <path
                      d="M15.1784 31.9285C14.7284 31.9378 14.2863 31.809 13.9116 31.5594C13.6365 31.3686 13.3077 31.2707 12.973 31.2798V30.6312C13.4232 30.6218 13.8654 30.7506 14.2402 31.0002C14.5151 31.191 14.8439 31.289 15.1784 31.2798C15.5131 31.289 15.842 31.1909 16.117 30.9999C16.491 30.7504 16.9325 30.6217 17.3819 30.6312C17.8204 30.6213 18.2517 30.7442 18.6192 30.9837L18.2919 31.5435C18.0235 31.3628 17.7053 31.2706 17.3819 31.2798C17.0486 31.2708 16.7211 31.3685 16.4472 31.5587C16.0721 31.809 15.6292 31.9381 15.1784 31.9285Z"
                      fill="white"
                    />
                    <path
                      d="M32.8194 29.6579C32.3689 29.6671 31.9265 29.5383 31.5513 29.2888C31.2721 29.1064 30.9458 29.0092 30.6122 29.0092C30.2787 29.0092 29.9523 29.1064 29.6731 29.2888C29.2946 29.5298 28.8551 29.6578 28.4063 29.6578C27.9576 29.6578 27.5181 29.5298 27.1395 29.2888C26.8607 29.1065 26.5347 29.0094 26.2016 29.0094C25.8684 29.0094 25.5425 29.1065 25.2636 29.2888C24.8851 29.5299 24.4456 29.6579 23.9968 29.6579C23.548 29.6579 23.1085 29.5299 22.73 29.2888C22.4512 29.1065 22.1252 29.0094 21.7921 29.0094C21.4589 29.0094 21.1329 29.1065 20.8541 29.2888C20.4795 29.5384 20.0374 29.6672 19.5873 29.6579C19.1372 29.6672 18.6951 29.5384 18.3205 29.2888C18.0456 29.0981 17.717 29.0001 17.3825 29.0093C17.0482 29.0002 16.7197 29.0981 16.4449 29.2888C16.0709 29.5381 15.6295 29.6669 15.18 29.6579C14.7299 29.6672 14.2877 29.5384 13.9129 29.2888C13.6375 29.0977 13.3081 28.9997 12.973 29.0093V28.3606C13.4231 28.3513 13.8652 28.4801 14.2398 28.7297C14.515 28.9204 14.8438 29.0184 15.1784 29.0093C15.5128 29.0183 15.8413 28.9204 16.1161 28.7297C16.4901 28.4804 16.9315 28.3516 17.3809 28.3606C17.8313 28.351 18.2738 28.4799 18.6487 28.7297C18.9237 28.9205 19.2524 29.0184 19.587 29.0093C19.9215 29.0184 20.2503 28.9205 20.5252 28.7297C20.9038 28.4886 21.3433 28.3605 21.7921 28.3605C22.2408 28.3605 22.6803 28.4886 23.0589 28.7297C23.3377 28.9121 23.6637 29.0092 23.997 29.0092C24.3302 29.0092 24.6562 28.9121 24.9351 28.7297C25.3136 28.4886 25.7531 28.3605 26.2019 28.3605C26.6507 28.3605 27.0902 28.4886 27.4687 28.7297C27.7476 28.9121 28.0736 29.0092 28.4068 29.0092C28.74 29.0092 29.066 28.9121 29.3449 28.7297C29.7238 28.4887 30.1636 28.3607 30.6127 28.3607C31.0618 28.3607 31.5016 28.4887 31.8805 28.7297C32.1599 28.912 32.4863 29.0091 32.8199 29.0091C33.1535 29.0091 33.4799 28.912 33.7593 28.7297C34.1344 28.4803 34.5767 28.3515 35.0271 28.3606V29.0093C34.6918 28.9998 34.3622 29.0977 34.0865 29.2888C33.7116 29.5381 33.2695 29.6669 32.8194 29.6579Z"
                      fill="white"
                    />
                    <path
                      d="M32.8184 27.388C32.3683 27.3972 31.9261 27.2684 31.5513 27.0189C31.2762 26.8282 30.9473 26.7303 30.6127 26.7394C30.3671 26.7309 30.1232 26.7833 29.9028 26.8918L29.6167 26.308C29.9263 26.1563 30.268 26.0814 30.6127 26.0897C31.0634 26.0806 31.5061 26.2097 31.8811 26.4598C32.1608 26.6426 32.4876 26.7399 32.8217 26.7399C33.1558 26.7399 33.4826 26.6426 33.7622 26.4598C34.1364 26.2109 34.5777 26.0821 35.0271 26.0907V26.7394C34.6925 26.7302 34.3637 26.828 34.0885 27.0186C33.7128 27.2685 33.2696 27.3974 32.8184 27.388Z"
                      fill="white"
                    />
                    <path
                      d="M28.4044 27.3879C27.9549 27.3973 27.5135 27.2686 27.1395 27.0191C26.8605 26.8366 26.5344 26.7395 26.2011 26.7395C25.8677 26.7395 25.5416 26.8366 25.2626 27.0191C24.884 27.2602 24.4445 27.3882 23.9957 27.3882C23.5468 27.3882 23.1073 27.2602 22.7287 27.0191C22.4497 26.8367 22.1237 26.7396 21.7904 26.7396C21.4572 26.7396 21.1311 26.8367 20.8522 27.0191C20.4776 27.2683 20.0358 27.397 19.586 27.3879C19.1359 27.3972 18.6938 27.2684 18.3192 27.0188C18.0441 26.8281 17.7152 26.7301 17.3806 26.7392C17.0473 26.7302 16.7198 26.828 16.4459 27.0181C16.0712 27.2682 15.6288 27.3972 15.1784 27.3879C14.7284 27.3972 14.2863 27.2684 13.9116 27.0188C13.6365 26.8281 13.3077 26.7301 12.973 26.7392V26.0906C13.4232 26.0812 13.8654 26.21 14.2402 26.4597C14.5151 26.6504 14.8439 26.7484 15.1784 26.7392C15.5131 26.7484 15.842 26.6503 16.117 26.4593C16.491 26.2098 16.9325 26.0811 17.3819 26.0906C17.8319 26.0813 18.2741 26.2101 18.6487 26.4597C18.9237 26.6504 19.2524 26.7484 19.587 26.7392C19.9216 26.7483 20.2504 26.6504 20.5256 26.4597C20.9042 26.2186 21.3437 26.0906 21.7925 26.0906C22.2414 26.0906 22.6809 26.2186 23.0595 26.4597C23.3385 26.642 23.6645 26.7391 23.9978 26.7391C24.3311 26.7391 24.6571 26.642 24.9361 26.4597C25.3147 26.2184 25.7544 26.0903 26.2033 26.0903C26.6523 26.0903 27.092 26.2184 27.4706 26.4597C27.7564 26.6518 28.0952 26.7495 28.4394 26.7389C28.4644 26.7392 28.4895 26.7379 28.5143 26.735L28.6006 27.3778C28.5355 27.3854 28.4699 27.3888 28.4044 27.3879Z"
                      fill="white"
                    />
                    <path
                      d="M32.8194 25.1174C32.3689 25.1266 31.9265 24.9978 31.5513 24.7483C31.2721 24.5658 30.9458 24.4687 30.6122 24.4687C30.2787 24.4687 29.9523 24.5658 29.6731 24.7483C29.2946 24.9893 28.8551 25.1173 28.4063 25.1173C27.9576 25.1173 27.5181 24.9893 27.1395 24.7483C26.8607 24.5659 26.5347 24.4688 26.2016 24.4688C25.8684 24.4688 25.5425 24.5659 25.2636 24.7483C24.8851 24.9893 24.4456 25.1174 23.9968 25.1174C23.548 25.1174 23.1085 24.9893 22.73 24.7483C22.4512 24.5659 22.1252 24.4688 21.7921 24.4688C21.4589 24.4688 21.1329 24.5659 20.8541 24.7483C20.4795 24.9979 20.0374 25.1267 19.5873 25.1174C19.1372 25.1267 18.6951 24.9979 18.3205 24.7483C18.0456 24.5575 17.717 24.4596 17.3825 24.4687C17.0482 24.4596 16.7197 24.5576 16.4449 24.7483C16.0709 24.9976 15.6295 25.1264 15.18 25.1174C14.7299 25.1267 14.2877 24.9979 13.9129 24.7483C13.6375 24.5572 13.3081 24.4592 12.973 24.4687V23.8201C13.4231 23.8108 13.8652 23.9396 14.2398 24.1892C14.515 24.3799 14.8438 24.4778 15.1784 24.4687C15.5128 24.4778 15.8413 24.3799 16.1161 24.1892C16.4901 23.9398 16.9315 23.811 17.3809 23.8201C17.8313 23.8105 18.2738 23.9393 18.6487 24.1892C18.9237 24.3799 19.2524 24.4779 19.587 24.4687C19.9215 24.4779 20.2503 24.3799 20.5252 24.1892C20.9038 23.9481 21.3433 23.82 21.7921 23.82C22.2408 23.82 22.6803 23.9481 23.0589 24.1892C23.3377 24.3715 23.6637 24.4687 23.997 24.4687C24.3302 24.4687 24.6562 24.3715 24.9351 24.1892C25.3136 23.9481 25.7531 23.82 26.2019 23.82C26.6507 23.82 27.0902 23.9481 27.4687 24.1892C27.7476 24.3715 28.0736 24.4687 28.4068 24.4687C28.74 24.4687 29.066 24.3715 29.3449 24.1892C29.7238 23.9482 30.1636 23.8202 30.6127 23.8202C31.0618 23.8202 31.5016 23.9482 31.8805 24.1892C32.1599 24.3715 32.4863 24.4686 32.8199 24.4686C33.1535 24.4686 33.4799 24.3715 33.7593 24.1892C34.1344 23.9397 34.5767 23.8109 35.0271 23.8201V24.4687C34.6918 24.4592 34.3622 24.5572 34.0865 24.7483C33.7116 24.9976 33.2695 25.1264 32.8194 25.1174Z"
                      fill="white"
                    />
                    <path
                      d="M28.1978 24.8423L27.5858 24.6276C27.7434 24.1748 27.8078 23.6947 27.7751 23.2163C27.7424 22.738 27.6133 22.2711 27.3954 21.844L25.1677 17.4815C25.1457 17.4384 25.1336 17.3909 25.1323 17.3426C25.131 17.2942 25.1406 17.2462 25.1602 17.202C25.1799 17.1578 25.2092 17.1186 25.2461 17.0872C25.2829 17.0558 25.3262 17.0331 25.373 17.0206L29.8126 15.8368C29.9573 15.799 30.0812 15.7056 30.1573 15.5768C30.2335 15.4481 30.2557 15.2946 30.2192 15.1495C30.1827 15.0045 30.0904 14.8798 29.9624 14.8025C29.8344 14.7252 29.681 14.7015 29.5357 14.7367L24.1623 16.021C24.0474 16.0482 23.9403 16.1014 23.8493 16.1766C23.7583 16.2518 23.6858 16.3469 23.6375 16.4546C23.5892 16.5623 23.5663 16.6796 23.5706 16.7976C23.575 16.9155 23.6064 17.0309 23.6625 17.1348L25.2581 20.0991C25.2986 20.1744 25.3077 20.2627 25.2834 20.3447C25.2591 20.4267 25.2034 20.4958 25.1284 20.5369L23.069 21.6721L22.756 21.1038L24.5339 20.1237L23.092 17.4422C22.9888 17.2508 22.9311 17.0382 22.9232 16.8209C22.9153 16.6036 22.9576 16.3874 23.0466 16.189C23.1356 15.9906 23.2691 15.8154 23.4367 15.6768C23.6043 15.5382 23.8015 15.4401 24.0131 15.3899L29.3839 14.1059C29.6965 14.0269 30.0278 14.0753 30.3047 14.2406C30.5817 14.4058 30.7817 14.6743 30.8607 14.9869C30.9397 15.2996 30.8913 15.6308 30.726 15.9078C30.5608 16.1848 30.2923 16.3847 29.9797 16.4637L25.9275 17.5437L27.9734 21.5485C28.231 22.054 28.3837 22.6064 28.4223 23.1725C28.4608 23.7385 28.3845 24.3065 28.1978 24.8423Z"
                      fill="white"
                    />
                    <path
                      d="M21.6223 21.7338L17.681 23.9055L17.9939 24.4733L21.9352 22.3016L21.6223 21.7338Z"
                      fill="white"
                    />
                    <path
                      d="M31.1352 22.6849C30.6541 22.6849 30.1838 22.5423 29.7838 22.275C29.3838 22.0077 29.072 21.6278 28.8879 21.1834C28.7038 20.7389 28.6556 20.2498 28.7495 19.778C28.8434 19.3061 29.075 18.8727 29.4152 18.5325C29.7554 18.1923 30.1888 17.9607 30.6606 17.8668C31.1325 17.773 31.6216 17.8211 32.066 18.0052C32.5105 18.1893 32.8904 18.5011 33.1577 18.9011C33.425 19.3011 33.5676 19.7714 33.5676 20.2525C33.5669 20.8974 33.3104 21.5157 32.8544 21.9717C32.3984 22.4278 31.7801 22.6842 31.1352 22.6849ZM31.1352 18.4687C30.7824 18.4687 30.4375 18.5733 30.1442 18.7693C29.8508 18.9653 29.6222 19.2439 29.4872 19.5699C29.3522 19.8958 29.3169 20.2545 29.3857 20.6005C29.4545 20.9465 29.6244 21.2644 29.8739 21.5138C30.1233 21.7633 30.4412 21.9332 30.7872 22.002C31.1332 22.0708 31.4919 22.0355 31.8178 21.9005C32.1438 21.7655 32.4223 21.5369 32.6183 21.2435C32.8144 20.9502 32.919 20.6053 32.919 20.2525C32.9184 19.7796 32.7302 19.3262 32.3959 18.9918C32.0615 18.6574 31.6081 18.4693 31.1352 18.4687Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-poppins text-blue-1 font-medium text-base">
                    Choose Destination
                  </h5>
                  <span className="font-poppins text-blue-1 font-normal text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </span>
                </div>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="w-12 h-12">
                  <svg
                    width="47"
                    height="48"
                    viewBox="0 0 47 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="47" height="48" rx="13" fill="#006380" />
                    <path
                      d="M16.5 26.125C16.2033 26.125 15.9133 26.213 15.6666 26.3778C15.42 26.5426 15.2277 26.7769 15.1142 27.051C15.0006 27.3251 14.9709 27.6267 15.0288 27.9176C15.0867 28.2086 15.2296 28.4759 15.4393 28.6857C15.6491 28.8954 15.9164 29.0383 16.2074 29.0962C16.4983 29.1541 16.7999 29.1244 17.074 29.0108C17.3481 28.8973 17.5824 28.705 17.7472 28.4584C17.912 28.2117 18 27.9217 18 27.625C18 27.2272 17.842 26.8456 17.5607 26.5643C17.2794 26.283 16.8978 26.125 16.5 26.125ZM16.5 28.375C16.3517 28.375 16.2067 28.331 16.0833 28.2486C15.96 28.1662 15.8639 28.0491 15.8071 27.912C15.7503 27.775 15.7355 27.6242 15.7644 27.4787C15.7934 27.3332 15.8648 27.1996 15.9697 27.0947C16.0746 26.9898 16.2082 26.9184 16.3537 26.8894C16.4992 26.8605 16.65 26.8753 16.787 26.9321C16.9241 26.9889 17.0412 27.085 17.1236 27.2083C17.206 27.3317 17.25 27.4767 17.25 27.625C17.25 27.8239 17.171 28.0147 17.0303 28.1553C16.8897 28.296 16.6989 28.375 16.5 28.375Z"
                      fill="white"
                    />
                    <path
                      d="M31.5 26.125C31.2033 26.125 30.9133 26.213 30.6666 26.3778C30.42 26.5426 30.2277 26.7769 30.1142 27.051C30.0006 27.3251 29.9709 27.6267 30.0288 27.9176C30.0867 28.2086 30.2296 28.4759 30.4393 28.6857C30.6491 28.8954 30.9164 29.0383 31.2074 29.0962C31.4983 29.1541 31.7999 29.1244 32.074 29.0108C32.3481 28.8973 32.5824 28.705 32.7472 28.4584C32.912 28.2117 33 27.9217 33 27.625C33 27.2272 32.842 26.8456 32.5607 26.5643C32.2793 26.283 31.8978 26.125 31.5 26.125ZM31.5 28.375C31.3517 28.375 31.2067 28.331 31.0833 28.2486C30.96 28.1662 30.8639 28.0491 30.8071 27.912C30.7503 27.775 30.7355 27.6242 30.7644 27.4787C30.7933 27.3332 30.8648 27.1996 30.9697 27.0947C31.0746 26.9898 31.2082 26.9184 31.3537 26.8894C31.4992 26.8605 31.65 26.8753 31.787 26.9321C31.9241 26.9889 32.0412 27.085 32.1236 27.2083C32.206 27.3317 32.25 27.4767 32.25 27.625C32.25 27.8239 32.171 28.0147 32.0303 28.1553C31.8897 28.296 31.6989 28.375 31.5 28.375Z"
                      fill="white"
                    />
                    <path d="M20.625 28H27.375V28.75H20.625V28Z" fill="white" />
                    <path
                      d="M20.625 26.5H27.375V27.25H20.625V26.5Z"
                      fill="white"
                    />
                    <path
                      d="M22.875 20.875H25.125V21.625H22.875V20.875Z"
                      fill="white"
                    />
                    <path
                      d="M35.25 24.25V23.5C35.2491 23.2019 35.1303 22.9163 34.9195 22.7055C34.7087 22.4947 34.4231 22.3759 34.125 22.375H32.64L31.8638 19.6525L31.6312 18.7263C31.5702 18.483 31.4297 18.2672 31.232 18.113C31.0343 17.9587 30.7907 17.875 30.54 17.875H27.375V16.375C27.3744 16.1763 27.2952 15.9858 27.1547 15.8453C27.0142 15.7048 26.8237 15.6256 26.625 15.625H21.375C21.1763 15.6256 20.9858 15.7048 20.8453 15.8453C20.7048 15.9858 20.6256 16.1763 20.625 16.375V17.875H17.46C17.2093 17.875 16.9657 17.9587 16.768 18.113C16.5703 18.2672 16.4298 18.483 16.3687 18.7263L16.14 19.6487L15.36 22.375H13.875C13.5769 22.3759 13.2913 22.4947 13.0805 22.7055C12.8697 22.9163 12.7509 23.2019 12.75 23.5V24.25C12.7506 24.44 12.7994 24.6267 12.8919 24.7926C12.9844 24.9586 13.1175 25.0983 13.2788 25.1987C12.9398 25.5471 12.75 26.0139 12.75 26.5V31C12.7505 31.1573 12.7842 31.3128 12.8488 31.4562C12.9134 31.5996 13.0075 31.7279 13.125 31.8325V33.25C13.1259 33.5481 13.2447 33.8337 13.4555 34.0445C13.6663 34.2553 13.9519 34.3741 14.25 34.375H17.25C17.5481 34.3741 17.8337 34.2553 18.0445 34.0445C18.2553 33.8337 18.3741 33.5481 18.375 33.25V32.125H29.625V33.25C29.6259 33.5481 29.7447 33.8337 29.9555 34.0445C30.1663 34.2553 30.4519 34.3741 30.75 34.375H33.75C34.0481 34.3741 34.3337 34.2553 34.5445 34.0445C34.7553 33.8337 34.8741 33.5481 34.875 33.25V31.8325C34.9925 31.7279 35.0866 31.5996 35.1512 31.4562C35.2158 31.3128 35.2495 31.1573 35.25 31V26.5C35.25 26.0139 35.0602 25.5471 34.7213 25.1987C34.8825 25.0983 35.0156 24.9586 35.1081 24.7926C35.2006 24.6267 35.2494 24.44 35.25 24.25ZM21.375 16.375H26.625V17.875H21.375V16.375ZM17.0963 18.91C17.1163 18.8287 17.1631 18.7565 17.229 18.7048C17.2949 18.6532 17.3763 18.6251 17.46 18.625H30.54C30.6237 18.6251 30.7051 18.6532 30.771 18.7048C30.8369 18.7565 30.8836 18.8287 30.9037 18.91L31.02 19.375H16.98L17.0963 18.91ZM16.7812 20.125H31.2188L32.5012 24.625H21.7162C21.6281 24.1009 21.3571 23.6251 20.9514 23.2819C20.5456 22.9387 20.0314 22.7504 19.5 22.7504C18.9686 22.7504 18.4544 22.9387 18.0486 23.2819C17.6429 23.6251 17.3719 24.1009 17.2838 24.625H15.4987L16.7812 20.125ZM20.9475 24.625H18.0525C18.1344 24.3032 18.3211 24.0179 18.5833 23.8141C18.8454 23.6103 19.168 23.4997 19.5 23.4997C19.832 23.4997 20.1546 23.6103 20.4167 23.8141C20.6789 24.0179 20.8656 24.3032 20.9475 24.625ZM13.5 23.5C13.5 23.4005 13.5395 23.3052 13.6098 23.2348C13.6802 23.1645 13.7755 23.125 13.875 23.125H15.1463L14.7188 24.625H13.875C13.7755 24.625 13.6802 24.5855 13.6098 24.5152C13.5395 24.4448 13.5 24.3495 13.5 24.25V23.5ZM17.625 33.25C17.625 33.3495 17.5855 33.4448 17.5152 33.5152C17.4448 33.5855 17.3495 33.625 17.25 33.625H14.25C14.1505 33.625 14.0552 33.5855 13.9848 33.5152C13.9145 33.4448 13.875 33.3495 13.875 33.25V32.125H17.625V33.25ZM34.125 33.25C34.125 33.3495 34.0855 33.4448 34.0152 33.5152C33.9448 33.5855 33.8495 33.625 33.75 33.625H30.75C30.6505 33.625 30.5552 33.5855 30.4848 33.5152C30.4145 33.4448 30.375 33.3495 30.375 33.25V32.125H34.125V33.25ZM34.5 31C34.5 31.0995 34.4605 31.1948 34.3902 31.2652C34.3198 31.3355 34.2245 31.375 34.125 31.375H13.875C13.7755 31.375 13.6802 31.3355 13.6098 31.2652C13.5395 31.1948 13.5 31.0995 13.5 31V30.625H34.5V31ZM34.5 29.875H13.5V26.5C13.5009 26.2019 13.6197 25.9163 13.8305 25.7055C14.0413 25.4947 14.3269 25.3759 14.625 25.375H33.375C33.6731 25.3759 33.9587 25.4947 34.1695 25.7055C34.3803 25.9163 34.4991 26.2019 34.5 26.5V29.875ZM34.5 24.25C34.5 24.3495 34.4605 24.4448 34.3902 24.5152C34.3198 24.5855 34.2245 24.625 34.125 24.625H33.2812L32.8538 23.125H34.125C34.2245 23.125 34.3198 23.1645 34.3902 23.2348C34.4605 23.3052 34.5 23.4005 34.5 23.5V24.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-poppins text-base font-medium text-blue-1">
                    Choose Destination
                  </h5>
                  <span className="font-poppins text-base font-normal text-blue-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex self-center justify-center w-full md:w-2/5">
            <div className="w-121.25 h-auto relative">
              <img
                src={bookTripImg}
                className="w-full h-full bg-cover object-cover z-10"
                alt="book trip"
              />
              <div className="absolute w-40 h-40 lg:w-88.5 lg:h-88.5 bg-light-blue-1 -top-14.75 right-17.75 filter blur-37.5 -z-1 bg-opacity-80"></div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row mb-24">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <span className="font-poppins text-base lg:text-lg font-semibold uppercase text-blue-1">
              Testimonials
            </span>
            <h3 className="font-volkhov text-4xl lg:text-5xl font-bold text-blue-5">
              What people say <br className="hidden md:block" />
              about Us.
            </h3>
          </div>
          <Swiper
            direction="vertical"
            navigation={true}
            className="w-full md:w-2/5 h-61.25 relative mt-6 md:mt-0"
          >
            <SwiperSlide className="w-126 py-7 px-8">
              <p className="font-poppins text-sm lg:text-base text-blue-1 font-medium mb-8">
                “On the Windows talking painted pasture yet its <br /> express
                parties use. Sure last upon he same as
                <br /> knew next. Of believed or diverted no.”
              </p>
              <h5 className="font-poppins text-base lg:text-lg text-blue-1 font-semibold mb-1">
                Mike Taylor
              </h5>
              <span className="font-poppins text-sm text-blue-1 font-medium">
                Lahore, Pakistan
              </span>
            </SwiperSlide>
            <SwiperSlide className="w-126 py-7 px-8">
              <p className="font-poppins text-sm lg:text-base text-blue-1 font-medium mb-8">
                “On the Windows talking painted pasture yet its <br /> express
                parties use. Sure last upon he same as
                <br /> knew next. Of believed or diverted no.”
              </p>
              <h5 className="font-poppins text-lg text-blue-1 font-semibold mb-1">
                Mike Taylor
              </h5>
              <span className="font-poppins text-sm text-blue-1 font-medium">
                Lahore, Pakistan
              </span>
            </SwiperSlide>
            <SwiperSlide className="w-126 py-7 px-8">
              <p className="font-poppins text-sm lg:text-base text-blue-1 font-medium mb-8">
                “On the Windows talking painted pasture yet its <br /> express
                parties use. Sure last upon he same as
                <br /> knew next. Of believed or diverted no.”
              </p>
              <h5 className="font-poppins text-lg text-blue-1 font-semibold mb-1">
                Mike Taylor
              </h5>
              <span className="font-poppins text-sm text-blue-1 font-medium">
                Lahore, Pakistan
              </span>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="mb-24">
          <div className="flex flex-wrap items-center gap-x-14 justify-center">
            <div className="cursor-pointer">
              <img
                src={client1}
                className="w-full h-auto filter saturate-0 hover:saturate-100"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={client2}
                className="w-full h-auto filter saturate-0 hover:saturate-100"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={client3}
                className="w-full h-auto filter saturate-0 hover:saturate-100"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={client4}
                className="w-full h-auto filter saturate-0 hover:saturate-100"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={client5}
                className="w-full h-auto filter saturate-0 hover:saturate-100"
              />
            </div>
          </div>
        </section>

        <section className="px-16 py-8 sm:py-8 md:px-36 md:py-16 mb-20 md:mb-44 rounded-bl-5 rounded-br-5 rounded-tr-5 rounded-tl-32.25 subscribe relative">
          <img
            src={subLogo}
            className="absolute w-12 h-12 md:w-auto md:h-auto right-0 transform -translate-y-1/4 translate-x-1/4 top-0"
          />
          <h3 className="text-center font-poppins text-sm sm:text-base md:text-3xl font-semibold text-blue-1 lg:leading-13.5 mb-20">
            Subscribe to get information, latest news and other <br />
            interesting offers about Jadoo
          </h3>
          <div className="flex gap-x-6 max-w-156.25 mx-auto">
            <div className="relative w-full">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute transform -translate-y-1/2 top-1/2 left-9"
              >
                <path
                  d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                  stroke="#39425D"
                  strokeLinecap="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="20"
                  height="17"
                  rx="4.5"
                  stroke="#39425D"
                />
              </svg>

              <input
                className="py-3 pl-16 pr-3 md:py-6 md:pl-20 md:pr-9 w-full rounded-2.5 outline-none"
                placeholder="Your Email"
              />
            </div>
            <button className="py-1 md:py-5 px-2 sm:px-6 md:px-12 bg-button-subscribe rounded-2.5 font-semibold text-sm sm:text-base md:text-lg font-open-sans text-white">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-24 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-footer-grid mb-20 gap-y-4 md:gap-y-0">
          <div>
            <img src={footerLogo} className="w-38 h-auto mb-3" />
            <span className="font-poppins text-xs font-medium text-blue-1">
              Book your trip in minute, get full <br /> Control for much longer.
            </span>
          </div>
          <div>
            <h3 className="mb-4 md:mb-8 font-bold text-md md:text-xl">
              Company
            </h3>
            <ul className="flex flex-col gap-y-1 md:gap-y-3">
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                About
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Career
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Mobile
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 md:mb-8 font-bold text-md md:text-xl">
              Contact
            </h3>
            <ul className="flex flex-col gap-y-1 md:gap-y-3">
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Help/FAQ
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Press
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Affiliates
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 md:mb-8 font-bold text-md md:text-xl">More</h3>
            <ul className="flex flex-col gap-y-1 md:gap-y-3">
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Airlinefees
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Airline
              </li>
              <li className="text-blue-1 font-poppins text-base md:text-md cursor-pointer">
                Low fare tips
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-7 flex gap-x-6 justify-center">
              <a className="cursor-pointer">
                <div className="w-10 h-10 shadow-logo rounded-full flex items-center justify-center">
                  <img src={fbLogo} />
                </div>
              </a>
              <a className="cursor-pointer">
                <div className="w-10 h-10 shadow-logo rounded-full flex items-center justify-center bg-conic-gradient">
                  <img src={igLogo} />
                </div>
              </a>
              <a className="cursor-pointer">
                <div className="w-10 h-10 shadow-logo rounded-full flex items-center justify-center">
                  <img src={twitterLogo} />
                </div>
              </a>
            </div>
            <span className="font-poppins text-blue-1 text-xl font-medium block mb-4 text-center">
              Discover our app
            </span>
            <div className="flex gap-x-2 justify-center">
              <img src={googleLogo} className="w-26.75 cursor-pointer" />
              <img src={appleLogo} className="w-26.75 cursor-pointer" />
            </div>
          </div>
        </div>
        <span className="text-blue-1 font-poppins font-medium text-center text-sm block">
          All rights reserved@jadoo.co
        </span>
      </footer>
    </div>
  );
};

export default IndexPage;
