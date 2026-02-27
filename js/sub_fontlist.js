let rollingSwiperTop;
let rollingSwiperBtm;

function PlayRollingSwiperTop() {
  rollingSwiperTop = new Swiper('.font_slide_top', {
    spaceBetween: 88,
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
    loopedSlides: 3,
  });
}

window.addEventListener('load', function () {
  PlayRollingSwiper();
});

function PlayRollingSwiperBtm() {
  rollingSwiperBtm = new Swiper('.font_slide_btm ', {
     ltl: true,
      spaceBetween: 88,
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
    loopedSlides: 3,
  });


}

window.addEventListener('load', function () {
  PlayRollingSwiperTop();
  PlayRollingSwiperBtm();
}); 
