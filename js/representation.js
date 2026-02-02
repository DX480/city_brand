var swiperA = new Swiper(".mySwiperA", {
  direction: "vertical",
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: "1",
  speed: 1200,
  a11y: false,
  pagination: false,
  mousewheel: false, // mousewheel 비활성화 (수동으로 제어)
  on: {
    slideChange: function () {},
  },
});

var swiperB = new Swiper(".mySwiperB", {
  direction: "vertical",
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  speed: 1500,
  a11y: false,
  pagination: false,
  mousewheel: false, // mousewheel 비활성화 (수동으로 제어)
  on: {
    slideChange: function () {},
  },
});

// 올바른 셀렉터 사용
const $contents = document.querySelector(".representation .contents");

let locked = false;

function moveBoth(dir) {
  if (locked) return;
  locked = true;

  if (dir > 0) {
    swiperA.slideNext();
    swiperB.slideNext();
  } else {
    swiperA.slidePrev();
    swiperB.slidePrev();
  }

  window.setTimeout(
    () => {
      locked = false;
    },
    Math.max(swiperA.params.speed, swiperB.params.speed) + 50,
  );
}

// wheel 이벤트
$contents.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    e.stopPropagation();

    const dir = e.deltaY > 0 ? 1 : -1;
    moveBoth(dir);
  },
  { passive: false },
);

// 터치 이벤트
let startY = 0;
$contents.addEventListener(
  "touchstart",
  (e) => {
    startY = e.touches[0].clientY;
  },
  { passive: true },
);

$contents.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();

    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;

    if (Math.abs(diff) > 12) {
      moveBoth(diff > 0 ? 1 : -1);
      startY = currentY;
    }
  },
  { passive: false },
);