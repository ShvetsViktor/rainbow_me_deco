describe('contact API handler', () => {
  test('exports a request handler function', () => {
    const contactHandler = require('../api/contact');

    expect(typeof contactHandler).toBe('function');
  });

  test('returns a temporary JSON response', async () => {
    const contactHandler = require('../api/contact');

    const request = {};

    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await contactHandler(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      success: true,
      message: 'Contact API is working.',
    });
  });
});
