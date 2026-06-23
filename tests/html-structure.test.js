const fs = require('fs');

const path = require('path');

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

  document.documentElement.innerHTML = html;
});

describe('Page layout structure', () => {
  test('header is on the page', () => {
    expect(document.getElementsByTagName('header').length).toBe(1);
  });

  test('navbar is on the page', () => {
    expect(document.querySelectorAll('header nav').length).toBe(1);
  });

  test('hero is on the page', () => {
    expect(document.querySelectorAll('section#hero').length).toBe(1);
  });

  test('services is on the page', () => {
    expect(document.querySelectorAll('section#services').length).toBe(1);
  });

  test('portfolio is on the page', () => {
    expect(document.querySelectorAll('section#portfolio').length).toBe(1);
  });

  test('how-it-works is on the page', () => {
    expect(document.querySelectorAll('section#how-it-works').length).toBe(1);
  });

  test('testimonials is on the page', () => {
    expect(document.querySelectorAll('section#testimonials').length).toBe(1);
  });

  test('enquiry is on the page', () => {
    expect(document.querySelectorAll('section#enquiry').length).toBe(1);
  });

  test('footer is on the page', () => {
    expect(document.getElementsByTagName('footer').length).toBe(1);
  });
});

describe('Hero section content', () => {
  test('hero contains a main heading', () => {
    expect(document.querySelectorAll('#hero h1').length).toBe(1);
  });

  test('hero contains introductory text', () => {
    expect(document.querySelectorAll('#hero p').length > 0).toBe(true);
  });

  test('hero contains an image with alt text', () => {
    const heroImage = document.querySelector('#hero img');

    expect(heroImage !== null).toBe(true);
    expect(heroImage.hasAttribute('alt')).toBe(true);
    expect(heroImage.getAttribute('alt').length > 0).toBe(true);
  });

  test('hero contains a portfolio CTA link', () => {
    expect(document.querySelectorAll('#hero a[href="#portfolio"]').length).toBe(1);
  });

  test('hero contains an enquiry CTA link', () => {
    expect(document.querySelectorAll('#hero a[href="#enquiry"]').length).toBe(1);
  });
});

describe('Services section structure', () => {
  test('services section contains a heading', () => {
    expect(document.querySelectorAll('#services h2').length).toBe(1);
  });

  test('services section contains a Swiper container', () => {
    expect(document.querySelectorAll('#services .services-swiper').length).toBe(1);
  });

  test('services section contains a Swiper wrapper', () => {
    expect(document.querySelectorAll('#services .swiper-wrapper').length).toBe(1);
  });

  test('services section contains Swiper slides', () => {
    expect(document.querySelectorAll('#services .swiper-slide').length).toBe(6);
  });

  test('services section contains pagination', () => {
    expect(document.querySelectorAll('#services .swiper-pagination').length).toBe(1);
  });

  test('services section contains navigation buttons', () => {
    expect(document.querySelectorAll('#services .swiper-button-prev').length).toBe(1);
    expect(document.querySelectorAll('#services .swiper-button-next').length).toBe(1);
  });

  test('services section contains service cards', () => {
    expect(document.querySelectorAll('#services .service-card').length).toBe(6);
  });

  test('each service card contains a heading', () => {
    expect(document.querySelectorAll('#services .service-card h3').length).toBe(6);
  });

  test('each service card contains an image and has alt text', () => {
    const serviceImages = document.querySelectorAll('#services .service-card img');

    expect(serviceImages.length).toBe(6);

    serviceImages.forEach((image) => {
      expect(image.hasAttribute('alt')).toBe(true);
      expect(image.getAttribute('alt').length > 0).toBe(true);
    });
  });

  test('each service card contains an add to estimate button', () => {
    expect(document.querySelectorAll('#services .service-card button.add-to-estimate').length).toBe(6);
  });
});

describe('Portfolio section structure', () => {
  test('portfolio section contains a heading', () => {
    expect(document.querySelectorAll('#portfolio h2').length).toBe(1);
  });

  test('portfolio section contains filter controls', () => {
    expect(document.querySelectorAll('#portfolio .portfolio-filters').length).toBe(1);
  });

  test('portfolio section contains a Swiper container', () => {
    expect(document.querySelectorAll('#portfolio .portfolio-swiper').length).toBe(1);
  });

  test('portfolio section contains a Swiper wrapper for rendered slides', () => {
    expect(document.querySelectorAll('#portfolio .portfolio-swiper .swiper-wrapper').length).toBe(1);
  });

  test('portfolio section contains Swiper pagination', () => {
    expect(document.querySelectorAll('#portfolio .portfolio-swiper .swiper-pagination').length).toBe(1);
  });

  test('portfolio section contains Swiper navigation buttons', () => {
    expect(document.querySelectorAll('#portfolio .portfolio-swiper .swiper-button-prev').length).toBe(1);
    expect(document.querySelectorAll('#portfolio .portfolio-swiper .swiper-button-next').length).toBe(1);
  });
});

describe('Page layout structure', () => {
  test('navbar has link to services section', () => {
    const servicesLink = document.querySelector('header nav a[href="#services"]');

    expect(servicesLink).not.toBeNull();
    expect(servicesLink.textContent).toBe('Services');
  });

  test('navbar has link to portfolio section', () => {
    const servicesLink = document.querySelector('header nav a[href="#portfolio"]');

    expect(servicesLink).not.toBeNull();
    expect(servicesLink.textContent).toBe('Portfolio');
  });
});
