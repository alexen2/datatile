$(document).ready(function() {
	var swiper = new Swiper('.home-banner__right', {
    centeredSlides: true,
    spaceBetween: 800,
     speed: 800,
    effect: 'fade',
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });
});