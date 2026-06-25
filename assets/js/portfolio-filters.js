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

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { filterPortfolioItems };
}
