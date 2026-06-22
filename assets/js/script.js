document.addEventListener('DOMContentLoaded', () => {
  // Error handling: ensure the services carousel function is available before calling it.
  if (typeof initServicesCarousel !== 'function') {
    return;
  }

  // Boot the page-specific features after the DOM is ready.
  initServicesCarousel();
});
