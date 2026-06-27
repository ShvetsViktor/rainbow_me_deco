const { initEstimateBuilder } = require('../assets/js/estimate');
const { testPortfolioItems } = require('./fixtures/portfolio-items');

function setupEstimateDom(buttonTitle = 'Pastel Balloon Arch') {
  document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper">
        <button class="add-to-estimate" type="button" data-title="${buttonTitle}">
          Add to estimate
        </button>
      </div>
    </div>

    <aside class="estimate-widget" aria-label="Estimate summary" hidden>
      <div class="estimate-widget-content">
        <div>
          <p class="estimate-widget-title">Estimated total</p>

          <p class="estimate-widget-summary">
            <span class="estimate-total">£0</span>
            <span class="estimate-count" hidden>0 items</span>
          </p>
        </div>

        <button class="button button-primary estimate-view-button" type="button">
          <span>View estimate</span>
          <span class="estimate-count-badge">0</span>
        </button>
      </div>
    </aside>

    <div class="estimate-backdrop" hidden></div>

    <div class="estimate-panel" hidden>
      <div class="estimate-panel-header">
        <div>
          <h2>Your Estimate</h2>
          <p>Review your selected decorations and request a quote.</p>
        </div>

        <button class="estimate-panel-close" type="button" aria-label="Close estimate panel">×</button>
      </div>

      <ul class="estimate-list" aria-label="Selected decorations"></ul>

      <div class="estimate-panel-footer">
        <div>
          <p class="estimate-panel-total-label">Estimated total</p>
          <p class="estimate-panel-total">£0</p>
        </div>

        <button class="button button-primary estimate-request-button" type="button">
          Request a Quote
        </button>
      </div>
    </div>

    <section id="enquiry">
      <aside class="enquiry-estimate-card" aria-label="Selected estimate summary">
        <div class="enquiry-estimate-content">
          <h3>Your selected estimate</h3>

          <ul class="enquiry-estimate-list"></ul>

          <div class="enquiry-estimate-total">
            <span>Estimated total</span>
            <strong>£0</strong>
          </div>
        </div>
      </aside>
    </section>
  `;

  const enquiryEstimateTotalBlock = document.querySelector('.enquiry-estimate-total');

  enquiryEstimateTotalBlock.getBoundingClientRect = jest.fn(() => ({
    top: 1000,
    bottom: 1060,
    left: 0,
    right: 300,
    width: 300,
    height: 60,
  }));

  initEstimateBuilder(testPortfolioItems);

  return {
    portfolioWrapper: document.querySelector('.portfolio-swiper .swiper-wrapper'),
    addButton: document.querySelector('.add-to-estimate'),
    estimateWidget: document.querySelector('.estimate-widget'),
    estimateTotal: document.querySelector('.estimate-total'),
    estimateCount: document.querySelector('.estimate-count'),
    estimateCountBadge: document.querySelector('.estimate-count-badge'),
    viewEstimateButton: document.querySelector('.estimate-view-button'),
    closeButton: document.querySelector('.estimate-panel-close'),
    estimatePanel: document.querySelector('.estimate-panel'),
    estimatePanelTotal: document.querySelector('.estimate-panel-total'),
    estimateBackdrop: document.querySelector('.estimate-backdrop'),
    enquirySection: document.querySelector('#enquiry'),
    enquiryEstimateTotalBlock,
  };
}

function addServiceButtonToDom() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <section id="services">
        <button
          class="button button-primary add-to-estimate"
          type="button"
          data-title="Balloon Arches"
          data-price="120"
          data-image="assets/images/gallery/ballon-arch-backdrop.webp"
          data-alt="Balloon arch decoration for an event"
        >
          <span>Add to estimate</span>
          <span class="button-icon" aria-hidden="true">+</span>
        </button>
      </section>
    `
  );

  return document.querySelector('#services .add-to-estimate');
}

function setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, top) {
  enquiryEstimateTotalBlock.getBoundingClientRect = jest.fn(() => ({
    top,
    bottom: top + 60,
    left: 0,
    right: 300,
    width: 300,
    height: 60,
  }));

  window.dispatchEvent(new Event('scroll'));
}

