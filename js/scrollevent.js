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
    ".text_wrap",
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


  bannerTimeline.to(
    "#img02",
    {
      opacity: 1,
      y: -100,
      duration: 0.15,
      ease: "power2.out",
    },
    0.35,
  );

  bannerTimeline.to(
    "#img02",
    {
      opacity: 0,
      y: -200,
      duration: 0.15,
      ease: "power2.in",
    },
    0.5,
  );



  $("section").each(function (index) {
    var section = this;
    var sectionId = $(this).attr("id");

    var topPinSections = ["about", "skills", "contact"];
    var btmPinSections = ["skills", "project"];

    if (topPinSections.indexOf(sectionId) !== -1) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=40%",
        pin: true,
        pinSpacing: true,
        scrub: 5,
        anticipatePin: false,
        onEnter: function () {
          console.log("Section entered: " + sectionId);
        },
        onLeave: function () {
          console.log("Section left: " + sectionId);
        },
      });
    }

    if (btmPinSections.indexOf(sectionId) !== -1) {
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "+=40%",
        pin: true,
        pinSpacing: true,
        scrub: 5,
        anticipatePin: false,
        onEnter: function () {
          console.log("Section entered (bottom): " + sectionId);
        },
        onLeave: function () {
          console.log("Section left (bottom): " + sectionId);
        },
      });
    }
  });

});
