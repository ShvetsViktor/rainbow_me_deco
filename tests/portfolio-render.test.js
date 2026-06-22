const { renderPortfolioSlides } = require('../assets/js/portfolio-carousel');

describe('Portfolio rendering', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="swiper portfolio-swiper">
        <div class="swiper-wrapper"></div>
      </div>
    `;
  });

  test('renders one portfolio slide', () => {
    renderPortfolioSlides([{}]);

    expect(document.querySelectorAll('.portfolio-card.swiper-slide').length).toBe(1);
  });
});
