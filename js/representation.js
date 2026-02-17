const START_INDEX = 1;

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
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: "1",
  speed: 1200,
  a11y: false,
  pagination: false,
  mousewheel: true,
  on: {
    init() {
      swiperB.update();
    },
    slideChange() {
      swiperB.slideTo(this.activeIndex, 1200);
    },
  },
});

const $scope = document.querySelector(".rerepresentation .contents"); // 커서 어디든 먹게

let locked = false;
function lock() { locked = true; }
function unlock() { locked = false; }

swiperA.on("transitionEnd", unlock);
swiperA.on("slideChangeTransitionEnd", unlock);
swiperA.on("touchEnd", unlock);

function moveBoth(dir) {
  if (locked) return;
  lock();

  if (dir > 0) swiperA.slideNext();
  else swiperA.slidePrev();
}

$scope.addEventListener("wheel", (e) => {
  e.preventDefault();
  const dir = e.deltaY > 0 ? 1 : -1;
  moveBoth(dir);
}, { passive: false });
