/**
 * Portfolio filter data.
 *
 * Keeping filter labels and category values in one array makes the filters
 * easier to render and update without changing index.html manually.
 */
const portfolioFilters = [
  { label: 'All', category: 'all' },
  { label: 'Balloon Arches', category: 'balloon-arches' },
  { label: 'Number Stacks', category: 'number-stacks' },
  { label: 'Backdrops', category: 'backdrops' },
  { label: 'Table Decor', category: 'table-decor' },
  { label: 'Business Decor', category: 'business-decor' },
  { label: 'Custom Setups', category: 'custom-setups' },
];

/**
 * Returns portfolio items that match the selected category.
 *
 * Items use a categories array because one real decoration setup can belong
 * to more than one category, such as both balloon arches and backdrops.
 */
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

/**
 * Renders portfolio filter buttons into the empty filter container in index.html.
 *
 * Buttons are generated from data so the filter UI stays in sync with the
 * filter categories used by JavaScript.
 */
function renderPortfolioFilterButtons(filters) {
  const target = document.querySelector('.portfolio-filters');

  // Prevents errors if the portfolio section is not available.
  if (!target) {
    return;
  }

  for (let filter of filters) {
    const button = document.createElement('button');

    button.classList.add('portfolio-filter-button');
    button.type = 'button';
    button.textContent = filter.label;
    button.setAttribute('data-category', filter.category);

    // The All filter starts as selected because all portfolio items are visible by default.
    if (filter.category === 'all') {
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.setAttribute('aria-pressed', 'false');
    }

    target.appendChild(button);
  }
}

/**
 * Adds active state behaviour to portfolio filter buttons.
 *
 * aria-pressed communicates the selected filter state to assistive technology.
 */
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

/**
 * Re-renders the portfolio carousel when a filter is selected.
 *
 * The Swiper wrapper is cleared, matching items are rendered, then the Swiper
 * instance is updated and moved back to the first slide.
 */
function initPortfolioFilterRendering(items) {
  const filterButtons = document.querySelectorAll('.portfolio-filter-button');

  for (let button of filterButtons) {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      const filteredItems = filterPortfolioItems(items, selectedCategory);
      const portfolioSwiperElement = document.querySelector('.portfolio-swiper');
      const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');

      if (!portfolioWrapper) {
        return;
      }

      portfolioWrapper.innerHTML = '';
      renderPortfolioSlides(filteredItems);

      document.dispatchEvent(new Event('portfolio:updated'));

      // Swiper must be updated after changing its slide DOM.
      if (portfolioSwiperElement && portfolioSwiperElement.swiper) {
        portfolioSwiperElement.swiper.update();

        // Resetting to the first slide avoids keeping an old slide index after filtering.
        portfolioSwiperElement.swiper.slideTo(0, 0);
      }
    });
  }
}

/**
 * Connects Services cards to Portfolio filtering.
 *
 * When a user clicks "View examples" on a service card, the matching portfolio
 * filter is triggered and the page scrolls to the Portfolio section.
 */
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

// Export functions and data for Jest tests when this file is loaded in a Node environment.
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
