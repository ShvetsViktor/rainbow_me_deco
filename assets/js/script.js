document.addEventListener('DOMContentLoaded', () => {
  const servicesSwiperElement = document.querySelector('.services-swiper');

  if (!servicesSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  // Mobile-first setup: show one card at a time and expand on wider screens.
  new Swiper(servicesSwiperElement, {
    slidesPerView: 1.08,
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
    scrollbar: {
      el: '.services-swiper .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});
