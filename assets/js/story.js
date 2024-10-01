scrollCostume('.story-container__story');
let modal;
let isDragging = false;

document.addEventListener('DOMContentLoaded', function () {
  const storySlider = new Swiper('#story-swiper', {

    navigation: {
      nextEl: "#story-next-btn",
      prevEl: "#story-prev-btn",
    },

    on: {
      slideChange: function () {

        pauseAllVideos();
        playVideo(storySlider.activeIndex);
      }
    }
  });
  const storyLabels = document.querySelectorAll('.story-label');
  storyLabels.forEach(function (label, index) {
    const storyContainer = document.querySelector('.story-card-container');
    label.addEventListener('click', function () {
      const modal = new bootstrap.Modal(document.getElementById('story-viewer'));
      modal.show();
      storySlider.slideTo(index);
      playVideo(index);
    });
  });

  const storyModal = document.getElementById('story-viewer');
  storyModal.addEventListener('shown.bs.modal', function () {
    storySlider.update();
  });

  storyModal.addEventListener('hidden.bs.modal', function () {
    pauseAllVideos();
  });

  function playVideo(index) {
    const main = document.querySelector('#story-swiper .slide-story:nth-child(' + (index + 1) + ') ');
    const video = main.querySelector('video');
      video.loop = true;

    const gooy = element('.goy' , main)
    const timeline = element('.timeline', main);
    const timeDisplay = element('.time-story span', main);
    const timelineContainer = element('.timelineContainer' , main);
    const storyContainer = element('.story-card-container' , main);
    if (video.paused) {
      video.play();
    }
    scrollCostume('.story-card-container', main  , 3 )

    video.addEventListener('timeupdate', () => timeLineUpdate(timeline, timeDisplay, video , gooy))

        storyContainer.addEventListener('mousemove', function (e) {
          storySlider.allowTouchMove = false;
        });
        storyContainer.addEventListener('touchmove', function (e) {
          storySlider.allowTouchMove = false;
        })

    main.addEventListener('mousemove', function (e) {
      if(!storyContainer.contains(e.target)) {
        storySlider.allowTouchMove = true;
      }
    });
    main.addEventListener('touchmove', function (e) {
      if(!storyContainer.contains(e.target)) {
        storySlider.allowTouchMove = true;
      }
    });
    timelineContainer.addEventListener('click', function (e) {
      updateTimeline(e , timelineContainer , video , timeline , gooy);

    });
  }
  function pauseAllVideos() {
    const videos = document.querySelectorAll('#story-swiper .swiper-slide video');
    videos.forEach(function (video) {
      video.pause();
      video.currentTime = 0;
    });
  }
});
function timeLineUpdate(timeline, timeDisplay, video , gooy) {
  const value = (100 / video.duration) * video.currentTime;
  timeline.style.width = value + '%';
  gooy.style.left = (value - 3) + '%';
  const remainingTime = video.duration - video.currentTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);
  timeDisplay.textContent = ` ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function updateTimeline(e , timelineContainer , video , timeline , gooy , storySlider= '') {

  const rect = timelineContainer.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const percentage = Math.max(0, Math.min(1, offsetX / timelineContainer.offsetWidth));
  const newTime = video.duration * percentage;
  video.currentTime = newTime;
  gooy.style.left = ( (percentage * 100)- 3) + '%';
  timeline.style.width = percentage * 100 + '%';
}



