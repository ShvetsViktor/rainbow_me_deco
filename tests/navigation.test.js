const { initMobileNavigation } = require('../assets/js/navigation');

describe('Main navigation behavior', () => {
  test('toggles mobile menu when menu button is clicked', () => {
    document.body.innerHTML = `
    <header>
      <button class="menu-toggle" type="button" aria-expanded="false">
        Menu
      </button>

      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#how-it-works">How It Works</a>
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

  test('closes mobile menu when any navigation link is clicked', () => {
    document.body.innerHTML = `
    <header>
      <button class="menu-toggle" type="button" aria-expanded="false">
        Menu
      </button>

      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#how-it-works">How It Works</a>
      </nav>
    </header>
  `;

    initMobileNavigation();

    const menuButton = document.querySelector('header .menu-toggle');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    for (const link of navLinks) {
      menuButton.click();

      expect(menuButton.getAttribute('aria-expanded')).toBe('true');
      expect(nav.classList.contains('is-open')).toBe(true);

      link.click();

      expect(menuButton.getAttribute('aria-expanded')).toBe('false');
      expect(nav.classList.contains('is-open')).toBe(false);
    }
  });
});
