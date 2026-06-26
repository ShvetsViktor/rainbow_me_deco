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

test('shows estimate widget when add to estimate button is clicked', () => {
  document.body.innerHTML = `
    <button class="add-to-estimate" type="button" data-title="Pastel Balloon Arch">
      Add to estimate
    </button>

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
  `;

  initEstimateBuilder(testPortfolioItems);

  const addButton = document.querySelector('.add-to-estimate');
  const estimateWidget = document.querySelector('.estimate-widget');
  const estimateTotal = document.querySelector('.estimate-total');
  const estimateCount = document.querySelector('.estimate-count');

  addButton.click();

  expect(estimateWidget.hidden).toBe(false);
  expect(estimateTotal.textContent).toBe('£120');
  expect(estimateCount.textContent).toBe('1 item');
});

test('adds item to estimate after portfolio cards are re-rendered', () => {
  document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper">
        <button class="add-to-estimate" type="button" data-title="Old Item">
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
  `;

  initEstimateBuilder(testPortfolioItems);

  const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');

  portfolioWrapper.innerHTML = `
    <button class="add-to-estimate" type="button" data-title="Pastel Balloon Arch">
      Add to estimate
    </button>
  `;

  const addButton = document.querySelector('.add-to-estimate');
  const estimateWidget = document.querySelector('.estimate-widget');
  const estimateTotal = document.querySelector('.estimate-total');
  const estimateCount = document.querySelector('.estimate-count');

  addButton.click();

  expect(estimateWidget.hidden).toBe(false);
  expect(estimateTotal.textContent).toBe('£120');
  expect(estimateCount.textContent).toBe('1 item');
});
