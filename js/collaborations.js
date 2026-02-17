let rollingSwiperTop;
let rollingSwiperBtm;
let rollingSwiper;

function PlayRollingSwiperTop() {
  rollingSwiperTop = new Swiper('.collaborations_slide_top', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,     // ✅ 간격을 Swiper 옵션으로 통일
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: false,
  });

  let lastTime = null;
  const normalSpeed = 0.07;
  const hoverSpeed = 0.02;
  let currentSpeed = normalSpeed;
  let targetSpeed = normalSpeed;

  function loop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    let nextTranslate = rollingSwiperTop.translate + currentSpeed * delta;

    // ✅ slideTo 점프 없이 translate 보정으로 루프 처리
    const loopStart = rollingSwiperTop.loopedSlides
      ? -(rollingSwiperTop.slidesSizesGrid[0] + 88) * rollingSwiperTop.loopedSlides
      : 0;

    if (nextTranslate > 0) {
      nextTranslate = nextTranslate - rollingSwiperTop.virtualSize + rollingSwiperTop.size - 88;
    }

    rollingSwiperTop.translateTo(nextTranslate, 0, false, true);

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  $('.collaborations_slide_top')
    .on('mouseenter', function () {
      targetSpeed = hoverSpeed;
    })
    .on('mouseleave', function () {
      targetSpeed = normalSpeed;
    });
}

window.addEventListener('load', function () {
  PlayRollingSwiper();
});

function PlayRollingSwiperBtm() {
  rollingSwiperBtm = new Swiper('.collaborations_slide_btm ', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: false,
  });

  let lastTime = null;
  const normalSpeed = 0.07;  
  const hoverSpeed = 0.02;   // 호버 시 속도 (낮을수록 느림)
  let currentSpeed = normalSpeed;
  let targetSpeed = normalSpeed;

  function loop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    rollingSwiperBtm.translateTo(
      rollingSwiperBtm.translate - currentSpeed * delta,
      0,
      false,
      true
    );

    if (Math.abs(rollingSwiperBtm.translate) >= rollingSwiperBtm.virtualSize - rollingSwiperBtm.size) {
      rollingSwiperBtm.slideTo(0, 0, false);
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  $('.collaborations_slide_btm')
    .on('mouseenter', function () {
      targetSpeed = hoverSpeed;  // 호버 시 목표 속도를 느리게
    })
    .on('mouseleave', function () {
      targetSpeed = normalSpeed; // 호버 해제 시 원래 속도로
    });
}

window.addEventListener('load', function () {
  PlayRollingSwiperTop();
  PlayRollingSwiperBtm();
}); 
