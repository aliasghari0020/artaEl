if(document.querySelector('.video-list')){
  scrollCostume('.video-list');
}
const slider = createSwiperSlider('#product-slider', '#slider-prev', '#slider-next', '#slider-pagination', '#slider-scrollbar');

// scroll x story  in shared
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

// مثال: ایجاد چند اسلایدر مختلف
if(document.querySelector("#product-crousle")){
  const swiper1 = initSwiper('#product-crousle', '.special-next', '.special-prev', 289);
  const swiper2 = initSwiper('#another-crousle', '.another-next', '.another-prev', 289);
}
document.addEventListener('DOMContentLoaded', function () {
  const selectSelected = document.querySelector('.select-selected');
  const selectItems = document.querySelector('.select-items');
  const options = document.querySelectorAll('.option');
  const text = selectSelected.querySelector('p');
  const icon = selectSelected.querySelector('.icon-select')
  selectSelected.addEventListener('click', function () {
    selectItems.classList.toggle('select-hide');
    icon.classList.toggle('rote')
  });

  options.forEach(function (option) {
    option.addEventListener('click', function () {
      text.textContent = option.textContent;
      selectItems.classList.add('select-hide');
      icon.classList.remove('rote')
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-select')) {
      selectItems.classList.add('select-hide');
      icon.classList.remove('rote')
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const pieCharts = document.querySelector('.pie-chart');
  const lineCharts = document.querySelectorAll('.line-chart');

  let totalLinePercentage = 0;
  let lineChartCount = lineCharts.length;

  lineCharts.forEach(line => {
    const lineActive = parseFloat(line.getAttribute('data-percentage'));
    const text = line.querySelector('.number');
    const active = line.querySelector('.active');
    let color;
    text.innerHTML = lineActive;
    if (lineActive <= 25) {
      color = '#FF4D4F';
    } else if (lineActive <= 50) {
      color = '#FAAD14';
    } else if (lineActive <= 75) {
      color = '#1AC48B';
    } else {
      color = '#1677FF';
    }

    active.style.background = color;
    active.style.width = `${lineActive}%`;

    totalLinePercentage += lineActive;
  });

  const averageLinePercentage = totalLinePercentage / lineChartCount;
  const text = pieCharts.querySelector('.text-chart');
  let color;
  text.innerHTML = averageLinePercentage;
  if (averageLinePercentage <= 25) {
    color = '#FF4D4F';
  } else if (averageLinePercentage <= 50) {
    color = '#FAAD14';
  } else if (averageLinePercentage <= 75) {
    color = '#1AC48B';
  } else {
    color = '#1677FF';
  }

  pieCharts.style.background = `conic-gradient(${color} calc(${averageLinePercentage} * 1%), #F4F5F7 0%)`;

});

const filterTable = () => {
  const items = document.querySelectorAll('tbody tr');
  const showBtn = document.querySelector('.show-all-item-table ');
  const arrow = showBtn.querySelector('.arrow');
  const textShowBtn = showBtn.querySelector("p")
  items.forEach((item, index) => {
    if (index - 1 >= 6) {
      showBtn.classList.remove('d-none');
      showBtn.classList.add('d-flex');
      item.classList.add('d-none')
      showBtn.addEventListener('click', () => {
        item.classList.toggle('d-none')
        arrow.classList.toggle('active')
        if (arrow.classList.contains('active')) {
          textShowBtn.innerHTML = 'مشخصات کم تر'

        } else {
          textShowBtn.innerHTML = 'همه مشخصات'
        }
      })
    }
  })
}
const filterContent = () => {
  const content = document.querySelector('.content-container');
  const btn = document.querySelector('.show-btn-content');
  if (window.innerWidth <= 1024 && content.clientHeight) {
    content.style.height = '256px';
    content.style.overflowY = 'hidden';
    btn.classList.remove('d-none');
    btn.classList.add('d-flex');
    btn.addEventListener('click', () => {
      content.style.height = 'auto';
      content.style.overflowY = 'auto';
      btn.classList.remove('d-flex');
      btn.classList.add('d-none');
    })
  }
}

const activeItemNotifyModal = (id) => {
  const items = document.querySelectorAll(id);
  items.forEach((item) => {
    const input = item.querySelector('.checkbox-custom')
    item.addEventListener('click', () => {
      input.checked = !input.checked
      if (input.checked) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })

  })
}

const selectEmoji = () => {
  const emojis = document.querySelectorAll('.emoji');
  emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
      removeAll()
      emoji.classList.toggle('active');
    })
  })

  const removeAll = () => {
    emojis.forEach(emoji => {
        emoji.classList.remove('active')
    })
  }
}
// if( document.querySelectorAll('.emoji')){
//   selectEmoji()
//   activeItemNotifyModal('#notifyModal .item')
//   activeItemNotifyModal('#notifyMobile .item')
//   filterContent()
//   filterTable()
// }
