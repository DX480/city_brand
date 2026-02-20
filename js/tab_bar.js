document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".tap_lnb_btn");
  const selectBox = nav.querySelector(".select_box");
  const items = Array.from(nav.querySelectorAll("ul li"));
  const links = Array.from(nav.querySelectorAll("ul li a"));

  function moveSelectBoxTo(index, animate = true) {
    const li = items[index];
    const x = li.offsetLeft; 

    if (animate) {
      gsap.to(selectBox, { x, duration: 0.7, ease: "power2.out" });
    } else {
      gsap.set(selectBox, { x });
    }

    
    items.forEach((el, i) => el.classList.toggle("is-active", i === index));
  }

  moveSelectBoxTo(0, false);

  links.forEach((a, index) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();

  
      moveSelectBoxTo(index, true);


      const targetSelector = a.getAttribute("href"); 
      const target = document.querySelector(targetSelector);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

 
  window.addEventListener("resize", () => {
    const activeIndex = items.findIndex((li) => li.classList.contains("is-active"));
    moveSelectBoxTo(activeIndex >= 0 ? activeIndex : 0, false);
  });
});

gsap.set(".floating_obj", {
  bottom: "10vh"   // 화면 하단 기준 10%
});