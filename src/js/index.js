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
const popupFeedback = document.querySelector('.popup-feedback')
const popupCall = document.querySelector('.popup-call')
const cancelMenu = popupMenu.querySelector('.header__icon-cancel')
const cancelFeedback = popupFeedback.querySelector('.feedback-wraper__icon-cancel')
const cancelCall = popupCall.querySelector('.call-wraper__icon-cancel')
const chat = popupMenu.querySelector('.contact__icon-chat')
const call = popupMenu.querySelector('.contact__icon-call')


burger.addEventListener('click', () => {
  popupMenu.style.display = 'flex';
})

cancelMenu.addEventListener('click', () => {
  popupMenu.style.display = 'none';
})

chat.addEventListener('click', () => {
  popupFeedback.style.display = 'flex';
})

cancelFeedback.addEventListener('click', () => {
  popupFeedback.style.display = 'none';
})

call.addEventListener('click', () => {
  popupCall.style.display = 'flex';
})

cancelCall.addEventListener('click', () => {
  popupCall.style.display = 'none';
})


console.log('Works!')
