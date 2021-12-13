import { useLayoutEffect } from 'react';

export default function useToggleMenu() {
  useLayoutEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');

        document.body.classList.remove('show-scroll');
        document.body.classList.add('hide-scroll');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');

        document.body.classList.remove('hide-scroll');
        document.body.classList.add('show-scroll');
      });
    }

    return () => {};
  });
}
