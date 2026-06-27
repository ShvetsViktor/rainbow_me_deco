const {
  filterPortfolioItems,
  renderPortfolioFilterButtons,
  portfolioFilters,
  initPortfolioFilters,
  initPortfolioFilterRendering,
  initServicePortfolioLinks,
} = require('../assets/js/portfolio-filters');

const { renderPortfolioSlides } = require('../assets/js/portfolio-carousel');

const testPortfolioItems = [
  {
    title: 'Pastel Balloon Arch',
    category: 'balloon-arches',
    image: 'assets/images/portfolio/balloon-arches-1.avif',
    alt: 'Pastel balloon arch decoration',
    description: 'A pastel balloon arch.',
    price: 120,
  },
  {
    title: 'Birthday Number Stack',
    category: 'number-stacks',
    image: 'assets/images/portfolio/number-stacks-1.avif',
    alt: 'Birthday number stack decoration',
    description: 'A number stack decoration.',
    price: 65,
  },
  {
    title: 'Wedding Entrance Arch',
    category: 'balloon-arches',
    image: 'assets/images/portfolio/balloon-arches-2.avif',
    alt: 'Wedding balloon arch decoration',
    description: 'A wedding entrance balloon arch.',
    price: 150,
  },
];

describe('Portfolio filtering', () => {
  test('filters portfolio items by category', () => {
    const filteredItems = filterPortfolioItems(testPortfolioItems, 'balloon-arches');

    expect(filteredItems).toEqual([testPortfolioItems[0], testPortfolioItems[2]]);
  });

  test('returns all portfolio items when category is all', () => {
    const filteredItems = filterPortfolioItems(testPortfolioItems, 'all');

    expect(filteredItems).toEqual(testPortfolioItems);
  });

  test('portfolio filters contain all required filter categories', () => {
    expect(portfolioFilters.length).toBe(7);
    expect(portfolioFilters[0]).toEqual({ label: 'All', category: 'all' });
    expect(portfolioFilters[6]).toEqual({
      label: 'Custom Setups',
      category: 'custom-setups',
    });
  });

  test('renders portfolio filter buttons', () => {
    document.body.innerHTML = `
      <div class="portfolio-filters" aria-label="Portfolio filters"></div>
    `;

    renderPortfolioFilterButtons(portfolioFilters);

    const filterButtons = document.querySelectorAll('.portfolio-filter-button');

    expect(filterButtons.length).toBe(7);
    expect(filterButtons[0].textContent).toBe('All');
    expect(filterButtons[0].getAttribute('data-category')).toBe('all');
    expect(filterButtons[6].textContent).toBe('Custom Setups');
    expect(filterButtons[6].getAttribute('data-category')).toBe('custom-setups');
  });

  test('sets all filter button as active by default', () => {
    document.body.innerHTML = `
      <div class="portfolio-filters" aria-label="Portfolio filters"></div>
    `;

    renderPortfolioFilterButtons(portfolioFilters);

    const allButton = document.querySelector('.portfolio-filter-button[data-category="all"]');
    const balloonArchesButton = document.querySelector('.portfolio-filter-button[data-category="balloon-arches"]');

    expect(allButton.getAttribute('aria-pressed')).toBe('true');
    expect(balloonArchesButton.getAttribute('aria-pressed')).toBe('false');
  });

  test('updates active filter button when a filter is clicked', () => {
    document.body.innerHTML = `
      <div class="portfolio-filters" aria-label="Portfolio filters"></div>
    `;

    renderPortfolioFilterButtons(portfolioFilters);
    initPortfolioFilters();

    const allButton = document.querySelector('.portfolio-filter-button[data-category="all"]');
    const balloonArchesButton = document.querySelector('.portfolio-filter-button[data-category="balloon-arches"]');

    balloonArchesButton.click();

    expect(allButton.getAttribute('aria-pressed')).toBe('false');
    expect(balloonArchesButton.getAttribute('aria-pressed')).toBe('true');
  });

  test('renders filtered portfolio cards when a filter button is clicked', () => {
    document.body.innerHTML = `
      <div class="portfolio-filters" aria-label="Portfolio filters"></div>

      <div class="swiper portfolio-swiper">
        <div class="swiper-wrapper"></div>
      </div>
    `;

    // In the real browser, JavaScript files are loaded through <script> tags.
    // portfolio-carousel.js is loaded before portfolio-filters.js in index.html,
    // so renderPortfolioSlides becomes available as a global browser function.
    // That allows portfolio-filters.js to call renderPortfolioSlides(filteredItems).
    //
    // Jest does not automatically share functions between required files in the same way.
    // After importing renderPortfolioSlides here, it only exists inside this test file.
    // To match the browser behaviour, we temporarily attach it to the global object.
    global.renderPortfolioSlides = renderPortfolioSlides;

    renderPortfolioFilterButtons(portfolioFilters);
    initPortfolioFilterRendering(testPortfolioItems);

    const balloonArchesButton = document.querySelector('.portfolio-filter-button[data-category="balloon-arches"]');

    balloonArchesButton.click();

    const renderedCards = document.querySelectorAll('.portfolio-card');

    expect(renderedCards.length).toBe(2);
    expect(renderedCards[0].querySelector('h3').textContent).toBe('Pastel Balloon Arch');
    expect(renderedCards[1].querySelector('h3').textContent).toBe('Wedding Entrance Arch');

    // Remove the temporary global function so it does not affect other tests.
    delete global.renderPortfolioSlides;
  });

  test('renders all portfolio cards when all filter is clicked', () => {
    document.body.innerHTML = `
    <div class="portfolio-filters" aria-label="Portfolio filters"></div>

    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper"></div>
    </div>
  `;

    global.renderPortfolioSlides = renderPortfolioSlides;

    renderPortfolioFilterButtons(portfolioFilters);
    initPortfolioFilterRendering(testPortfolioItems);

    const allButton = document.querySelector('.portfolio-filter-button[data-category="all"]');

    allButton.click();

    const renderedCards = document.querySelectorAll('.portfolio-card');

    expect(renderedCards.length).toBe(testPortfolioItems.length);
    expect(renderedCards[0].querySelector('h3').textContent).toBe('Pastel Balloon Arch');
    expect(renderedCards[2].querySelector('h3').textContent).toBe('Wedding Entrance Arch');

    delete global.renderPortfolioSlides;
  });

  test('filters portfolio when a service button with category is clicked', () => {
    document.body.innerHTML = `
    <section id="services">
      <button class="view-portfolio-category" type="button" data-category="balloon-arches">
        View examples
      </button>
    </section>

    <section id="portfolio">
      <div class="portfolio-filters" aria-label="Portfolio filters"></div>

      <div class="swiper portfolio-swiper">
        <div class="swiper-wrapper"></div>
      </div>
    </section>
  `;

    global.renderPortfolioSlides = renderPortfolioSlides;
    Element.prototype.scrollIntoView = jest.fn();

    renderPortfolioFilterButtons(portfolioFilters);
    initPortfolioFilters();
    initPortfolioFilterRendering(testPortfolioItems);
    initServicePortfolioLinks();

    const serviceButton = document.querySelector('.view-portfolio-category[data-category="balloon-arches"]');

    serviceButton.click();

    const activeFilter = document.querySelector('.portfolio-filter-button[aria-pressed="true"]');
    const renderedCards = document.querySelectorAll('.portfolio-card');

    expect(activeFilter.getAttribute('data-category')).toBe('balloon-arches');
    expect(renderedCards.length).toBe(2);

    delete global.renderPortfolioSlides;
  });

  test('returns portfolio items that include selected category', () => {
    const items = [
      {
        title: 'Balloon Arch with Backdrop',
        categories: ['balloon-arches', 'backdrops'],
      },
      {
        title: 'Number Stack',
        categories: ['number-stacks'],
      },
    ];

    const filteredItems = filterPortfolioItems(items, 'backdrops');

    expect(filteredItems.length).toBe(1);
    expect(filteredItems[0].title).toBe('Balloon Arch with Backdrop');
  });
});
