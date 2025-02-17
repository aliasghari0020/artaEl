const swiper = new Swiper('#special-blog-slider', {
  // Default parameters
  slidesPerView: 1.2,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    420: {
      slidesPerView: 1.6,
      spaceBetween: 16
    },
    490: {
      slidesPerView: 2.2,
      spaceBetween: 16
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 2.6,
      spaceBetween: 16
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 16
    }

  },
  // Navigation arrows
  navigation: {
    nextEl: '.next__special-blog-slider',
    prevEl: '.prev__special-blog-slider',
  },


});