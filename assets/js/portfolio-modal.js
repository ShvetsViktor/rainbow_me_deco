/**
 * Initialises the portfolio image modal.
 *
 * Portfolio cards are rendered dynamically, so the click listener is attached
 * to the Swiper wrapper and uses event delegation to detect image buttons.
 */
function initPortfolioImageModal() {
  const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
  const modal = document.querySelector('.portfolio-modal');
  const modalImage = document.querySelector('.portfolio-modal-image');
  const closeButton = document.querySelector('.portfolio-modal-close');

  // Prevents errors if the modal markup or portfolio wrapper is missing.
  if (!portfolioWrapper || !modal || !modalImage || !closeButton) {
    return;
  }

  let lastOpenedImageButton = null;

  /**
   * Opens the modal and updates the modal image from the clicked portfolio card.
   */
  function openModal(imageButton) {
    const image = imageButton.querySelector('img');

    if (!image) {
      return;
    }

    // Stores the trigger button so focus can return after the modal closes.
    lastOpenedImageButton = imageButton;

    modal.hidden = false;
    modalImage.src = image.getAttribute('src');
    modalImage.alt = image.getAttribute('alt');

    // Tells estimate.js to hide the sticky estimate widget while the modal is open.
    document.dispatchEvent(new Event('portfolioModal:open'));

    closeButton.focus();
  }

  /**
   * Closes the modal and returns focus to the portfolio image button that opened it.
   */
  function closeModal() {
    if (modal.hidden) {
      return;
    }

    modal.hidden = true;

    // Tells estimate.js that the sticky estimate widget can be shown again if needed.
    document.dispatchEvent(new Event('portfolioModal:close'));

    if (lastOpenedImageButton) {
      lastOpenedImageButton.focus();
    }
  }

  // Event delegation handles clicks on portfolio images rendered after page load.
  portfolioWrapper.addEventListener('click', (event) => {
    const imageButton = event.target.closest('.portfolio-image-button');

    if (!imageButton) {
      return;
    }

    openModal(imageButton);
  });

  closeButton.addEventListener('click', closeModal);

  // Clicking the dark backdrop closes the modal, but clicking the image does not.
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Escape gives keyboard users a quick way to close the modal.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// Export function for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { initPortfolioImageModal };
}
