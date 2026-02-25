let rollingSwiperTop;
let rollingSwiperBtm;
let rollingSwiper;

function PlayRollingSwiperTop() {
  rollingSwiperTop = new Swiper('.collaborations_slide_top', {
    init:true,
   loop: true,
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
    speed: 5000,
    loopedSlides: 5,
  });
}

window.addEventListener('load', function () {
  PlayRollingSwiper();
});

function PlayRollingSwiperBtm() {
  rollingSwiperBtm = new Swiper('.collaborations_slide_btm ', {
     ltl: true,
    init:true,
   loop: true,
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
    speed: 5000,
    loopedSlides: 5,
  });


}

window.addEventListener('load', function () {
  PlayRollingSwiperTop();
  PlayRollingSwiperBtm();
}); 
