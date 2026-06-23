/**
 * Initializes the services carousel with Swiper library.
 * The carousel setup is isolated so the services section can evolve independently.
 */
function initServicesCarousel() {
  const servicesSwiperElement = document.querySelector('.services-swiper');

  // Error handling: ensure the Swiper container and library are available before initialization.
  if (!servicesSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(servicesSwiperElement, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    watchOverflow: true,
    pagination: {
      el: '.services-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.services-swiper .swiper-button-next',
      prevEl: '.services-swiper .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.2,
        spaceBetween: 24,
      },
    },
  });
}
