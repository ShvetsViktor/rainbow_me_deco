const {
  filterPortfolioItems,
  renderPortfolioFilterButtons,
  portfolioFilters,
  initPortfolioFilters,
} = require('../assets/js/portfolio-filters');

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
});