describe('Estimate builder', () => {
  test('shows estimate widget when add to estimate button is clicked', () => {
    const { addButton, estimateWidget, estimateTotal, estimateCount } = setupEstimateDom();

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);
    expect(estimateTotal.textContent).toBe('£120');
    expect(estimateCount.textContent).toBe('1 item');
  });

  test('adds item to estimate after portfolio cards are re-rendered', () => {
    const { portfolioWrapper, estimateWidget, estimateTotal, estimateCount } = setupEstimateDom('Old Item');

    portfolioWrapper.innerHTML = `
      <button class="add-to-estimate" type="button" data-title="Pastel Balloon Arch">
        Add to estimate
      </button>
    `;

    const addButton = document.querySelector('.add-to-estimate');

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);
    expect(estimateTotal.textContent).toBe('£120');
    expect(estimateCount.textContent).toBe('1 item');
  });

  test('opens estimate panel when view estimate button is clicked', () => {
    const { addButton, viewEstimateButton, estimatePanel } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    expect(estimatePanel.hidden).toBe(false);
  });

  test('renders selected items inside estimate panel', () => {
    const { addButton, viewEstimateButton } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    const estimateListItems = document.querySelectorAll('.estimate-list-item');

    expect(estimateListItems.length).toBe(1);
    expect(estimateListItems[0].textContent).toContain('Pastel Balloon Arch');
    expect(estimateListItems[0].textContent).toContain('£120');
  });

  test('closes estimate panel when close button is clicked', () => {
    const { addButton, viewEstimateButton, closeButton, estimatePanel } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    expect(estimatePanel.hidden).toBe(false);

    closeButton.click();

    expect(estimatePanel.hidden).toBe(true);
  });

  test('closes estimate panel when Escape key is pressed', () => {
    const { addButton, viewEstimateButton, estimatePanel } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    expect(estimatePanel.hidden).toBe(false);

    const escapeKeyEvent = new KeyboardEvent('keydown', { key: 'Escape' });

    document.dispatchEvent(escapeKeyEvent);

    expect(estimatePanel.hidden).toBe(true);
  });

  test('shows estimate backdrop when estimate panel is opened', () => {
    const { addButton, viewEstimateButton, estimatePanel, estimateBackdrop } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    expect(estimatePanel.hidden).toBe(false);
    expect(estimateBackdrop.hidden).toBe(false);
  });

  test('closes estimate panel when backdrop is clicked', () => {
    const { addButton, viewEstimateButton, estimatePanel, estimateBackdrop } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    expect(estimatePanel.hidden).toBe(false);
    expect(estimateBackdrop.hidden).toBe(false);

    estimateBackdrop.click();

    expect(estimatePanel.hidden).toBe(true);
    expect(estimateBackdrop.hidden).toBe(true);
  });

  test('closes estimate panel and scrolls to enquiry section when request quote button is clicked', () => {
    const { addButton, viewEstimateButton, estimatePanel, estimateBackdrop, enquirySection } = setupEstimateDom();

    enquirySection.scrollIntoView = jest.fn();

    addButton.click();
    viewEstimateButton.click();

    const requestQuoteButton = document.querySelector('.estimate-request-button');

    expect(estimatePanel.hidden).toBe(false);
    expect(estimateBackdrop.hidden).toBe(false);

    requestQuoteButton.click();

    expect(estimatePanel.hidden).toBe(true);
    expect(estimateBackdrop.hidden).toBe(true);
    expect(enquirySection.scrollIntoView).toHaveBeenCalled();
  });

  test('updates estimate badge and panel total when item is added', () => {
    const { addButton, estimateCountBadge, estimatePanelTotal } = setupEstimateDom();

    addButton.click();

    expect(estimateCountBadge.textContent).toBe('1');
    expect(estimatePanelTotal.textContent).toBe('£120');
  });

  test('removes item from estimate when remove button is clicked', () => {
    const { addButton, estimateTotal, estimateCount, estimateCountBadge, estimatePanelTotal } = setupEstimateDom();

    addButton.click();

    const removeButton = document.querySelector('.estimate-remove-button');

    removeButton.click();

    const estimateListItems = document.querySelectorAll('.estimate-list-item');

    expect(estimateListItems.length).toBe(0);
    expect(estimateTotal.textContent).toBe('£0');
    expect(estimateCount.textContent).toBe('0 items');
    expect(estimateCountBadge.textContent).toBe('0');
    expect(estimatePanelTotal.textContent).toBe('£0');
  });

  test('hides estimate UI when last item is removed', () => {
    const { addButton, viewEstimateButton, estimateWidget, estimatePanel, estimateBackdrop } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    const removeButton = document.querySelector('.estimate-remove-button');

    removeButton.click();

    expect(estimateWidget.hidden).toBe(true);
    expect(estimatePanel.hidden).toBe(true);
    expect(estimateBackdrop.hidden).toBe(true);
  });

  test('adds service item to estimate when service add button is clicked', () => {
    const { estimateWidget, estimateTotal, estimateCount, estimateCountBadge, estimatePanelTotal } = setupEstimateDom();
    const serviceAddButton = addServiceButtonToDom();

    serviceAddButton.click();

    expect(estimateWidget.hidden).toBe(false);
    expect(estimateTotal.textContent).toBe('£120');
    expect(estimateCount.textContent).toBe('1 item');
    expect(estimateCountBadge.textContent).toBe('1');
    expect(estimatePanelTotal.textContent).toBe('£120');
  });

  test('shows balloon animation from portfolio add button when item is added', () => {
    const { addButton } = setupEstimateDom();

    addButton.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 200,
      width: 80,
      height: 40,
    }));

    addButton.click();

    const balloonAnimation = document.querySelector('.balloon-animation');
    const balloons = document.querySelectorAll('.balloon-animation .balloon');

    expect(balloonAnimation).not.toBeNull();
    expect(balloonAnimation.getAttribute('aria-hidden')).toBe('true');
    expect(balloonAnimation.style.left).toBe('140px');
    expect(balloonAnimation.style.top).toBe('220px');
    expect(balloons.length).toBe(5);
  });

  test('shows balloon animation from service add button when service item is added', () => {
    setupEstimateDom();

    const serviceAddButton = addServiceButtonToDom();

    serviceAddButton.getBoundingClientRect = jest.fn(() => ({
      left: 50,
      top: 300,
      width: 100,
      height: 50,
    }));

    serviceAddButton.click();

    const balloonAnimation = document.querySelector('.balloon-animation');

    expect(balloonAnimation).not.toBeNull();
    expect(balloonAnimation.style.left).toBe('100px');
    expect(balloonAnimation.style.top).toBe('325px');
  });

  test('renders selected item image inside estimate panel', () => {
    const { addButton, viewEstimateButton } = setupEstimateDom();

    addButton.click();
    viewEstimateButton.click();

    const estimateImage = document.querySelector('.estimate-list-item-image');

    expect(estimateImage).not.toBeNull();
    expect(estimateImage.getAttribute('src')).toBe('assets/images/gallery/ballon-arch-backdrop.webp');
    expect(estimateImage.getAttribute('alt')).toBe('Pastel balloon arch decoration');
  });

  test('renders selected service image inside estimate panel', () => {
    setupEstimateDom();

    const serviceAddButton = addServiceButtonToDom();
    const viewEstimateButton = document.querySelector('.estimate-view-button');

    serviceAddButton.click();
    viewEstimateButton.click();

    const estimateImage = document.querySelector('.estimate-list-item-image');

    expect(estimateImage).not.toBeNull();
    expect(estimateImage.getAttribute('src')).toBe('assets/images/gallery/ballon-arch-backdrop.webp');
    expect(estimateImage.getAttribute('alt')).toBe('Balloon arch decoration for an event');
  });

  test('updates enquiry estimate summary with selected item image when item is added', () => {
    const { addButton } = setupEstimateDom();

    addButton.click();

    const enquiryEstimateItems = document.querySelectorAll('.enquiry-estimate-list li');
    const enquiryEstimateImage = document.querySelector('.enquiry-estimate-item-image');
    const enquiryEstimateTotal = document.querySelector('.enquiry-estimate-total strong');
    const enquiryRemoveButton = document.querySelector('.enquiry-estimate-remove-button');

    expect(enquiryEstimateItems.length).toBe(1);
    expect(enquiryEstimateItems[0].textContent).toContain('Pastel Balloon Arch');
    expect(enquiryEstimateItems[0].textContent).toContain('£120');

    expect(enquiryEstimateImage).not.toBeNull();
    expect(enquiryEstimateImage.getAttribute('src')).toBe('assets/images/gallery/ballon-arch-backdrop.webp');
    expect(enquiryEstimateImage.getAttribute('alt')).toBe('Pastel balloon arch decoration');

    expect(enquiryEstimateTotal.textContent).toBe('£120');

    expect(enquiryRemoveButton).not.toBeNull();
    expect(enquiryRemoveButton.getAttribute('type')).toBe('button');
    expect(enquiryRemoveButton.getAttribute('data-title')).toBe('Pastel Balloon Arch');
    expect(enquiryRemoveButton.textContent.trim()).toBe('Remove');
  });

  test('updates enquiry estimate summary with selected service image when service item is added', () => {
    setupEstimateDom();

    const serviceAddButton = addServiceButtonToDom();

    serviceAddButton.click();

    const enquiryEstimateItems = document.querySelectorAll('.enquiry-estimate-list li');
    const enquiryEstimateImage = document.querySelector('.enquiry-estimate-item-image');
    const enquiryEstimateTotal = document.querySelector('.enquiry-estimate-total strong');

    expect(enquiryEstimateItems.length).toBe(1);
    expect(enquiryEstimateItems[0].textContent).toContain('Balloon Arches');
    expect(enquiryEstimateItems[0].textContent).toContain('£120');

    expect(enquiryEstimateImage).not.toBeNull();
    expect(enquiryEstimateImage.getAttribute('src')).toBe('assets/images/gallery/ballon-arch-backdrop.webp');
    expect(enquiryEstimateImage.getAttribute('alt')).toBe('Balloon arch decoration for an event');

    expect(enquiryEstimateTotal.textContent).toBe('£120');
  });

  test('updates enquiry estimate summary when item is removed', () => {
    const { addButton } = setupEstimateDom();

    addButton.click();

    const removeButton = document.querySelector('.estimate-remove-button');

    removeButton.click();

    const enquiryEstimateItems = document.querySelectorAll('.enquiry-estimate-list li');
    const enquiryEstimateImage = document.querySelector('.enquiry-estimate-item-image');
    const enquiryEstimateTotal = document.querySelector('.enquiry-estimate-total strong');

    expect(enquiryEstimateItems.length).toBe(0);
    expect(enquiryEstimateImage).toBeNull();
    expect(enquiryEstimateTotal.textContent).toBe('£0');
  });

  test('removes item from estimate when enquiry summary remove button is clicked', () => {
    const { addButton, estimateTotal, estimateCount, estimateCountBadge, estimatePanelTotal } = setupEstimateDom();

    addButton.click();

    const enquiryRemoveButton = document.querySelector('.enquiry-estimate-remove-button');

    expect(enquiryRemoveButton).not.toBeNull();

    enquiryRemoveButton.click();

    const enquiryEstimateItems = document.querySelectorAll('.enquiry-estimate-list li');
    const estimateListItems = document.querySelectorAll('.estimate-list-item');
    const enquiryEstimateTotal = document.querySelector('.enquiry-estimate-total strong');

    expect(enquiryEstimateItems.length).toBe(0);
    expect(estimateListItems.length).toBe(0);

    expect(estimateTotal.textContent).toBe('£0');
    expect(estimateCount.textContent).toBe('0 items');
    expect(estimateCountBadge.textContent).toBe('0');
    expect(estimatePanelTotal.textContent).toBe('£0');
    expect(enquiryEstimateTotal.textContent).toBe('£0');
  });

  test('shows estimate widget when enquiry estimate total has not been reached and estimate has items', () => {
    const { addButton, estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, 1000);

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);
  });

  test('hides estimate widget when enquiry estimate total is visible', () => {
    const { addButton, estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, 500);

    expect(estimateWidget.hidden).toBe(true);
  });

  test('keeps estimate widget hidden when user has scrolled below enquiry estimate total', () => {
    const { addButton, estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, -100);

    expect(estimateWidget.hidden).toBe(true);
  });

  test('keeps estimate widget hidden when estimate is empty even before enquiry estimate total is reached', () => {
    const { estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, 1000);

    expect(estimateWidget.hidden).toBe(true);
  });

  test('hides estimate widget when portfolio modal is opened', () => {
    const { addButton, estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, 1000);

    addButton.click();

    expect(estimateWidget.hidden).toBe(false);

    document.dispatchEvent(new Event('portfolioModal:open'));

    expect(estimateWidget.hidden).toBe(true);
  });

  test('shows estimate widget when portfolio modal is closed and estimate has items', () => {
    const { addButton, estimateWidget, enquiryEstimateTotalBlock } = setupEstimateDom();

    setEnquiryEstimateTotalPosition(enquiryEstimateTotalBlock, 1000);

    addButton.click();

    document.dispatchEvent(new Event('portfolioModal:open'));

    expect(estimateWidget.hidden).toBe(true);

    document.dispatchEvent(new Event('portfolioModal:close'));

    expect(estimateWidget.hidden).toBe(false);
  });
});
