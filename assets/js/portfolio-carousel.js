/**
 * Renders portfolio items into Swiper slide cards.
 *
 * Portfolio cards are not hardcoded in index.html because the portfolio data
 * lives in portfolio-data.js. This keeps the content easier to update and
 * allows the same render function to be reused after filtering.
 */
function renderPortfolioSlides(items) {
  const target = document.querySelector('.portfolio-swiper .swiper-wrapper');

  // Defensive check prevents errors in tests or if the portfolio wrapper is missing.
  if (!target) {
    return;
  }

  for (const item of items) {
    // Swiper requires each carousel item to have the swiper-slide class.
    const slide = document.createElement('article');
    slide.classList.add('portfolio-card', 'swiper-slide');

    // The image is wrapped in a button so users can open the modal by mouse or keyboard.
    const imageButton = document.createElement('button');
    imageButton.classList.add('portfolio-image-button');
    imageButton.type = 'button';
    imageButton.setAttribute('aria-label', `View larger image: ${item.title}`);
    imageButton.setAttribute('data-full-image', item.image);
    imageButton.setAttribute('data-alt', item.alt);

    // Responsive image attributes improve loading on smaller screens.
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

    // Action area keeps the guide price and estimate button grouped together.
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

    // Data attributes allow estimate.js to identify which portfolio item was selected.
    const button = document.createElement('button');
    button.classList.add('button', 'button-primary', 'add-to-estimate');
    button.type = 'button';
    button.setAttribute('data-title', item.title);
    button.setAttribute('data-price', item.price);
    button.setAttribute('data-image', item.image);
    button.setAttribute('data-alt', item.alt);
    button.innerHTML =
      '<span class="button-label">Add to estimate</span><span class="button-icon" aria-hidden="true">+</span>';

    actions.appendChild(priceWrapper);
    actions.appendChild(button);
    slide.appendChild(actions);

    target.appendChild(slide);
  }
}

/**
 * Initialises the portfolio Swiper carousel after portfolio slides are rendered.
 *
 * Swiper needs the slide elements to exist before it calculates widths,
 * pagination and navigation behaviour.
 */
function initPortfolioCarousel() {
  const portfolioSwiperElement = document.querySelector('.portfolio-swiper');

  // Prevents console errors if Swiper CDN fails or the carousel is not present.
  if (!portfolioSwiperElement || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(portfolioSwiperElement, {
    // Shows slightly more than one card on mobile to suggest horizontal swiping.
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,

    // Disables unnecessary carousel behaviour if there are not enough slides.
    watchOverflow: true,

    pagination: {
      el: '.portfolio-swiper .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.portfolio-swiper .swiper-button-next',
      prevEl: '.portfolio-swiper .swiper-button-prev',
    },

    // More cards are shown as screen width increases.
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
      // Swiper creates pagination buttons dynamically, so their tab order is adjusted after init.
      init() {
        removePaginationBulletsFromTabOrder(portfolioSwiperElement);
      },

      // Pagination can be recreated after updates, especially after filtering.
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
