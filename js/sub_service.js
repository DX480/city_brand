
var serviceSwiper = new Swiper(".service_process_swiper", {
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


});



window.addEventListener('load', function () {
  ServiceSwiper(); 
}); 
