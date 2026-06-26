const { renderPortfolioSlides } = require('../assets/js/portfolio-carousel');
const { initPortfolioImageModal } = require('../assets/js/portfolio-modal');

const testPortfolioItems = [
  {
    title: 'Pastel Balloon Arch',
    category: 'balloon-arches',
    image: 'assets/images/portfolio/balloon-arches-1.avif',
    alt: 'Pastel balloon arch decoration',
    description: 'A soft pastel balloon arch.',
    price: 120,
  },
];

test('opens portfolio image modal when portfolio image button is clicked', () => {
  document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper"></div>
    </div>

    <div class="portfolio-modal" hidden>
      <button class="portfolio-modal-close" type="button">Close</button>
      <img class="portfolio-modal-image" src="" alt="" />
    </div>
  `;

  renderPortfolioSlides(testPortfolioItems);
  initPortfolioImageModal();

  const imageButton = document.querySelector('.portfolio-image-button');

  imageButton.click();

  const modal = document.querySelector('.portfolio-modal');
  const modalImage = document.querySelector('.portfolio-modal-image');

  expect(modal.hidden).toBe(false);
  expect(modalImage.getAttribute('src')).toBe(testPortfolioItems[0].image);
  expect(modalImage.getAttribute('alt')).toBe(testPortfolioItems[0].alt);
});

test('closes portfolio image modal when close button is clicked', () => {
  document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper"></div>
    </div>

    <div class="portfolio-modal" hidden>
      <button class="portfolio-modal-close" type="button">Close</button>
      <img class="portfolio-modal-image" src="" alt="" />
    </div>
  `;

  renderPortfolioSlides(testPortfolioItems);
  initPortfolioImageModal();

  const imageButton = document.querySelector('.portfolio-image-button');
  const closeButton = document.querySelector('.portfolio-modal-close');
  const modal = document.querySelector('.portfolio-modal');

  imageButton.click();

  expect(modal.hidden).toBe(false);

  closeButton.click();

  expect(modal.hidden).toBe(true);
});

test('closes portfolio image modal when Escape key is pressed', () => {
  document.body.innerHTML = `
    <div class="swiper portfolio-swiper">
      <div class="swiper-wrapper"></div>
    </div>

    <div class="portfolio-modal" hidden>
      <button class="portfolio-modal-close" type="button">Close</button>
      <img class="portfolio-modal-image" src="" alt="" />
    </div>
  `;

  renderPortfolioSlides(testPortfolioItems);
  initPortfolioImageModal();

  const imageButton = document.querySelector('.portfolio-image-button');
  const modal = document.querySelector('.portfolio-modal');

  imageButton.click();

  expect(modal.hidden).toBe(false);

  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

  expect(modal.hidden).toBe(true);
});
