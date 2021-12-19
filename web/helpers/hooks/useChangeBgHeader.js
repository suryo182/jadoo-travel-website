import { useLayoutEffect } from 'react';

export default function useChangeBgHeader() {
  useLayoutEffect(() => {
    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
      console.log('scroll header function');
      const header = document.getElementById('header');
      console.log(header, '<<< header');
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 50) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
    }

    window.addEventListener('scroll', scrollHeader);

    return () => {};
  });
}
