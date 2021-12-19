import { useLayoutEffect } from 'react';

export default function useToggleMenu() {
  console.log('use toggle menu');
  useLayoutEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        console.log(navMenu, 'nav toggle clicked');
        navMenu.classList.remove('-top-150%');
        navMenu.classList.add('show-menu');

        document.body.classList.remove('show-scroll');
        document.body.classList.add('hide-scroll');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        console.log('nav close cliked');
        navMenu.classList.add('-top-150%');
        navMenu.classList.remove('show-menu');

        document.body.classList.remove('hide-scroll');
        document.body.classList.add('show-scroll');
      });
    }

    return () => {};
  });
}
