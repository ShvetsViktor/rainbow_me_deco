function initPortfolioImageModal() {
  const portfolioWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
  const modal = document.querySelector('.portfolio-modal');
  const modalImage = document.querySelector('.portfolio-modal-image');
  const closeButton = document.querySelector('.portfolio-modal-close');

  if (!portfolioWrapper || !modal || !modalImage || !closeButton) {
    return;
  }

  let lastOpenedImageButton = null;

  function openModal(imageButton) {
    const image = imageButton.querySelector('img');

    if (!image) {
      return;
    }

    lastOpenedImageButton = imageButton;

    modal.hidden = false;
    modalImage.src = image.getAttribute('src');
    modalImage.alt = image.getAttribute('alt');

    closeButton.focus();
  }

  function closeModal() {
    modal.hidden = true;

    if (lastOpenedImageButton) {
      lastOpenedImageButton.focus();
    }
  }

  portfolioWrapper.addEventListener('click', (event) => {
    const imageButton = event.target.closest('.portfolio-image-button');

    if (!imageButton) {
      return;
    }

    openModal(imageButton);
  });

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = { initPortfolioImageModal };
}
