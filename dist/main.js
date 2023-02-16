'use strict';

const body = document.body;
const featured = document.querySelector('.featured');
const menuBtn = document.querySelector('.nav__menu-button');
const menuList = document.querySelector('.nav__menu');
const overlay = document.querySelector('.overlay');
console.log(overlay);

let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

function toggleMenu() {
  // if menu is open
  menuBtn?.classList.toggle('open-menu');
  // prevent scrolling
  body.classList.toggle('stop-scrolling');
  // add dark overlay behind
  overlay.classList.toggle('overlay-hidden');

  if (menuBtn?.classList.contains('open-menu')) {
    // When scroll is removed, prevent content from jumping
    // to fill in the space
    featured.style.marginRight = scrollbarWidth;
  } else {
    // otherwise remove margin
    featured.style.marginRight = '';
  }
}

function toggleMobileClass() {
  if (window.innerWidth <= 599) {
    menuList?.classList.add('mobile-menu');
  } else {
    menuList?.classList.remove('mobile-menu');
  }
}

toggleMobileClass();
menuBtn.addEventListener('click', toggleMenu);
overlay?.addEventListener('click', toggleMenu);
window.addEventListener('resize', toggleMobileClass);