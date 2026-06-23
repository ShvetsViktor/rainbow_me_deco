const { renderPortfolioSlides, initPortfolioCarousel } = require('../assets/js/portfolio-carousel');

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

  test('renders portfolio slide image with alt text', () => {
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

  test('renders portfolio slide description', () => {
    const items = [
      {
        description: 'A soft pastel balloon arch created for a private celebration.',
      },
    ];

    renderPortfolioSlides(items);

    expect(document.querySelector('.portfolio-card p').textContent).toBe(
      'A soft pastel balloon arch created for a private celebration.'
    );
  });
});

describe('Portfolio carousel initialization', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper"></div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;

    // Mock the Swiper constructor because the real CDN library is not available in the Jest environment.
    global.Swiper = jest.fn();
  });

  afterEach(() => {
    // Remove the mocked Swiper after each test so it does not affect other tests.
    delete global.Swiper;
  });

  test('initializes portfolio Swiper when the carousel element exists', () => {
    initPortfolioCarousel();

    const portfolioSwiperElement = document.querySelector('.portfolio-swiper');

    // Check that Swiper is initialized with the portfolio carousel element and a configuration object.
    expect(global.Swiper).toHaveBeenCalledWith(portfolioSwiperElement, expect.any(Object));
  });
});
