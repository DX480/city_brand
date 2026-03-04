let rollingSwiperTop;
let rollingSwiperBtm;


  rollingSwiperTop = new Swiper('.font_slide_top', {
    spaceBetween: 88,
    init:true,
    slidesPerView: 'auto',
    loop:true,
    mousewheel:false,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: {
      delay:0,
      disableOnInteraction:false,
    },
    speed: 5000,
    loopedSlides: 6,
  });



/*   rollingSwiperBtm = new Swiper('.font_slide_btm ', {
    spaceBetween: 88,
    init:true,
    slidesPerView: 'auto',
    loop:true,
    mousewheel:false,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    autoplay: {
      delay:0,
      disableOnInteraction:false,
    },
    speed: 5000,
    loopedSlides: 3,
  });
 */
