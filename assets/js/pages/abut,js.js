
const addAnimation = () => {
  window.addEventListener('scroll', function () {
    const container = document.getElementById('line_animation');
    const line = container.querySelector('.active');
    const dot = container.querySelector('.end');
    let rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      line.classList.add('action');
      dot.classList.add('action');
    }
  });
}



if(document.getElementById('line_animation')){
  addAnimation()
}