const { renderPortfolioSlides, initPortfolioCarousel } = require('../assets/js/portfolio-carousel');

describe('Portfolio rendering', () => {
  const portfolioItems = [
    {
      title: 'Pastel Balloon Arch',
      image: 'assets/images/portfolio/balloon-arches-1.avif',
      alt: 'Pastel balloon arch decoration for a celebration',
      description: 'A soft pastel balloon arch created for a private celebration.',
      price: 145,
    },
  ];

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="swiper portfolio-swiper">
        <div class="swiper-wrapper"></div>
      </div>
    `;
  });

  test('renders one portfolio slide', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelectorAll('.portfolio-card.swiper-slide').length).toBe(1);
  });

  test('renders portfolio slide title', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card h3').textContent).toBe('Pastel Balloon Arch');
  });

  test('renders portfolio slide image with alt text', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card img').getAttribute('src')).toBe(
      'assets/images/portfolio/balloon-arches-1.avif'
    );

    expect(document.querySelector('.portfolio-card img').getAttribute('alt')).toBe(
      'Pastel balloon arch decoration for a celebration'
    );
  });

  test('renders portfolio slide description', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card p').textContent).toBe(
      'A soft pastel balloon arch created for a private celebration.'
    );
  });

  test('renders portfolio card action area', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card .portfolio-card-actions')).not.toBeNull();
  });

  test('renders portfolio slide price in pounds inside action area', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card .portfolio-card-actions .portfolio-price').textContent).toBe('£145');
  });

  test('renders portfolio price label inside action area', () => {
    renderPortfolioSlides(portfolioItems);

    const priceLabel = document.querySelector('.portfolio-card .portfolio-card-actions .portfolio-price-label');

    expect(priceLabel.textContent).toBe('Starting from');
  });

  test('renders portfolio add to estimate button inside action area', () => {
    renderPortfolioSlides(portfolioItems);

    const button = document.querySelector('.portfolio-card .portfolio-card-actions .add-to-estimate');

    expect(button).not.toBeNull();
    expect(button.textContent).toBe('Add to estimate');
  });

  test('renders add to estimate button with button type', () => {
    renderPortfolioSlides(portfolioItems);

    const button = document.querySelector('.portfolio-card .portfolio-card-actions .add-to-estimate');

    expect(button.getAttribute('type')).toBe('button');
  });

  test('renders portfolio image button with aria label', () => {
    renderPortfolioSlides(portfolioItems);

    const imageButton = document.querySelector('.portfolio-card .portfolio-image-button');

    expect(imageButton.getAttribute('aria-label')).toBe('View larger image: Pastel Balloon Arch');
  });

  test('renders portfolio image button with button type', () => {
    renderPortfolioSlides(portfolioItems);

    const imageButton = document.querySelector('.portfolio-card .portfolio-image-button');

    expect(imageButton.getAttribute('type')).toBe('button');
  });

  test('renders portfolio price wrapper inside action area', () => {
    renderPortfolioSlides(portfolioItems);

    expect(document.querySelector('.portfolio-card .portfolio-card-actions .portfolio-price-wrapper')).not.toBeNull();
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
