const { filterPortfolioItems } = require('../assets/js/portfolio-filters');

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

  test('renders portfolio filter buttons', () => {
    document.body.innerHTML = `
    <div class="portfolio-filters" aria-label="Portfolio filters"></div>
  `;

    const categories = [
      { label: 'All', value: 'all' },
      { label: 'Balloon Arches', value: 'balloon-arches' },
      { label: 'Number Stacks', value: 'number-stacks' },
      { label: 'Backdrops', value: 'backdrops' },
      { label: 'Table Decor', value: 'table-decor' },
      { label: 'Business Decor', value: 'business-decor' },
      { label: 'Custom Setups', value: 'custom-setups' },
    ];

    renderPortfolioFilterButtons(categories);

    const filterButtons = document.querySelectorAll('.portfolio-filter-button');

    expect(filterButtons.length).toBe(7);
    expect(filterButtons[0].textContent).toBe('All');
    expect(filterButtons[0].getAttribute('data-category')).toBe('all');
    expect(filterButtons[6].textContent).toBe('Custom Setups');
    expect(filterButtons[6].getAttribute('data-category')).toBe('custom-setups');
  });
});
