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

function initEstimateBuilder(items) {
  const addButtons = document.querySelectorAll('.add-to-estimate');
  const estimateWidget = document.querySelector('.estimate-widget');
  const estimateTotal = document.querySelector('.estimate-total');
  const estimateCount = document.querySelector('.estimate-count');

  if (!estimateWidget || !estimateTotal || !estimateCount) {
    return;
  }

  let estimateItems = [];

  for (let addButton of addButtons) {
    addButton.addEventListener('click', () => {
      const selectedTitle = addButton.getAttribute('data-title');
      let selectedItem = null;

      for (let item of items) {
        if (item.title === selectedTitle) {
          selectedItem = item;
        }
      }

      if (!selectedItem) {
        return;
      }

      estimateItems = addItemToEstimate(estimateItems, selectedItem);

      const total = calculateEstimateTotal(estimateItems);

      estimateWidget.hidden = false;
      estimateTotal.textContent = `£${total}`;

      if (estimateItems.length === 1) {
        estimateCount.textContent = '1 item';
      } else {
        estimateCount.textContent = `${estimateItems.length} items`;
      }
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { addItemToEstimate, calculateEstimateTotal, removeItemFromEstimate, initEstimateBuilder };
}
