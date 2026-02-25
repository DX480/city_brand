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
      end: "+=300%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  bannerTimeline.to(
    ".banner_title",
    {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    0,
  );

  bannerTimeline.to(
    ".banner_logo",
    {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    0,
  );

  bannerTimeline.to(
    ".banner .text_wrap",
    {
      opacity: 1,  
      duration: 0.6,
      ease: "power2.out",
    },
    0.4,
  );

  bannerTimeline.to(
    ".banner_darkmask",
    {
      opacity: 0.9,
      duration: 0.4,
      ease: "power2.in",
    },
    0,
  );

    ScrollTrigger.create({
    trigger: ".representation",
    start: "+=5%",
    end: "+=150%", 
    pin: true,
    pinSpacing: true,
    scrub: 3,
  });

  let serviceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

 serviceTimeline.to(
    ".representation",
    {
      "background-color":"#fff",
      duration: 0.7,
      ease: "power2.out",
    },
    0,
  );

 serviceTimeline.to(
    ".service",
    {
      "background-color":"#fff",
      duration: 0.7,
      ease: "power2.out",
    },
    0,
  );

  let representationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".representation",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  
  let historyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".history",
      start: "-=60%",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
   
  });


  historyTimeline.to(
    ".representation",
    {
      "background-color":"#121212",
      duration: 0.2,
      ease: "power2.out",
    },
    0,
  );

  historyTimeline.to(
    ".history",
    {
      "background-color":"#121212",
      duration: 0.2,
      ease: "power2.out",
      
    },
    0,
  );


});

