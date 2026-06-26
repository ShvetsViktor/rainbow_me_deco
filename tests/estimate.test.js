const { addItemToEstimate } = require('../assets/js/estimate');

const testItem = {
  title: 'Pastel Balloon Arch',
  category: 'balloon-arches',
  price: 120,
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
