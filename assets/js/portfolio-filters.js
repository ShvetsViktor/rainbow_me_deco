const portfolioFilters = [
  { label: 'All', category: 'all' },
  { label: 'Balloon Arches', category: 'balloon-arches' },
  { label: 'Number Stacks', category: 'number-stacks' },
  { label: 'Backdrops', category: 'backdrops' },
  { label: 'Table Decor', category: 'table-decor' },
  { label: 'Business Decor', category: 'business-decor' },
  { label: 'Custom Setups', category: 'custom-setups' },
];

function filterPortfolioItems(items, category) {
  if (category === 'all') {
    return items;
  }

  const filteredItems = [];

  for (let item of items) {
    if (item.category === category) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}

function renderPortfolioFilterButtons(filters) {
  const target = document.querySelector('.portfolio-filters');

  for (let filter of filters) {
    const button = document.createElement('button');

    button.classList.add('portfolio-filter-button');
    button.type = 'button';
    button.textContent = filter.label;
    button.setAttribute('data-category', filter.category);

    if (filter.category === 'all') {
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.setAttribute('aria-pressed', 'false');
    }

    target.appendChild(button);
  }
}

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.portfolio-filter-button');

  for (let button of filterButtons) {
    button.addEventListener('click', () => {
      for (let filterButton of filterButtons) {
        filterButton.classList.remove('is-active');
        filterButton.setAttribute('aria-pressed', 'false');
      }

      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
    });
  }
}

function initPortfolioFilterRendering(items, renderSlides) {
  const filterButtons = document.querySelectorAll('.portfolio-filter-button');

  for (let button of filterButtons) {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      const filteredItems = filterPortfolioItems(items, selectedCategory);
      const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');

      portfolioWrapper.innerHTML = '';
      renderSlides(filteredItems);
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    portfolioFilters,
    filterPortfolioItems,
    renderPortfolioFilterButtons,
    initPortfolioFilters,
    initPortfolioFilterRendering,
  };
}
