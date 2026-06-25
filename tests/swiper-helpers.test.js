const { removePaginationBulletsFromTabOrder } = require('../assets/js/swiper-helpers');

describe('Swiper helpers', () => {
  test('removes pagination bullets from keyboard tab order', () => {
    document.body.innerHTML = `
      <div class="swiper">
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet" tabindex="0"></span>
          <span class="swiper-pagination-bullet" tabindex="0"></span>
        </div>
      </div>
    `;

    const swiperElement = document.querySelector('.swiper');

    removePaginationBulletsFromTabOrder(swiperElement);

    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

    for (const bullet of paginationBullets) {
      expect(bullet.getAttribute('tabindex')).toBe('-1');
    }
  });
});
