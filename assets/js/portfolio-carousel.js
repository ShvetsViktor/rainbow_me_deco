/**
 * Creates portfolio card slides from an array of portfolio item objects.
 * Each card is added to the portfolio Swiper wrapper and given the required Swiper slide class.
 */
function renderPortfolioSlides(items) {
  const target = document.querySelector('.portfolio-swiper .swiper-wrapper');

  for (const item of items) {
    const slide = document.createElement('article');
    slide.classList.add('portfolio-card', 'swiper-slide');

    const imageButton = document.createElement('button');
    imageButton.classList.add('portfolio-image-button');
    imageButton.type = 'button';
    imageButton.setAttribute('aria-label', `View larger image: ${item.title}`);
    imageButton.setAttribute('data-full-image', item.image);
    imageButton.setAttribute('data-alt', item.alt);

    const img = document.createElement('img');
    img.src = item.image;
    img.srcset = `${item.mobileImage} 800w, ${item.image} ${item.imageWidth}w`;
    img.sizes = '(max-width: 768px) 100vw, 615px';
    img.alt = item.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    imageButton.appendChild(img);
    slide.appendChild(imageButton);

    const title = document.createElement('h3');
    title.textContent = item.title;
    slide.appendChild(title);

    const descr = document.createElement('p');
    descr.textContent = item.description;
    slide.appendChild(descr);

    const actions = document.createElement('div');
    actions.classList.add('portfolio-card-actions');

    const priceLabel = document.createElement('span');
    priceLabel.classList.add('portfolio-price-label');
    priceLabel.textContent = 'Starting from';

    const price = document.createElement('span');
    price.classList.add('portfolio-price');
    price.textContent = `£${item.price}`;

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('portfolio-price-wrapper');
    priceWrapper.appendChild(priceLabel);
    priceWrapper.appendChild(price);

    const button = document.createElement('button');
    button.classList.add('button', 'button-primary', 'add-to-estimate');
    button.type = 'button';
    button.setAttribute('data-title', item.title);
    button.setAttribute('data-price', item.price);
    button.setAttribute('data-image', item.image);
    button.setAttribute('data-alt', item.alt);
    button.innerHTML = '<span class="button-icon" aria-hidden="true">+</span><span>Add to estimate</span>';

    actions.appendChild(priceWrapper);
    actions.appendChild(button);
    slide.appendChild(actions);

    target.appendChild(slide);
  }
}

/**
 * Initializes the portfolio Swiper carousel after the portfolio slides have been rendered.
 * The function checks that the carousel element and external Swiper library are available before running.
 */
function initPortfolioCarousel() {
  const portfolioSwiperElement = document.querySelector('.portfolio-swiper');

  // Error handling: prevent carousel initialization if the DOM element or external Swiper library is missing.
  if (!portfolioSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(portfolioSwiperElement, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    watchOverflow: true,
    pagination: {
      el: '.portfolio-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.portfolio-swiper .swiper-button-next',
      prevEl: '.portfolio-swiper .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.2,
        spaceBetween: 24,
      },
    },
    on: {
      init() {
        removePaginationBulletsFromTabOrder(portfolioSwiperElement);
      },
      paginationUpdate() {
        removePaginationBulletsFromTabOrder(portfolioSwiperElement);
      },
    },
  });
}

// Export functions for Jest tests when this file is loaded in a Node environment.
if (typeof module !== 'undefined') {
  module.exports = { renderPortfolioSlides, initPortfolioCarousel };
}
