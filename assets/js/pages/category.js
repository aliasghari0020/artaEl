const slider = createSwiperSlider();
function updateSlidesPerView() {
  const containerWidth = document.querySelector('#input-chips').clientWidth;
  const slide = elementAll('#input-chips .swiper-slide' )
  slide.forEach((e) => {
    const span = element('span' , e)
     let width = span.offsetWidth +26;
    e.style.width = `${width}px`;
  })
  inputChip.update();
}
const inputChip = new Swiper('#input-chips', {
  freeMode: true,
  spaceBetween:16,
  slidesPerView:'auto',
  navigation: {
    nextEl: '.next-btn__input-chips',
    prevEl: '.prev-container__input-chip',
  },
  on: {
    init: function () {
      updateNavigationOpacity(this)
    },
    slideChange: function () {
      updateNavigationOpacity(this)
    },
    reachEnd: function () {
      toggleClass('.next-container__input-chip' , 'remove' , 'd-lg-flex')
    },
    fromEdge: function () {
      toggleClass('.next-container__input-chip' , 'add' , 'd-lg-flex')
      toggleClass('.prev-container__input-chip' , 'add' , 'd-lg-flex')

    }
  }
});
function updateNavigationOpacity(swiper) {
  if (swiper.isBeginning) {
    toggleClass('.prev-container__input-chip' , 'remove' , 'd-lg-flex')
  }
}
window.addEventListener('resize', updateSlidesPerView);
updateSlidesPerView(); // برای تنظیم اولیه

function updateGridBorders() {
  const container = element(".product-container");
    const items = elementAll('.card' , container);
    const columns = getComputedStyle(container).gridTemplateColumns.split(' ').length;
    items.forEach(item => {
      item.classList.add('border-top-0');
      item.classList.add('border-end-0');
    });
    for (let i = 1; i < items.length; i += columns) {
        items[i-1].classList.remove('border-end-0');
    }
}
window.addEventListener('resize', updateGridBorders);


updateGridBorders();