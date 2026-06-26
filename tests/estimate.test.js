const { addItemToEstimate, calculateEstimateTotal, removeItemFromEstimate } = require('../assets/js/estimate');

const testItem = {
  title: 'Pastel Balloon Arch',
  category: 'balloon-arches',
  price: 120,
};

const secondTestItem = {
  title: 'Birthday Number Stack',
  category: 'number-stacks',
  price: 65,
};

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
