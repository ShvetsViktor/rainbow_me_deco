/**
 * Removes Swiper pagination bullets from the keyboard Tab order.
 * This keeps keyboard navigation shorter while leaving pagination visible.
 */
function removePaginationBulletsFromTabOrder(swiperElement) {
  const paginationBullets = swiperElement.querySelectorAll('.swiper-pagination-bullet');

  paginationBullets.forEach((bullet) => {
    bullet.setAttribute('tabindex', '-1');
  });
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { removePaginationBulletsFromTabOrder };
}
