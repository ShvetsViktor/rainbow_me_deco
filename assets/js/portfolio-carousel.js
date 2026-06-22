function renderPortfolioSlides(items) {
  const target = document.querySelector('.portfolio-swiper .swiper-wrapper');

  for (const item of items) {
    const slide = document.createElement('article');
    slide.classList.add('portfolio-card', 'swiper-slide');
    target.appendChild(slide);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { renderPortfolioSlides };
}
