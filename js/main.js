$(document).ready(function () {
  $('nav.header__nav a').each(function () {
    if (this.href == location.href) {
      $(this).parent().addClass('active-page');
      $(this).removeAttr('href');
    }
  });
});

const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
});