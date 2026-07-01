/**
 * Removes Swiper pagination bullets from the keyboard Tab order.
 *
 * Swiper creates pagination bullets as focusable buttons by default.
 * In this project, keyboard users can use the carousel navigation arrows,
 * so removing bullets from the tab order keeps keyboard navigation shorter.
 */
function removePaginationBulletsFromTabOrder(swiperElement) {
  // Defensive check allows this helper to be called safely during Swiper updates.
  if (!swiperElement) {
    return;
  }

  const paginationBullets = swiperElement.querySelectorAll('.swiper-pagination-bullet');

  for (const bullet of paginationBullets) {
    bullet.setAttribute('tabindex', '-1');
  }
}

// Export function for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { removePaginationBulletsFromTabOrder };
}
