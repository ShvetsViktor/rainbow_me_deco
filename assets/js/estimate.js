function addItemToEstimate(estimateItems, item) {
  for (let estimateItem of estimateItems) {
    if (estimateItem.title === item.title) {
      return estimateItems;
    }
  }

  return [...estimateItems, item];
}

if (typeof module !== 'undefined') {
  module.exports = { addItemToEstimate };
}
