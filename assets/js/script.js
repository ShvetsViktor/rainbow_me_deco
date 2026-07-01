/**
 * Main project initialisation file.
 *
 * Each feature is loaded from a separate JavaScript file, then initialised here
 * after the DOM is ready. The typeof checks prevent errors if a script is missing
 * or a feature is not available on a specific page.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialises the Services carousel before users interact with the service cards.
  if (typeof initServicesCarousel === 'function') {
    initServicesCarousel();
  }

  // Renders portfolio cards from portfolio-data.js before the portfolio carousel starts.
  if (typeof renderPortfolioSlides === 'function' && Array.isArray(portfolioItems)) {
    renderPortfolioSlides(portfolioItems);
  }

  // Enables the portfolio image modal for dynamically rendered portfolio images.
  if (typeof initPortfolioImageModal === 'function') {
    initPortfolioImageModal();
  }

  // Connects Add to estimate buttons, widget, estimate panel and enquiry summary.
  if (typeof initEstimateBuilder === 'function' && Array.isArray(portfolioItems)) {
    initEstimateBuilder(portfolioItems);
  }

  // Initialises the portfolio carousel after slides have been inserted into the DOM.
  if (typeof initPortfolioCarousel === 'function') {
    initPortfolioCarousel();
  }

  // Enables mobile navigation open/close behaviour.
  if (typeof initMobileNavigation === 'function') {
    initMobileNavigation();
  }

  // Creates portfolio filter buttons from the filter data array.
  if (typeof renderPortfolioFilterButtons === 'function' && Array.isArray(portfolioFilters)) {
    renderPortfolioFilterButtons(portfolioFilters);
  }

  // Adds active visual state and aria-pressed behaviour to portfolio filters.
  if (typeof initPortfolioFilters === 'function') {
    initPortfolioFilters();
  }

  // Re-renders portfolio cards when the user selects a filter.
  if (typeof initPortfolioFilterRendering === 'function' && Array.isArray(portfolioItems)) {
    initPortfolioFilterRendering(portfolioItems);
  }

  // Connects service "View examples" buttons to matching portfolio filters.
  if (typeof initServicePortfolioLinks === 'function') {
    initServicePortfolioLinks();
  }

  // Enables enquiry form validation and success state.
  if (typeof initEnquiryForm === 'function') {
    initEnquiryForm();
  }
});
