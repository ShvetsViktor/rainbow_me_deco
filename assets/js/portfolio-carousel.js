function renderPortfolioSlides(items) {
  const target = document.querySelector('.portfolio-swiper .swiper-wrapper');

  for (const item of items) {
    const slide = document.createElement('article');
    slide.classList.add('portfolio-card', 'swiper-slide');
    target.appendChild(slide);

    const title = document.createElement('h3');
    title.textContent = item.title;
    slide.appendChild(title);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { renderPortfolioSlides };
}
