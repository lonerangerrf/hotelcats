'use strict'

const menu = document.querySelector('.js-menu')
const menuButtonOpen = document.querySelector('.js-menu-open')
const menuButtonClose = menu.querySelector('.js-menu-close')

menuButtonOpen.addEventListener('click', function(evt) {
  evt.preventDefault()
  menu.classList.add('menu_open')
})

menuButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault()
  menu.classList.remove('menu_open')
})
