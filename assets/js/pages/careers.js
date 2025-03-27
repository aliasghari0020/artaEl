if (document.querySelector('.careers')) {


  function updateSlidesPerView(container, slide, slider) {
    const containerWidth = document.querySelector(container).clientWidth;
    const slideWidth = slide; // عرض هر اسلاید
    const spaceBetween = 24; // فاصله بین اسلایدها
    const slidesPerView = (containerWidth + spaceBetween) / (slideWidth + spaceBetween);
    slider.params.slidesPerView = slidesPerView;
    slider.update();
  }


  const swiper12 = new Swiper("#personnel-slider", {
    centeredSlides: true,
    spaceBetween: 24,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });


  const swiper33 = new Swiper('.mySwiper2', {
    loop: true, // فعال کردن لوپ
    speed: 10000, // سرعت حرکت (به میلی‌ثانیه)
    spaceBetween: 24,
    allowTouchMove: false, // غیرفعال کردن حرکت دستی

    autoplay: {
      delay: 0, // بدون تاخیر
      disableOnInteraction: false, // ادامه دادن اتوپلی پس از تعامل کاربر
    },
  });

  const swiper34 = new Swiper('.mySwiper3', {
    loop: true, // فعال کردن لوپ
    speed: 10000, // سرعت حرکت (به میلی‌ثانیه)
    allowTouchMove: false, // غیرفعال کردن حرکت دستی
    spaceBetween: 24,
    autoplay: {
      delay: 0, // بدون تاخیر
      disableOnInteraction: false, // ادامه دادن اتوپلی پس از تعامل کاربر
    },

  });
  const size = document.querySelector('body').clientWidth
  if (size > 1024) {
    updateSlidesPerView('.slide-container-1', 598, swiper33)
    updateSlidesPerView('.slide-container-2', 598, swiper34)
  } else {
    updateSlidesPerView('.slide-container-1', 250, swiper33)
    updateSlidesPerView('.slide-container-2', 250, swiper34)
  }


  window.addEventListener('resize', () => {
    const size = document.querySelector('body').clientWidth
    if (size > 1024) {
      updateSlidesPerView('.slide-container-1', 598, swiper33)
      updateSlidesPerView('.slide-container-2', 598, swiper34)
    } else {
      updateSlidesPerView('.slide-container-1', 250, swiper33)
      updateSlidesPerView('.slide-container-2', 250, swiper34)
    }
  });

  const addAnimationWork = () => {
    window.addEventListener('scroll', function () {
      const container = document.querySelector('.steps-container ');
      const steps = container.querySelectorAll('.step');
      const lines = container.querySelectorAll('.line-container');
      let rect = container.getBoundingClientRect();
      lines.forEach((line) => {
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const a = line.querySelector('div')
          a.classList.add('action');
        }
      })
      steps.forEach((step) => {
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          step.classList.add('action');
        }
      })
    });
  }

  addAnimationWork()
}