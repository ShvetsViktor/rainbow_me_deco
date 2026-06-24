const { initMobileNavigation } = require('../assets/js/navigation');

describe('Main navigation tests', () => {
  test('toggles mobile menu when menu button is clicked', () => {
    document.body.innerHTML = `
    <header>
      <button class="menu-toggle" type="button" aria-expanded="false">
        Menu
      </button>

      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
      </nav>
    </header>
  `;

    initMobileNavigation();

    const menuButton = document.querySelector('header .menu-toggle');
    const nav = document.querySelector('header nav');

    menuButton.click();

    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(nav.classList.contains('is-open')).toBe(true);

    menuButton.click();

    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    expect(nav.classList.contains('is-open')).toBe(false);
  });
});
