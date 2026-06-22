/**
 * Creates portfolio card elements and adds the Swiper slide class to each card.
 */
function renderPortfolioSlides(items) {
  let target = document.querySelector('#portfolio .swiper-wrapper');

  //   Error handling: stop the function if the portfolio wrapper or data is missing.
  if (!target || !Array.isArray(items)) {
    return;
  }

  // Clear existing portfolio slides before rendering new ones.
  target.innerHTML = '';

  for (let item of items) {
    target.append(`<article class="portfolio-card swiper-slide">
            <img src="${item.image}" alt="${item.alt}" />
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <button class="button button-primary add-to-estimate" type="button">Add to estimate</button>
        </article>`);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { renderPortfolioSlides };
}
