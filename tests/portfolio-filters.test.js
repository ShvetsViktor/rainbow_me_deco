describe('Portfolio filtering', () => {
  test('filters portfolio items by category', () => {
    const items = [
      { title: 'Pastel Balloon Arch', category: 'balloon-arches' },
      { title: 'Birthday Number Stack', category: 'number-stacks' },
      { title: 'Wedding Entrance Arch', category: 'balloon-arches' },
    ];

    const filteredItems = filterPortfolioItems(items, 'balloon-arches');

    expect(filteredItems).toEqual([
      { title: 'Pastel Balloon Arch', category: 'balloon-arches' },
      { title: 'Wedding Entrance Arch', category: 'balloon-arches' },
    ]);
  });
});
