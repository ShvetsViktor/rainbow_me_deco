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

function renderPortfolioFilterButtons(categories) {
  const target = document.querySelector('.portfolio-filters');

  for (let category of categories) {
    const button = document.createElement('button');

    button.classList.add('portfolio-filter-button');
    button.type = 'button';
    button.textContent = category.label;
    button.setAttribute('data-category', category.value);

    target.appendChild(button);
  }
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { filterPortfolioItems, renderPortfolioFilterButtons };
}
