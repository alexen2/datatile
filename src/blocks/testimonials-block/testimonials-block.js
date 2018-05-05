$(document).ready(function() {
	var swiper = new Swiper('.testimonials-block__body', {
    slidesPerView: 3,
    spaceBetween: 0,

    pagination: {
      el: '.testimonials-block__pag',
      clickable: true,
    },

    breakpoints: {
    	1024: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });
});