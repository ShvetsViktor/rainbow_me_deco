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
    if (item.categories.includes(category)) {
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

function initPortfolioFilterRendering(items) {
  const filterButtons = document.querySelectorAll('.portfolio-filter-button');

  for (let button of filterButtons) {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      const filteredItems = filterPortfolioItems(items, selectedCategory);
      const portfolioSwiperElement = document.querySelector('.portfolio-swiper');
      const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');

      portfolioWrapper.innerHTML = '';
      renderPortfolioSlides(filteredItems);

      if (portfolioSwiperElement && portfolioSwiperElement.swiper) {
        portfolioSwiperElement.swiper.update();
        portfolioSwiperElement.swiper.slideTo(0, 0);
      }
    });
  }
}

function initServicePortfolioLinks() {
  const serviceButtons = document.querySelectorAll('.view-portfolio-category');

  for (let serviceButton of serviceButtons) {
    serviceButton.addEventListener('click', () => {
      const selectedCategory = serviceButton.getAttribute('data-category');
      const matchingFilterButton = document.querySelector(
        `.portfolio-filter-button[data-category="${selectedCategory}"]`
      );
      const portfolioSection = document.querySelector('#portfolio');

      if (matchingFilterButton) {
        matchingFilterButton.click();
      }

      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
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
    initServicePortfolioLinks,
  };
}
