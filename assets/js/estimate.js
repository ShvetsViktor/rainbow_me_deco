function addItemToEstimate(estimateItems, item) {
  return [...estimateItems, item];
}

if (typeof module !== 'undefined') {
  module.exports = { addItemToEstimate };
}
