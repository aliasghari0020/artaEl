const container = element("#mega-menu");
const displayBtn = element('#mega-btn');
const menuItems = elementAll(".menu-level-1", container);
const slides = elementAll('.swiper-slide')
const openCloseDesktopMegaMenu = () => {


  displayBtn.addEventListener('click', () => openAction())
  document.addEventListener('click', (e) => closeAction(e))

  const openAction = () => show()

  const closeAction = (event) => {
    container.classList.contains('active') &&
    !container.contains(event.target) &&
    !displayBtn.contains(event.target) ? hide() : null
  }

  const show = () => {
    toggleClass('body', 'add', 'overflow-hidden');
    toggleClass(container, 'add', 'active');
    toggleClass(container, 'remove', 'hidden');

    container.classList.contains('hide')
    ? toggleClass(container, "replace", "hide", "show")
    : toggleClass(container, 'add', 'show');
  }

  const hide = () => {
    toggleClass('body', 'remove', 'overflow-hidden');
    toggleClass(container, 'remove', 'active');

    container.classList.contains('show')
    ? toggleClass(container, "replace", "show", "hide")
    : toggleClass(container, 'add', 'hide');

  }
}
// setup for change menu swiper
const swiperMegaMenu = new Swiper('#swiper-menu-desktop', {
  allowTouchMove: false, // غیرفعال کردن کشیدن صفحه
  effect: "fade",
});

menuItems.forEach((item, index) => {
  item.setAttribute("onClick", `goToSlide(${index})`)
    item.addEventListener('click', () => {
      removeClassMenu()
      toggleClass(item, 'add', 'active')
    })
})
const removeClassMenu = () => {
  menuItems.forEach((item) => toggleClass(item, 'remove', 'active'))
}

function goToSlide(index) {
  swiperMegaMenu.slideTo(index);
  slides.forEach((slide) => {
    const slideElement = slide.querySelector("div");
    toggleClass(slideElement, 'remove', 'a')
    if (slide.classList.contains("swiper-slide-active")) {
      toggleClass(slideElement, 'add', 'a')
    }
  })
}
openCloseDesktopMegaMenu()
