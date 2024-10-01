function fixedHeader() {
  const bsCollapse = new bootstrap.Collapse('header nav');
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 262) {
      bsCollapse.hide()
    } else {
      bsCollapse.show()
    }
  }
  )
}




fixedHeader();


