document.addEventListener('DOMContentLoaded', () => {
  // Initialize services carousel if the function is available.
  if (typeof initServicesCarousel === 'function') {
    initServicesCarousel();
  }

  // Render portfolio slides if the function and data are available.
  if (typeof renderPortfolioSlides === 'function' && Array.isArray(portfolioItems)) {
    renderPortfolioSlides(portfolioItems);
  }

  // Initialize portfolio carousel after portfolio slides are rendered.
  if (typeof initPortfolioCarousel === 'function') {
    initPortfolioCarousel();
  }
  if (typeof initMobileNavigation === 'function') {
    initMobileNavigation();
  }
});
