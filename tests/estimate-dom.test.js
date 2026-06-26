const { initEstimateBuilder } = require('../assets/js/estimate');

const testPortfolioItems = [
  {
    title: 'Pastel Balloon Arch',
    category: 'balloon-arches',
    image: 'assets/images/portfolio/balloon-arches-1.avif',
    alt: 'Pastel balloon arch decoration',
    description: 'A soft pastel balloon arch.',
    price: 120,
  },
];

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
        <p class="estimate-widget-title">Estimate</p>

        <p class="estimate-widget-summary">
          <span class="estimate-total">£0</span>
          <span>·</span>
          <span class="estimate-count">0 items</span>
        </p>

        <button class="button button-secondary estimate-view-button" type="button">
          View estimate
        </button>
      </div>
    </aside>

    <div class="estimate-backdrop" hidden></div>

    <div class="estimate-panel" hidden>
      <button class="estimate-panel-close" type="button">Close</button>
      <h2>Your estimate</h2>
      <ul class="estimate-list"></ul>
    </div>
  `;

  initEstimateBuilder(testPortfolioItems);

  return {
    portfolioWrapper: document.querySelector('.portfolio-swiper .swiper-wrapper'),
    addButton: document.querySelector('.add-to-estimate'),
    estimateWidget: document.querySelector('.estimate-widget'),
    estimateTotal: document.querySelector('.estimate-total'),
    estimateCount: document.querySelector('.estimate-count'),
    viewEstimateButton: document.querySelector('.estimate-view-button'),
    closeButton: document.querySelector('.estimate-panel-close'),
    estimatePanel: document.querySelector('.estimate-panel'),
    estimateBackdrop: document.querySelector('.estimate-backdrop'),
  };
}

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
