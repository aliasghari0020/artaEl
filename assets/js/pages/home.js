
// scroll x story  in shared
const slider = createSwiperSlider();
function updateSlidesPerView() {
  const containerWidth = document.querySelector('.a').clientWidth;
  const slideWidth = 289; // عرض هر اسلاید
  const spaceBetween = 0; // فاصله بین اسلایدها
  const slidesPerView = (containerWidth + spaceBetween) / (slideWidth + spaceBetween);

  swiper5.params.slidesPerView = slidesPerView;
  swiper5.update();
}

var swiper5 = new Swiper('#product-crousle', {
  freeMode: true,
  navigation: {
    nextEl: '.special-next ',
    prevEl: '.special-prev',
  },
  on: {
    init: function () {
      updateNavigationOpacity(this)
    },
    slideChange: function () {
      updateNavigationOpacity(this)
    },
    reachEnd: function () {
      document.querySelector('.special-next').style.opacity = 0;
    },
    fromEdge: function () {
      document.querySelector('.special-next').style.opacity = 1;
    }
  }
});

function updateNavigationOpacity(swiper) {
  if (swiper.isBeginning) {
    document.querySelector('.special-prev').style.opacity = 0;
  } else {
    document.querySelector('.special-prev').style.opacity = 1;
  }
  if (swiper.isEnd) {
    document.querySelector('.special-next').style.opacity = 0;
  } else {
    document.querySelector('.special-next').style.opacity = 1;
  }
}

window.addEventListener('resize', updateSlidesPerView);
updateSlidesPerView(); // برای تنظیم اولیه


function updateGridBorders() {
  const containers = document.querySelectorAll('.dynamic-border ');
  containers.forEach(container => {
    const items = container.querySelectorAll('.dynamic-border .card');
    const columns = getComputedStyle(container).gridTemplateColumns.split(' ').length;
    const rows = Math.ceil(items.length / columns);
    items.forEach(item => {
      item.classList.remove('border-bottom-0');
      item.classList.remove('border-left-0');
    });

    for (let i = items.length - columns; i < items.length; i++) {
      items[i].classList.add('border-bottom-0');
    }

    for (let i = columns - 1; i < items.length; i += columns) {
      if ((i + 1) % columns === 0) {
        items[i].classList.add('border-start-0');
      }
    }
  })
}
window.addEventListener('resize', updateGridBorders);


updateGridBorders();



document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.grid-container');
  const items = container.querySelectorAll('.category-size');
  const showMorContainer = document.querySelector('.show-more-container');
  const showMorBtn = document.querySelector('#show-more');

  function updateGrid() {
    const columns = getComputedStyle(container).gridTemplateColumns.split(' ').length;

    items.forEach((item, index) => {
      if (columns < 3 && index >= 6) {
        item.classList.add('d-none');
      } else {
        item.classList.remove('d-none');
      }
    });

    if (columns < 3 && items.length > 6) {
      showMorContainer.classList.remove('d-none');
    } else {
      showMorContainer.classList.add('d-none');
    }
  }

  showMorBtn.addEventListener('click', function() {
    items.forEach(item => item.classList.remove('d-none'));
    showMorContainer.classList.add('d-none');
  });

  updateGrid();
});