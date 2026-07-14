describe('contact API handler', () => {
  test('exports a request handler function', () => {
    const contactHandler = require('../api/contact');

    expect(typeof contactHandler).toBe('function');
  });
});
