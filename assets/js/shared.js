const element = (selector, parent = document) => parent.querySelector(selector);
const elementAll = (selector, parent = document) => parent.querySelectorAll(selector);

function toggleClass(selector, action, className, newClassName = '',) {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  switch (action) {
    case 'add':
      element.classList.add(className);
      break;
    case 'remove':
      element.classList.remove(className);
      break;
    case 'toggle':
      element.classList.toggle(className);
      break;
    case 'replace':
      if (newClassName) {
        element.classList.replace(className, newClassName);
      }
      break;
  }
}

function createSwiperSlider() {
  return new Swiper("#slider", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,

    },
    // If we need pagination
    pagination: {
      el: '#slider-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: "#slider-next",
      prevEl: "#slider-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: '#slider-scrollbar',
    }
  });
}
scrollCostume = (selector, parent = document, speed = 0, next = null, nextContainer = null, prev = null, prevContainer = null,) => {
  const scrollContainer = parent.querySelector(selector)
  let isDown = false;
  let startX;
  let scrollLeft;
  scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });
  scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
  });
  scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
    updateButtons()
  });
  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - (startX + speed)); // سرعت اسکرول
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
  if (next) {
    next.addEventListener('click', (e) => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft -= 300;
      setTimeout(() => {
        scrollContainer.style.scrollBehavior = 'auto';
      }, 500);
      updateButtons()
    });
  }
  if (prev) {
    prev.addEventListener('click', (e) => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft += 300;
      setTimeout(() => {
        scrollContainer.style.scrollBehavior = 'auto';
      }, 500);
      updateButtons()
    });
  }
  const updateButtons = () => {
    if (next) {
      const currentWidth = Math.abs(scrollContainer.scrollLeft - scrollContainer.clientWidth);
      if (currentWidth >= scrollContainer.scrollWidth) {
        nextContainer.setAttribute('style', 'opacity: 0; visibility: hidden;');
      }else {
        console.log(currentWidth)
        nextContainer.setAttribute('style', 'opacity: 1; visibility: visible;');
      }
    }
    if (prev) {
      if (scrollContainer.scrollLeft === 0) {
        prevContainer.setAttribute('style', 'opacity: 0; visibility: hidden;');

      }else {
        prevContainer.setAttribute('style', 'opacity: 1; visibility: visible;');
      }
    }
  }
  updateButtons()
}
