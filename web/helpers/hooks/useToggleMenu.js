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
        navMenu.style.top = '0';

        document.documentElement.style.overflow = 'hidden';
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        console.log('nav close cliked');
        navMenu.classList.remove('show-menu');
        navMenu.style.top = '-150%';

        document.documentElement.style.overflow = 'auto';
      });
    }

    return () => {};
  });
}
