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

const page = document.querySelector('.page')
const burger = document.querySelector('.upperMenu__icon-burger')
const popupMenu = document.querySelector('.popup-menu')
const popupFeedback = document.querySelector('.popup-feedback')
const popupCall = document.querySelector('.popup-call')
const cancelMenu = popupMenu.querySelector('.header__icon-cancel')
const cancelFeedback = popupFeedback.querySelector('.feedback-wraper__icon-cancel')
const cancelCall = popupCall.querySelector('.call-wraper__icon-cancel')
const chat = popupMenu.querySelector('.contact__icon-chat')
const call = popupMenu.querySelector('.contact__icon-call')
const brands = document.querySelector('.brands__content')
const technic = document.querySelector('.technic__content')
const brandsExpand = document.querySelector('.brands__expand')
const technicExpand = document.querySelector('.technic__expand')
const brandsText = brandsExpand.querySelector('.expand__text')
const technicText = technicExpand.querySelector('.expand__text')
const pageWidth = document.documentElement.scrollWidth
const styles = window.getComputedStyle(popupMenu);

page.addEventListener('mousedown', () => {
  if (styles.display == 'flex') {
    if (pageWidth >= 768) {
    if (pageWidth < 1366) {
    popupMenu.classList.remove('popup-menu--open')
    popupMenu.classList.add('popup-menu--close')
  }
    page.style.opacity = '1'
    popupMenu.style.opacity = '1'
    popupFeedback.classList.remove('popup-feedback--open')
    popupFeedback.classList.add('popup-feedback--close')
    popupCall.classList.remove('popup-call--open')
    popupCall.classList.add('popup-call--close')
    page.style.position = 'relative'
    page.style.width = 'auto'
    }
  }
  
})

popupMenu.addEventListener('mousedown', () => {
  if (styles.display == 'flex') {
    if (pageWidth >= 1366) {
    
    page.style.opacity = '1'
    popupMenu.style.opacity = '1'
    popupFeedback.classList.remove('popup-feedback--open')
    popupFeedback.classList.add('popup-feedback--close')
    popupCall.classList.remove('popup-call--open')
    popupCall.classList.add('popup-call--close')
    }
  }
})


burger.addEventListener('click', () => {
  page.style.opacity = '0.0395'
  page.style.position = 'fixed'
  page.style.width = '100%'
  popupMenu.classList.add('popup-menu--open')
  popupMenu.classList.remove('popup-menu--close')
})

cancelMenu.addEventListener('click', () => {
  page.style.opacity = '1'
  popupMenu.classList.remove('popup-menu--open')
  popupMenu.classList.add('popup-menu--close')
  popupFeedback.classList.remove('popup-feedback--open')
  popupFeedback.classList.add('popup-feedback--close')
  popupCall.classList.remove('popup-call--open')
  popupCall.classList.add('popup-call--close')
  page.style.position = 'relative'
  page.style.width = 'auto'
})




chat.addEventListener('click', () => {
  page.style.opacity = '0.0395'
  page.style.position = 'fixed'
  page.style.width = '100%'
  popupFeedback.classList.add('popup-feedback--open')
  popupFeedback.classList.remove('popup-feedback--close')
  popupCall.classList.remove('popup-call--open')
  popupCall.classList.add('popup-call--close')
  if (pageWidth >= 1366) {
    page.style.opacity = '0.0395'
    popupMenu.style.opacity = '0.0395'
  }
})

cancelFeedback.addEventListener('click', () => {
  popupFeedback.classList.remove('popup-feedback--open')
  popupFeedback.classList.add('popup-feedback--close')
  if (pageWidth >= 1366) {
    page.style.opacity = '1'
    popupMenu.style.opacity = '1'
    page.style.position = 'relative'
    page.style.width = 'auto'
  }
})

call.addEventListener('click', () => {
  page.style.opacity = '0.0395'
  page.style.position = 'fixed'
  page.style.width = '100%'
  popupCall.classList.add('popup-call--open')
  popupCall.classList.remove('popup-call--close')
  popupFeedback.classList.remove('popup-feedback--open')
  popupFeedback.classList.add('popup-feedback--close')
  if (pageWidth >= 1366) {
    page.style.opacity = '0.0395'
    popupMenu.style.opacity = '0.0395'
  }
})

cancelCall.addEventListener('click', () => {
  popupCall.classList.remove('popup-call--open')
  popupCall.classList.add('popup-call--close')
  if (pageWidth >= 1366) {
    page.style.opacity = '1'
    popupMenu.style.opacity = '1'
    page.style.position = 'relative'
    page.style.width = 'auto'
  }
})

brandsExpand.addEventListener('click', () => {
  if (brandsText.textContent === 'Скрыть') {
    brands.style.height = '160px';
    brandsText.textContent = 'Показать все';
  } else {
    brandsText.textContent = 'Скрыть';
    brands.style.height = '100%';
    };
})

technicExpand.addEventListener('click', () => {
  if (technicText.textContent === 'Скрыть') {
    technic.style.height = '160px';
    technicText.textContent = 'Показать все';
  } else {
    technicText.textContent = 'Скрыть';
    technic.style.height = '100%';
    };
})
