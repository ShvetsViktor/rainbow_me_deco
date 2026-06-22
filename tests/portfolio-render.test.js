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

  test('renders portfolio slide title', () => {
    const items = [
      {
        title: 'Pastel Balloon Arch',
      },
    ];

    renderPortfolioSlides(items);

    expect(document.querySelector('.portfolio-card h3').textContent).toBe('Pastel Balloon Arch');
  });

  test('renders portfolio slide image', () => {
    const items = [
      {
        image: 'assets/images/portfolio/balloon-arches-1.avif',
        alt: 'Pastel balloon arch decoration for a celebration',
      },
    ];

    renderPortfolioSlides(items);

    expect(document.querySelector('.portfolio-card img').getAttribute('src')).toBe(
      'assets/images/portfolio/balloon-arches-1.avif'
    );
    expect(document.querySelector('.portfolio-card img').getAttribute('alt')).toBe(
      'Pastel balloon arch decoration for a celebration'
    );
  });
});
