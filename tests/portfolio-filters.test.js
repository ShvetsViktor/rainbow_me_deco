const {
  filterPortfolioItems,
  renderPortfolioFilterButtons,
  portfolioFilters,
  initPortfolioFilters,
  initPortfolioFilterRendering,
} = require('../assets/js/portfolio-filters');

const { renderPortfolioSlides } = require('../assets/js/portfolio-carousel');

describe('Portfolio filtering', () => {
  test('filters portfolio items by category', () => {
    const items = [
      { title: 'Pastel Balloon Arch', category: 'balloon-arches' },
      { title: 'Birthday Number Stack', category: 'number-stacks' },
      { title: 'Wedding Entrance Arch', category: 'balloon-arches' },
    ];

    const filteredItems = filterPortfolioItems(items, 'balloon-arches');

    expect(filteredItems).toEqual([
      { title: 'Pastel Balloon Arch', category: 'balloon-arches' },
      { title: 'Wedding Entrance Arch', category: 'balloon-arches' },
    ]);
  });

  test('returns all portfolio items when category is all', () => {
    const items = [
      { title: 'Pastel Balloon Arch', category: 'balloon-arches' },
      { title: 'Birthday Number Stack', category: 'number-stacks' },
      { title: 'Wedding Entrance Arch', category: 'balloon-arches' },
    ];

    const filteredItems = filterPortfolioItems(items, 'all');

    expect(filteredItems).toEqual(items);
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

    const items = [
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
    ];

    renderPortfolioFilterButtons(portfolioFilters);
    initPortfolioFilterRendering(items);

    const balloonArchesButton = document.querySelector('.portfolio-filter-button[data-category="balloon-arches"]');

    balloonArchesButton.click();

    const renderedCards = document.querySelectorAll('.portfolio-card');

    expect(renderedCards.length).toBe(1);
    expect(renderedCards[0].querySelector('h3').textContent).toBe('Pastel Balloon Arch');

    delete global.renderPortfolioSlides;
  });
});
