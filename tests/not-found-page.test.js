const fs = require('fs');
const path = require('path');

describe('404 page', () => {
  let html;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../404.html');
    html = fs.readFileSync(filePath, 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('contains a not found message and a back home link', () => {
    const heading = document.querySelector('h1');
    const homeLink = document.querySelector('.not-found-card a[href="index.html"]');

    expect(heading).not.toBeNull();
    expect(heading.textContent).toContain('Page not found');

    expect(homeLink).not.toBeNull();
    expect(homeLink.textContent).toContain('Back to home');
  });
});
