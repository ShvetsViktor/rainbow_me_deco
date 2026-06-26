function initPortfolioImageModal() {
  const imageButtons = document.querySelectorAll('.portfolio-image-button');
  const modal = document.querySelector('.portfolio-modal');
  const modalImage = document.querySelector('.portfolio-modal-image');
  const closeButton = document.querySelector('.portfolio-modal-close');

  if (!modal || !modalImage || !closeButton) {
    return;
  }

  function closeModal() {
    modal.hidden = true;
  }

  for (let imageButton of imageButtons) {
    imageButton.addEventListener('click', () => {
      const image = imageButton.querySelector('img');

      modal.hidden = false;
      modalImage.src = image.getAttribute('src');
      modalImage.alt = image.getAttribute('alt');
    });
  }

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

if (typeof module !== 'undefined') {
  module.exports = { initPortfolioImageModal };
}
