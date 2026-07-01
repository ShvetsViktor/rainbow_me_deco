/**
 * Adds an item to the estimate unless an item with the same title already exists.
 *
 * This prevents duplicate estimate items when the user clicks the same
 * Add to estimate button more than once.
 */
function addItemToEstimate(estimateItems, item) {
  for (let estimateItem of estimateItems) {
    if (estimateItem.title === item.title) {
      return estimateItems;
    }
  }

  return [...estimateItems, item];
}

/**
 * Calculates the current guide estimate total from selected items.
 */
function calculateEstimateTotal(estimateItems) {
  let total = 0;

  for (let item of estimateItems) {
    total += item.price;
  }

  return total;
}

/**
 * Removes an estimate item by title and returns the updated estimate array.
 */
function removeItemFromEstimate(estimateItems, title) {
  const updatedEstimateItems = [];

  for (let item of estimateItems) {
    if (item.title !== title) {
      updatedEstimateItems.push(item);
    }
  }

  return updatedEstimateItems;
}

/**
 * Shows a short decorative balloon animation near the clicked Add to estimate button.
 *
 * The animation is visual feedback only, so it is hidden from assistive technology.
 */
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

  // Removes the animation after the CSS animation has finished.
  setTimeout(() => {
    animation.remove();
  }, 2200);
}

/**
 * Initialises the estimate builder.
 *
 * This connects:
 * - portfolio Add to estimate buttons;
 * - service Add to estimate buttons;
 * - sticky estimate widget;
 * - estimate review panel;
 * - enquiry estimate summary;
 * - enquiry form submission reset behaviour.
 */
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

  /**
   * Required DOM elements for the estimate builder.
   *
   * Keeping these elements in an object makes the missing-element warning more useful:
   * instead of only failing silently, the console can show exactly which selector target is missing.
   */
  const requiredElements = {
    portfolioWrapper,
    estimateWidget,
    estimateTotal,
    estimateCount,
    estimateCountBadge,
    viewEstimateButton,
    estimatePanel,
    estimatePanelTotal,
    estimateList,
    closeEstimateButton,
    estimateBackdrop,
  };

  /**
   * Finds missing required elements before the feature starts.
   *
   * This is defensive programming: if the HTML structure changes,
   * the feature exits safely and gives a useful warning for debugging.
   */
  const missingElements = Object.entries(requiredElements)
    .filter(([, element]) => !element)
    .map(([name]) => name);

  if (missingElements.length > 0) {
    console.warn(`Estimate builder could not initialise. Missing elements: ${missingElements.join(', ')}`);
    return;
  }

  let estimateItems = [];

  // Tracks whether the enquiry estimate summary is visible.
  // If it is visible, the sticky widget is hidden to avoid duplicated information.
  let hasReachedEnquirySummary = false;

  // Tracks portfolio modal state so the sticky estimate widget does not appear over the modal.
  let isPortfolioModalOpen = false;

  /**
   * Clears the submitted enquiry state when the user starts a new estimate flow.
   *
   * This is needed after successful form submission. If the user adds a new item,
   * the previous success message should disappear and the enquiry form area should be usable again.
   */
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

  /**
   * Closes the estimate panel and its backdrop.
   */
  function closeEstimatePanel() {
    estimatePanel.hidden = true;
    estimateBackdrop.hidden = true;
  }

  /**
   * Shows or hides the sticky estimate widget.
   *
   * The widget is hidden when:
   * - the estimate is empty;
   * - the enquiry estimate summary is already visible;
   * - the portfolio modal is open.
   */
  function updateEstimateWidgetVisibility() {
    if (estimateItems.length === 0 || hasReachedEnquirySummary || isPortfolioModalOpen) {
      estimateWidget.hidden = true;
      return;
    }

    estimateWidget.hidden = false;
  }

  /**
   * Checks whether the enquiry estimate summary is visible in the viewport.
   *
   * This prevents the same estimate information appearing twice:
   * once in the sticky widget and once in the enquiry section.
   */
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

  /**
   * Renders selected estimate items inside the estimate panel.
   *
   * The panel is used when the user wants to review the estimate before continuing.
   */
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

  /**
   * Renders selected estimate items inside the enquiry section.
   *
   * This keeps the final enquiry step connected to the estimate the user built earlier.
   */
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

  /**
   * Updates all estimate UI after items are added or removed.
   *
   * This keeps widget total, count badge, panel total, panel list,
   * and enquiry summary in sync.
   */
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

  /**
   * Resets the estimate after the enquiry form confirms a valid submission.
   *
   * enquiry-form.js dispatches this custom event.
   */
  document.addEventListener('enquiry:submitted', () => {
    estimateItems = [];
    closeEstimatePanel();
    updateEstimateWidget();
  });

  /**
   * Opens the estimate panel when the user wants to review selected items.
   */
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

  /**
   * Moves the user from the estimate panel to the enquiry section.
   */
  if (estimateRequestButton) {
    estimateRequestButton.addEventListener('click', () => {
      closeEstimatePanel();

      if (enquirySection) {
        enquirySection.scrollIntoView();
      }
    });
  }

  /**
   * Handles removing items from the estimate panel.
   *
   * Event delegation is used because estimate list items are rendered dynamically.
   */
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

  /**
   * Handles removing items from the enquiry estimate summary.
   *
   * This gives users another chance to adjust the estimate before submitting the form.
   */
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

  /**
   * Hide the sticky estimate widget while the portfolio image modal is open.
   *
   * The portfolio modal dispatches these custom events.
   */
  document.addEventListener('portfolioModal:open', () => {
    isPortfolioModalOpen = true;
    updateEstimateWidgetVisibility();
  });

  document.addEventListener('portfolioModal:close', () => {
    isPortfolioModalOpen = false;
    updateEstimateWidgetVisibility();
  });

  /**
   * Escape closes the estimate panel for keyboard users.
   */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeEstimatePanel();
    }
  });

  /**
   * Re-check widget visibility when the page moves or changes size.
   *
   * This is needed because the enquiry summary may enter or leave the viewport.
   */
  window.addEventListener('scroll', updateEnquirySummaryPositionState);
  window.addEventListener('resize', updateEnquirySummaryPositionState);

  updateEnquirySummaryPositionState();

  /**
   * Handles Add to estimate clicks from dynamically rendered portfolio cards.
   *
   * Event delegation is used because portfolio cards are created by JavaScript.
   */
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

    // Balloon animation only runs when a new item was actually added.
    if (estimateItems.length > previousItemsCount) {
      showBalloonAnimation(addButton);
    }
  });

  /**
   * Handles Add to estimate clicks from static service cards.
   *
   * Service cards are written in index.html, so their estimate data is read
   * from data-title, data-price, data-image and data-alt attributes.
   */
  document.addEventListener('click', (event) => {
    const serviceAddButton = event.target.closest('#services .add-to-estimate');

    if (!serviceAddButton) {
      return;
    }

    const selectedTitle = serviceAddButton.getAttribute('data-title');
    const selectedPrice = Number(serviceAddButton.getAttribute('data-price'));
    const selectedImage = serviceAddButton.getAttribute('data-image');
    const selectedAlt = serviceAddButton.getAttribute('data-alt');

    // Prevents incomplete service data from creating broken estimate items.
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

    // Balloon animation only runs when a new item was actually added.
    if (estimateItems.length > previousItemsCount) {
      showBalloonAnimation(serviceAddButton);
    }
  });
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = {
    addItemToEstimate,
    calculateEstimateTotal,
    removeItemFromEstimate,
    initEstimateBuilder,
  };
}
