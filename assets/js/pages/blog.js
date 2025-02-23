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

function initSwiper(containerSelector, nextButtonSelector, prevButtonSelector, slideWidth) {
  function updateSlidesPerView() {
    const containerWidth = document.querySelector(containerSelector).clientWidth;
    const spaceBetween = 0; // فاصله بین اسلایدها
    const slidesPerView = (containerWidth + spaceBetween) / (slideWidth + spaceBetween);
    swiper.params.slidesPerView = slidesPerView;
    swiper.update();
  }

  const swiper = new Swiper(containerSelector, {
    freeMode: true,
    navigation: {
      nextEl: nextButtonSelector,
      prevEl: prevButtonSelector,
    },
    on: {
      init: function () {
        updateNavigationOpacity(this)
      },
      slideChange: function () {
        updateNavigationOpacity(this)
      },
      reachEnd: function () {
        document.querySelector(nextButtonSelector).style.opacity = 0;
      },
      fromEdge: function () {
        document.querySelector(nextButtonSelector).style.opacity = 1;
      }
    }
  });

  function updateNavigationOpacity(swiper) {
    if (swiper.isBeginning) {
      document.querySelector(prevButtonSelector).style.opacity = 0;
    } else {
      document.querySelector(prevButtonSelector).style.opacity = 1;
    }
    if (swiper.isEnd) {
      document.querySelector(nextButtonSelector).style.opacity = 0;
    } else {
      document.querySelector(nextButtonSelector).style.opacity = 1;
    }
  }

  window.addEventListener('resize', updateSlidesPerView);
  updateSlidesPerView(); // برای تنظیم اولیه

  return swiper;
}

const swiper1 = initSwiper('#product-crousle', '.special-next', '.special-prev', 289);
