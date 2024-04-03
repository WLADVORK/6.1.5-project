import { Navigation, Pagination } from 'swiper/modules'
import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'

import '../scss/style.scss'
import Swiper from 'swiper'
if (window.innerWidth <= 768) {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],

    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination'
    }
  })
}

const burger = document.querySelector('.upperMenu__icon-burger')
const popupMenu = document.querySelector('.popup-menu')
const cancel = popupMenu.querySelector('.header__icon-cancel')

burger.addEventListener('click', () => {
  popupMenu.style.display = 'flex';
})

cancel.addEventListener('click', () => {
  popupMenu.style.display = 'none';
})

console.log('Works!')
