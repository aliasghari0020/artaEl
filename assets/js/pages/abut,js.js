
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
const playVideo = ()=>{
  const videoBox = document.querySelector('.video-box');
  const playIcon = videoBox.querySelector('.play-video');
  const video = videoBox.querySelector('video');
  playIcon.addEventListener('click', ()=>{
    playIcon.classList.add('d-none')
    video.play()
    video.controls = true
  })
}



if(document.querySelector('.video-box')){
  playVideo()
}
if(document.getElementById('line_animation')){
  addAnimation()
}