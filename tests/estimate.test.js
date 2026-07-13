const {
  addItemToEstimate,
  calculateEstimateTotal,
  removeItemFromEstimate,
  updateAddToEstimateButtons,
} = require('../assets/js/estimate');

const testItem = {
  title: 'Pastel Balloon Arch',
  price: 120,
};

const secondTestItem = {
  title: 'Birthday Number Stack',
  price: 65,
};

describe('Estimate pure functions', () => {
  test('adds item to estimate list', () => {
    const estimateItems = [];

    const updatedEstimateItems = addItemToEstimate(estimateItems, testItem);

    expect(updatedEstimateItems).toEqual([testItem]);
  });

  test('does not add duplicate item to estimate list', () => {
    const estimateItems = [testItem];

    const updatedEstimateItems = addItemToEstimate(estimateItems, testItem);

    expect(updatedEstimateItems).toEqual([testItem]);
  });

  test('calculates estimate total price', () => {
    const estimateItems = [testItem, secondTestItem];

    const total = calculateEstimateTotal(estimateItems);

    expect(total).toBe(185);
  });

  test('removes item from estimate list', () => {
    const estimateItems = [testItem, secondTestItem];

    const updatedEstimateItems = removeItemFromEstimate(estimateItems, testItem.title);

    expect(updatedEstimateItems).toEqual([secondTestItem]);
  });

  test('updates all matching add to estimate buttons when item is added', () => {
    document.body.innerHTML = `
    <button class="add-to-estimate" data-title="Pastel Balloon Arch">Add to estimate</button>
    <button class="add-to-estimate" data-title="Pastel Balloon Arch">Add to estimate</button>
    <button class="add-to-estimate" data-title="Birthday Number Stack">Add to estimate</button>
  `;

    const estimateItems = [testItem];

    updateAddToEstimateButtons(estimateItems);

    const buttons = document.querySelectorAll('.add-to-estimate');

    expect(buttons[0].disabled).toBe(true);
    expect(buttons[0].textContent).toBe('Added ✓');
    expect(buttons[0].classList.contains('is-added')).toBe(true);

    expect(buttons[1].disabled).toBe(true);
    expect(buttons[1].textContent).toBe('Added ✓');
    expect(buttons[1].classList.contains('is-added')).toBe(true);

    expect(buttons[2].disabled).toBe(false);
    expect(buttons[2].querySelector('.button-label').textContent).toBe('Add to estimate');
    expect(buttons[2].querySelector('.button-icon').textContent).toBe('+');
    expect(buttons[2].classList.contains('is-added')).toBe(false);
  });
});
