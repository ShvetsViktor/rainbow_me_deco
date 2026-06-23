/**
 * Creates portfolio card slides from an array of portfolio item objects.
 * Each card is added to the portfolio Swiper wrapper and given the required Swiper slide class.
 */
function renderPortfolioSlides(items) {
  const target = document.querySelector('.portfolio-swiper .swiper-wrapper');

  for (const item of items) {
    const slide = document.createElement('article');
    slide.classList.add('portfolio-card', 'swiper-slide');
    target.appendChild(slide);

    const title = document.createElement('h3');
    title.textContent = item.title;
    slide.appendChild(title);

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;
    slide.appendChild(img);

    const descr = document.createElement('p');
    descr.textContent = item.description;
    slide.appendChild(descr);
  }
}

/**
 * Initializes the portfolio Swiper carousel after the portfolio slides have been rendered.
 * The function checks that the carousel element and external Swiper library are available before running.
 */
function initPortfolioCarousel() {
  const portfolioSwiperElement = document.querySelector('.portfolio-swiper');

  // Error handling: prevent carousel initialization if the DOM element or external Swiper library is missing.
  if (!portfolioSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(portfolioSwiperElement, {
    slidesPerView: 1.08,
    spaceBetween: 16,
    grabCursor: true,
    watchOverflow: true,
    pagination: {
      el: '.portfolio-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.portfolio-swiper .swiper-button-next',
      prevEl: '.portfolio-swiper .swiper-button-prev',
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
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { renderPortfolioSlides, initPortfolioCarousel };
}
