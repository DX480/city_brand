const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




// ScrollTrigger와 Lenis 연동
gsap.registerPlugin(ScrollTrigger);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

ScrollTrigger.defaults({
  scroller: document.querySelector('.lenis')
});


$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  let bannerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "+=50%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  bannerTimeline.to(
    ".tap_lnb_btn",
    {
      scale: 0.5,
      "top":"85vh",
      ease: "power2.out",
      duration: 1,
    },
    1,
  );


});
