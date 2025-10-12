import Swiper from 'swiper';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const swiper = new Swiper(".mySwiper", {
  modules: [Pagination],
  slidesPerView: 2,       // show 2 slides + partial next one
  spaceBetween: 30,          // space between slides
  centeredSlides: false,     // start from left
  loop: false,               // no infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {                      // mobile
      slidesPerView: 1.2,     // show 1 slide + small part of next
      spaceBetween: 20,
    },
    768: {                    // tablet/desktop
      slidesPerView: 2.2,     // show 2 slides + partial next
      spaceBetween: 30,
    },
    1200: {                   // large desktop
      slidesPerView: 2.2,     // show 3 slides + partial next
      spaceBetween: 25,
    },
     1350: {                   // large desktop
      slidesPerView: 2.2,     // show 3 slides + partial next
      spaceBetween: -55,
    },
    1700: {                   // large desktop
    slidesPerView: 2.2,     // show 3 slides + partial next
    spaceBetween: -155,
    },
  },
});