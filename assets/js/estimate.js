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

function showBalloonAnimation(addButton) {
  const buttonPosition = addButton.getBoundingClientRect();
  const animation = document.createElement('div');

  const animationLeft = buttonPosition.left + buttonPosition.width / 2;
  const animationTop = buttonPosition.top + buttonPosition.height / 2;

  animation.classList.add('balloon-animation');
  animation.setAttribute('aria-hidden', 'true');
  animation.style.left = `${animationLeft}px`;
  animation.style.top = `${animationTop}px`;

  animation.innerHTML = `
    <span class="balloon balloon-one"></span>
    <span class="balloon balloon-two"></span>
    <span class="balloon balloon-three"></span>
    <span class="balloon balloon-four"></span>
    <span class="balloon balloon-five"></span>
  `;

  document.body.appendChild(animation);

  setTimeout(() => {
    animation.remove();
  }, 2200);
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
  const estimateRequestButton = document.querySelector('.estimate-request-button');
  const enquirySection = document.querySelector('#enquiry');
  const enquiryEstimateList = document.querySelector('.enquiry-estimate-list');
  const enquiryEstimateTotal = document.querySelector('.enquiry-estimate-total strong');
  const enquiryEstimateTotalBlock = document.querySelector('.enquiry-estimate-total');

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
  let hasReachedEnquirySummary = false;
  let isPortfolioModalOpen = false;

  function resetEnquirySubmittedState() {
    const enquiryForm = document.querySelector('.enquiry-form');
    const successMessage = document.querySelector('.form-success');

    if (enquirySection) {
      enquirySection.classList.remove('is-submitted');
    }

    if (enquiryForm) {
      enquiryForm.classList.remove('is-submitted');
    }

    if (successMessage) {
      successMessage.hidden = true;
    }
  }

  function closeEstimatePanel() {
    estimatePanel.hidden = true;
    estimateBackdrop.hidden = true;
  }

  function updateEstimateWidgetVisibility() {
    if (estimateItems.length === 0 || hasReachedEnquirySummary || isPortfolioModalOpen) {
      estimateWidget.hidden = true;
      return;
    }

    estimateWidget.hidden = false;
  }

  function updateEnquirySummaryPositionState() {
    if (!enquiryEstimateTotalBlock) {
      hasReachedEnquirySummary = false;
      updateEstimateWidgetVisibility();
      return;
    }

    const enquiryEstimateTotalPosition = enquiryEstimateTotalBlock.getBoundingClientRect();

    hasReachedEnquirySummary = enquiryEstimateTotalPosition.top <= window.innerHeight;

    updateEstimateWidgetVisibility();
  }

  function renderEstimateList() {
    estimateList.innerHTML = '';

    for (let item of estimateItems) {
      const listItem = document.createElement('li');

      listItem.classList.add('estimate-list-item');

      listItem.innerHTML = `
        <img class="estimate-list-item-image" src="${item.image}" alt="${item.alt}">
        <div class="estimate-list-item-content">
          <span class="estimate-list-item-title">${item.title}</span>
          <span class="estimate-list-item-price">£${item.price}</span>
          <button class="estimate-remove-button" type="button" data-title="${item.title}">
            Remove
          </button>
        </div>
      `;

      estimateList.appendChild(listItem);
    }
  }

  function updateEnquiryEstimateSummary() {
    if (!enquiryEstimateList || !enquiryEstimateTotal) {
      return;
    }

    enquiryEstimateList.innerHTML = '';

    for (let item of estimateItems) {
      const listItem = document.createElement('li');
      listItem.classList.add('enquiry-estimate-item');

      listItem.innerHTML = `
        <img class="enquiry-estimate-item-image" src="${item.image}" alt="${item.alt}">
        <div class="enquiry-estimate-item-content">
          <span class="enquiry-estimate-item-title">${item.title}</span>
          <span class="enquiry-estimate-item-price">£${item.price}</span>
          <button class="enquiry-estimate-remove-button" type="button" data-title="${item.title}">
            Remove
          </button>
        </div>
      `;

      enquiryEstimateList.appendChild(listItem);
    }

    enquiryEstimateTotal.textContent = `£${calculateEstimateTotal(estimateItems)}`;
  }

  function updateEstimateWidget() {
    const total = calculateEstimateTotal(estimateItems);

    estimateTotal.textContent = `£${total}`;
    estimateCountBadge.textContent = estimateItems.length;
    estimatePanelTotal.textContent = `£${total}`;

    updateEnquiryEstimateSummary();

    if (estimateItems.length === 1) {
      estimateCount.textContent = '1 item';
    } else {
      estimateCount.textContent = `${estimateItems.length} items`;
    }

    renderEstimateList();
    updateEnquirySummaryPositionState();
  }

  document.addEventListener('enquiry:submitted', () => {
    estimateItems = [];
    closeEstimatePanel();
    updateEstimateWidget();
  });

  viewEstimateButton.addEventListener('click', () => {
    estimatePanel.hidden = false;
    estimateBackdrop.hidden = false;
  });

  closeEstimateButton.addEventListener('click', () => {
    closeEstimatePanel();
  });

  estimateBackdrop.addEventListener('click', () => {
    closeEstimatePanel();
  });

  if (estimateRequestButton) {
    estimateRequestButton.addEventListener('click', () => {
      closeEstimatePanel();

      if (enquirySection) {
        enquirySection.scrollIntoView();
      }
    });
  }

  estimateList.addEventListener('click', (event) => {
    const removeButton = event.target.closest('.estimate-remove-button');

    if (!removeButton) {
      return;
    }

    const selectedTitle = removeButton.getAttribute('data-title');

    estimateItems = removeItemFromEstimate(estimateItems, selectedTitle);

    updateEstimateWidget();

    if (estimateItems.length === 0) {
      closeEstimatePanel();
    }
  });

  if (enquiryEstimateList) {
    enquiryEstimateList.addEventListener('click', (event) => {
      const removeButton = event.target.closest('.enquiry-estimate-remove-button');

      if (!removeButton) {
        return;
      }

      const selectedTitle = removeButton.getAttribute('data-title');

      estimateItems = removeItemFromEstimate(estimateItems, selectedTitle);

      updateEstimateWidget();

      if (estimateItems.length === 0) {
        closeEstimatePanel();
      }
    });
  }

  document.addEventListener('portfolioModal:open', () => {
    isPortfolioModalOpen = true;
    updateEstimateWidgetVisibility();
  });

  document.addEventListener('portfolioModal:close', () => {
    isPortfolioModalOpen = false;
    updateEstimateWidgetVisibility();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeEstimatePanel();
    }
  });

  window.addEventListener('scroll', updateEnquirySummaryPositionState);
  window.addEventListener('resize', updateEnquirySummaryPositionState);

  updateEnquirySummaryPositionState();

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

    resetEnquirySubmittedState();

    const previousItemsCount = estimateItems.length;

    estimateItems = addItemToEstimate(estimateItems, selectedItem);

    updateEstimateWidget();

    if (estimateItems.length > previousItemsCount) {
      showBalloonAnimation(addButton);
    }
  });

  document.addEventListener('click', (event) => {
    const serviceAddButton = event.target.closest('#services .add-to-estimate');

    if (!serviceAddButton) {
      return;
    }

    const selectedTitle = serviceAddButton.getAttribute('data-title');
    const selectedPrice = Number(serviceAddButton.getAttribute('data-price'));
    const selectedImage = serviceAddButton.getAttribute('data-image');
    const selectedAlt = serviceAddButton.getAttribute('data-alt');

    if (!selectedTitle || !selectedPrice || !selectedImage || !selectedAlt) {
      return;
    }

    const selectedItem = {
      title: selectedTitle,
      price: selectedPrice,
      image: selectedImage,
      alt: selectedAlt,
    };

    resetEnquirySubmittedState();

    const previousItemsCount = estimateItems.length;

    estimateItems = addItemToEstimate(estimateItems, selectedItem);

    updateEstimateWidget();

    if (estimateItems.length > previousItemsCount) {
      showBalloonAnimation(serviceAddButton);
    }
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
