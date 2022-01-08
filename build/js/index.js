'use strict';

var menu = document.querySelector('.js-menu');
var menuButtonOpen = document.querySelector('.js-menu-open');
var menuButtonClose = menu.querySelector('.js-menu-close');
menuButtonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.add('menu_open');
});
menuButtonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.remove('menu_open');
});
//# sourceMappingURL=index.js.map
