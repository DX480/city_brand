const START_INDEX = 0;
const wheelArea = document.querySelector(".representation");
const THRESHOLD = 50;      // 이 이상 움직여야 슬라이드
const DURATION = 1200;     // swiper speed와 맞추기
let wheelLocked = false;

var swiperB = new Swiper(".mySwiperB", {
  direction: "vertical",
  effect: "fade",
  fadeEffect: { crossFade: true },
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1200,
  allowTouchMove: false,
  mousewheel: false,
});


var swiperA = new Swiper(".mySwiperA", {
  direction: "vertical",
  centeredSlides: true,
  speed: 1200,
  mousewheel: true,
  slidesPerView: "1",
  allowTouchMove: false,
  simulateTouch: true,

  autoHeight: false,
  observer: true,
  observeParents: true,

  on: {
    init() {
      swiperB.slideTo(START_INDEX, 0);
    },
    slideChange() {
      swiperB.slideTo(this.activeIndex, 1200);
    },
  },
});

wheelArea.addEventListener(
  "wheel",
  (e) => {
 
    e.preventDefault();

    if (wheelLocked) return;

    const dy = e.deltaY;

    if (Math.abs(dy) < THRESHOLD) return;

    wheelLocked = true;

    if (dy > 0) swiperA.slideNext();
    else swiperA.slidePrev();


    setTimeout(() => {
      wheelLocked = false;
    }, DURATION);
  },
  { passive: false }
);