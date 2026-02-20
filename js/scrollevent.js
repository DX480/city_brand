class Scrooth {
  constructor({
    element = window,
    strength = 10,
    acceleration = 1.2,
    deceleration = 0.975,
  } = {}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener("wheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.element.addEventListener("mousewheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *=
        this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
        ? (this.running = false)
        : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance)
        ? (this.isDistanceAsc = false)
        : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.update();
      }

      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 30,
  acceleration: 1.75,
  deceleration: 0.875,
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

