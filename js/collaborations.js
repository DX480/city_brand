let rollingSwiperTop;
let rollingSwiperBtm;
let rollingSwiper;

function PlayRollingSwiperTop() {
  rollingSwiperTop = new Swiper('.collaborations_slide_top', {
    spaceBetween: 88,
    init:true,
    slidesPerView: 'auto',
    loop:true,
    mousewheel:false,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: {
      delay:0,
      disableOnInteraction:false,
    },
    speed: 17000,
    loopedSlides: 3,
  });
}

window.addEventListener('load', function () {
  PlayRollingSwiper();
});

function PlayRollingSwiperBtm() {
  rollingSwiperBtm = new Swiper('.collaborations_slide_btm ', {
    spaceBetween: 88,
    slidesPerView: 'auto',
    loop:true,
    mousewheel:false,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: {
      delay:0,
      disableOnInteraction:false,
    },
    speed: 17000,
    loopedSlides: 3,
  });


}

window.addEventListener('load', function () {
  PlayRollingSwiperTop();
  PlayRollingSwiperBtm();
}); 
