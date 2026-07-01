/**
 * Initialises the mobile navigation menu.
 *
 * The desktop navigation is visible through CSS media queries.
 * On mobile, JavaScript toggles the .is-open class and updates aria-expanded.
 */
function initMobileNavigation() {
  const menuButton = document.querySelector('header .menu-toggle');
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('header nav a');

  // Prevents errors if the header or menu button is missing.
  if (!menuButton || !nav) {
    return;
  }

  menuButton.addEventListener('click', () => {
    const isMenuClosed = menuButton.getAttribute('aria-expanded') === 'false';

    if (isMenuClosed) {
      nav.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Closing the menu after link selection improves mobile navigation flow.
  for (const link of navLinks) {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  }
}

// Export function for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { initMobileNavigation };
}
