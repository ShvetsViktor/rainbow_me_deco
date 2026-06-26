function addItemToEstimate(estimateItems, item) {
  for (let estimateItem of estimateItems) {
    if (estimateItem.title === item.title) {
      return estimateItems;
    }
  }

  return [...estimateItems, item];
}

function calculateEstimateTotal(estimateItems) {
  let total = 0;

  for (let item of estimateItems) {
    total += item.price;
  }

  return total;
}

function removeItemFromEstimate(estimateItems, title) {
  const updatedEstimateItems = [];

  for (let item of estimateItems) {
    if (item.title !== title) {
      updatedEstimateItems.push(item);
    }
  }

  return updatedEstimateItems;
}

if (typeof module !== 'undefined') {
  module.exports = { addItemToEstimate, calculateEstimateTotal, removeItemFromEstimate };
}
