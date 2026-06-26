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
  const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
  const estimateWidget = document.querySelector('.estimate-widget');
  const estimateTotal = document.querySelector('.estimate-total');
  const estimateCount = document.querySelector('.estimate-count');
  const viewEstimateButton = document.querySelector('.estimate-view-button');
  const estimatePanel = document.querySelector('.estimate-panel');
  const estimateList = document.querySelector('.estimate-list');
  const closeEstimateButton = document.querySelector('.estimate-panel-close');
  const estimateBackdrop = document.querySelector('.estimate-backdrop');
  const estimateCountBadge = document.querySelector('.estimate-count-badge');
  const estimatePanelTotal = document.querySelector('.estimate-panel-total');

  if (
    !portfolioWrapper ||
    !estimateWidget ||
    !estimateTotal ||
    !estimateCount ||
    !estimateCountBadge ||
    !viewEstimateButton ||
    !estimatePanel ||
    !estimatePanelTotal ||
    !estimateList ||
    !closeEstimateButton ||
    !estimateBackdrop
  ) {
    return;
  }

  let estimateItems = [];

  function renderEstimateList() {
    estimateList.innerHTML = '';

    for (let item of estimateItems) {
      const listItem = document.createElement('li');

      listItem.classList.add('estimate-list-item');

      listItem.innerHTML = `
      <span class="estimate-list-item-title">${item.title}</span>
      <span class="estimate-list-item-price">£${item.price}</span>
      <button class="estimate-remove-button" type="button" data-title="${item.title}">
        Remove
      </button>
    `;

      estimateList.appendChild(listItem);
    }
  }

  function updateEstimateWidget() {
    const total = calculateEstimateTotal(estimateItems);

    estimateWidget.hidden = false;
    estimateTotal.textContent = `£${total}`;
    estimateCountBadge.textContent = estimateItems.length;
    estimatePanelTotal.textContent = `£${total}`;

    if (estimateItems.length === 1) {
      estimateCount.textContent = '1 item';
    } else {
      estimateCount.textContent = `${estimateItems.length} items`;
    }

    renderEstimateList();
  }

  viewEstimateButton.addEventListener('click', () => {
    estimatePanel.hidden = false;
    estimateBackdrop.hidden = false;
  });

  closeEstimateButton.addEventListener('click', () => {
    estimatePanel.hidden = true;
    estimateBackdrop.hidden = true;
  });

  estimateBackdrop.addEventListener('click', () => {
    estimatePanel.hidden = true;
    estimateBackdrop.hidden = true;
  });

  estimateList.addEventListener('click', (event) => {
    const removeButton = event.target.closest('.estimate-remove-button');

    if (!removeButton) {
      return;
    }

    const selectedTitle = removeButton.getAttribute('data-title');

    estimateItems = removeItemFromEstimate(estimateItems, selectedTitle);

    updateEstimateWidget();

    if (estimateItems.length === 0) {
      estimateWidget.hidden = true;
      estimatePanel.hidden = true;
      estimateBackdrop.hidden = true;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      estimatePanel.hidden = true;
      estimateBackdrop.hidden = true;
    }
  });

  portfolioWrapper.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-estimate');

    if (!addButton) {
      return;
    }

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

    updateEstimateWidget();
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    addItemToEstimate,
    calculateEstimateTotal,
    removeItemFromEstimate,
    initEstimateBuilder,
  };
}
