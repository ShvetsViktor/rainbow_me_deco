/**
 * Initialises the Services carousel with Swiper.
 *
 * The services section uses Swiper because it provides reliable touch/swipe
 * behaviour on mobile while keeping service cards compact.
 */
function initServicesCarousel() {
  const servicesSwiperElement = document.querySelector('.services-swiper');

  // Prevents console errors if the services carousel or Swiper CDN is unavailable.
  if (!servicesSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(servicesSwiperElement, {
    // Shows part of the next card on mobile to make the carousel feel swipeable.
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,

    // Prevents unnecessary Swiper behaviour when there are not enough slides.
    watchOverflow: true,

    pagination: {
      el: '.services-swiper .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.services-swiper .swiper-button-next',
      prevEl: '.services-swiper .swiper-button-prev',
    },

    // Tablet and desktop show more cards at once.
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

    on: {
      // Swiper pagination bullets are decorative for keyboard users in this project.
      init() {
        removePaginationBulletsFromTabOrder(servicesSwiperElement);
      },

      // Keeps pagination bullets out of the tab order after Swiper updates pagination.
      paginationUpdate() {
        removePaginationBulletsFromTabOrder(servicesSwiperElement);
      },
    },
  });
}
