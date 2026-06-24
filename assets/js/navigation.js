function initMobileNavigation() {
  const menuButton = document.querySelector('header .menu-toggle');
  const nav = document.querySelector('header nav');

  if (!menuButton || !nav) {
    return;
  }

  menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'false') {
      nav.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { initMobileNavigation };
}
