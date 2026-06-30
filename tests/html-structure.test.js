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

  test('footer contains copyright content', () => {
    const footer = document.querySelector('.site-footer');
    const footerText = document.querySelector('.site-footer p');

    expect(footer).not.toBeNull();
    expect(footerText).not.toBeNull();
    expect(footerText.textContent).toContain('Rainbow Me');
  });

  test('footer contains back to top link', () => {
    const backToTopLink = document.querySelector('.site-footer a[href="#hero"]');

    expect(backToTopLink).not.toBeNull();
    expect(backToTopLink.textContent).toBe('Back to top');
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

    for (const image of serviceImages) {
      expect(image.hasAttribute('alt')).toBe(true);
      expect(image.getAttribute('alt').length > 0).toBe(true);
    }
  });

  test('service cards contain view examples buttons with portfolio categories', () => {
    const viewExamplesButtons = document.querySelectorAll('.service-card .view-portfolio-category');

    expect(viewExamplesButtons.length).toBe(6);

    expect(viewExamplesButtons[0].getAttribute('type')).toBe('button');
    expect(viewExamplesButtons[0].getAttribute('data-category')).toBe('balloon-arches');
    expect(viewExamplesButtons[0].textContent).toContain('View examples');

    expect(viewExamplesButtons[1].getAttribute('data-category')).toBe('number-stacks');
    expect(viewExamplesButtons[2].getAttribute('data-category')).toBe('backdrops');
    expect(viewExamplesButtons[3].getAttribute('data-category')).toBe('table-decor');
    expect(viewExamplesButtons[4].getAttribute('data-category')).toBe('business-decor');
    expect(viewExamplesButtons[5].getAttribute('data-category')).toBe('custom-setups');
  });

  test('each service card contains an add to estimate button', () => {
    expect(document.querySelectorAll('#services .service-card button.add-to-estimate').length).toBe(6);
  });
});

describe('How it works section structure', () => {
  test('how it works section contains heading content', () => {
    const section = document.querySelector('#how-it-works');
    const sectionLabel = document.querySelector('#how-it-works .section-label');
    const heading = document.querySelector('#how-it-works h2');
    const introText = document.querySelector('#how-it-works .how-it-works-intro');

    expect(section).not.toBeNull();

    expect(sectionLabel).not.toBeNull();
    expect(sectionLabel.textContent).toBe('How It Works');

    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Simple steps');

    expect(introText).not.toBeNull();
    expect(introText.textContent).toContain('We make the process easy and enjoyable.');
  });

  test('how it works section contains four process steps', () => {
    const steps = document.querySelectorAll('#how-it-works .process-step');

    expect(steps.length).toBe(4);

    expect(steps[0].textContent).toContain('Share Your Vision');
    expect(steps[1].textContent).toContain('Get a Custom Quote');
    expect(steps[2].textContent).toContain('We Design & Plan');
    expect(steps[3].textContent).toContain('You Celebrate');
  });

  test('each process step contains a number and icon', () => {
    const stepNumbers = document.querySelectorAll('#how-it-works .process-step-number');
    const stepIcons = document.querySelectorAll('#how-it-works .process-step-icon');

    expect(stepNumbers.length).toBe(4);
    expect(stepIcons.length).toBe(4);

    expect(stepNumbers[0].textContent).toBe('1');
    expect(stepNumbers[1].textContent).toBe('2');
    expect(stepNumbers[2].textContent).toBe('3');
    expect(stepNumbers[3].textContent).toBe('4');
  });
});

describe('Testimonials section structure', () => {
  test('testimonials section contains accessible heading content', () => {
    const section = document.querySelector('#testimonials');
    const sectionLabel = document.querySelector('#testimonials .section-label');
    const heading = document.querySelector('#testimonials-title');
    const introText = document.querySelector('#testimonials .testimonials-intro');

    expect(section).not.toBeNull();
    expect(section.getAttribute('aria-labelledby')).toBe('testimonials-title');

    expect(sectionLabel).not.toBeNull();
    expect(sectionLabel.textContent).toBe('Testimonials');

    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('What clients say');

    expect(introText).not.toBeNull();
    expect(introText.textContent).toContain('Real comments from happy clients');
  });

  test('testimonials section contains three testimonial cards', () => {
    const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');

    expect(testimonialCards.length).toBe(3);
  });

  test('testimonial cards contain review text and authors', () => {
    const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
    const authors = document.querySelectorAll('#testimonials .testimonial-author');

    expect(testimonialCards[0].textContent).toContain('Your attention to detail and beautiful designs are first class');
    expect(testimonialCards[1].textContent).toContain('Thank you for making such a beautiful gift for us');
    expect(testimonialCards[2].textContent).toContain('So stunning and so talented');

    expect(authors[0].textContent).toBe('@emelina_james');
    expect(authors[1].textContent).toBe('@littl_efolk');
    expect(authors[2].textContent).toBe('@the_skinologyclinic');
  });

  test('testimonial ratings are accessible and decorative stars are hidden', () => {
    const ratings = document.querySelectorAll('#testimonials .testimonial-rating');
    const ratingStars = document.querySelectorAll('#testimonials .testimonial-rating span');

    expect(ratings.length).toBe(3);
    expect(ratingStars.length).toBe(3);

    for (let rating of ratings) {
      expect(rating.getAttribute('aria-label')).toBe('5 out of 5 stars');
    }

    for (let stars of ratingStars) {
      expect(stars.getAttribute('aria-hidden')).toBe('true');
    }
  });

  test('testimonial cards contain decorative avatar placeholders', () => {
    const avatars = document.querySelectorAll('#testimonials .testimonial-avatar');

    expect(avatars.length).toBe(3);

    for (let avatar of avatars) {
      expect(avatar.getAttribute('aria-hidden')).toBe('true');
      expect(avatar.textContent.length).toBeGreaterThan(0);
    }
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

  test('portfolio image modal has accessible dialog attributes', () => {
    const modal = document.querySelector('.portfolio-modal');
    const closeButton = document.querySelector('.portfolio-modal-close');
    const modalImage = document.querySelector('.portfolio-modal-image');

    expect(modal).not.toBeNull();
    expect(modal.getAttribute('role')).toBe('dialog');
    expect(modal.getAttribute('aria-modal')).toBe('true');
    expect(modal.getAttribute('aria-label')).toBe('Enlarged portfolio image');
    expect(modal.hasAttribute('hidden')).toBe(true);

    expect(closeButton).not.toBeNull();
    expect(closeButton.getAttribute('type')).toBe('button');
    expect(closeButton.getAttribute('aria-label')).toBe('Close enlarged portfolio image');

    expect(modalImage).not.toBeNull();
  });
});

describe('Navbar layout structure', () => {
  test('navbar has link to services section', () => {
    const servicesLink = document.querySelector('header nav a[href="#services"]');

    expect(servicesLink).not.toBeNull();
    expect(servicesLink.textContent).toBe('Services');
  });

  test('navbar has link to portfolio section', () => {
    const portfolioLink = document.querySelector('header nav a[href="#portfolio"]');

    expect(portfolioLink).not.toBeNull();
    expect(portfolioLink.textContent).toBe('Portfolio');
  });

  test('navbar has link to how-it-works section', () => {
    const howItWorksLink = document.querySelector('header nav a[href="#how-it-works"]');

    expect(howItWorksLink).not.toBeNull();
    expect(howItWorksLink.textContent).toBe('How It Works');
  });

  test('navbar has link to testimonials section', () => {
    const testimonialsLink = document.querySelector('header nav a[href="#testimonials"]');

    expect(testimonialsLink).not.toBeNull();
    expect(testimonialsLink.textContent).toBe('Testimonials');
  });

  test('navbar has link to enquiry section', () => {
    const enquiryLink = document.querySelector('header nav a[href="#enquiry"]');

    expect(enquiryLink).not.toBeNull();
    expect(enquiryLink.textContent).toBe('Enquiry');
  });

  test('navbar has accessible label', () => {
    const navbar = document.querySelector('header nav');

    expect(navbar.getAttribute('aria-label')).toBe('Main navigation');
  });

  test('navbar has mobile menu toggle button', () => {
    const menuButton = document.querySelector('header .menu-toggle');

    expect(menuButton).not.toBeNull();
    expect(menuButton.getAttribute('type')).toBe('button');
  });

  test('navbar has logo link to hero section', () => {
    const logoLink = document.querySelector('header .logo[href="#hero"]');
    const logoImage = document.querySelector('header .logo img');

    expect(logoLink).not.toBeNull();
    expect(logoLink.getAttribute('aria-label')).toBe('Rainbow Me home');

    expect(logoImage).not.toBeNull();
    expect(logoImage.getAttribute('src')).toBe('assets/images/logo/responsive/rainbow-me-logo-160.png');
    expect(logoImage.getAttribute('srcset')).toContain('assets/images/logo/responsive/rainbow-me-logo-160.png 160w');
    expect(logoImage.getAttribute('srcset')).toContain('assets/images/logo/responsive/rainbow-me-logo-240.png 240w');
    expect(logoImage.getAttribute('sizes')).toBe('120px');
    expect(logoImage.getAttribute('width')).toBe('120');
    expect(logoImage.getAttribute('height')).toBe('80');
    expect(logoImage.getAttribute('alt')).toBe('Rainbow Me');
  });
});

describe('Estimate widget', () => {
  test('estimate widget contains summary elements', () => {
    const estimateWidget = document.querySelector('.estimate-widget');
    const estimateTotal = document.querySelector('.estimate-total');
    const estimateCount = document.querySelector('.estimate-count');
    const viewEstimateButton = document.querySelector('.estimate-view-button');

    expect(estimateWidget).not.toBeNull();
    expect(estimateWidget.hasAttribute('hidden')).toBe(true);

    expect(estimateTotal).not.toBeNull();
    expect(estimateTotal.textContent).toBe('£0');

    expect(estimateCount).not.toBeNull();
    expect(estimateCount.textContent).toBe('0 items');

    expect(viewEstimateButton).not.toBeNull();
    expect(viewEstimateButton.getAttribute('type')).toBe('button');
    expect(viewEstimateButton.textContent).toContain('View estimate');
  });
});

describe('Enquiry section', () => {
  test('contains enquiry section heading content', () => {
    const enquirySection = document.querySelector('#enquiry');
    const sectionLabel = document.querySelector('#enquiry .section-label');
    const heading = document.querySelector('#enquiry h2');

    expect(enquirySection).not.toBeNull();
    expect(sectionLabel).not.toBeNull();
    expect(sectionLabel.textContent).toBe('Enquiry');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Get in touch');
  });

  test('contains enquiry content layout and empty selected estimate card', () => {
    const enquiryContent = document.querySelector('#enquiry .enquiry-content');
    const estimateCard = document.querySelector('#enquiry .enquiry-estimate-card');
    const estimateList = document.querySelector('#enquiry .enquiry-estimate-list');
    const estimateTotal = document.querySelector('#enquiry .enquiry-estimate-total');
    const estimateTotalValue = document.querySelector('#enquiry .enquiry-estimate-total strong');

    expect(enquiryContent).not.toBeNull();

    expect(estimateCard).not.toBeNull();
    expect(estimateCard.getAttribute('aria-label')).toBe('Selected estimate summary');

    expect(estimateList).not.toBeNull();
    expect(estimateList.getAttribute('aria-label')).toBe('Selected estimate items');
    expect(estimateList.querySelectorAll('li').length).toBe(0);

    expect(estimateTotal).not.toBeNull();
    expect(estimateTotal.textContent).toContain('Estimated total');

    expect(estimateTotalValue).not.toBeNull();
    expect(estimateTotalValue.textContent).toBe('£0');
  });

  test('contains enquiry encouragement message card', () => {
    const messageCard = document.querySelector('#enquiry .enquiry-message-card');
    const messageHeading = document.querySelector('#enquiry .enquiry-message-card h3');

    expect(messageCard).not.toBeNull();
    expect(messageHeading).not.toBeNull();
    expect(messageHeading.textContent).toBe('We can’t wait to bring your celebration to life!');
  });

  test('contains required enquiry form fields from the design', () => {
    const enquiryForm = document.querySelector('#enquiry .enquiry-form');
    const firstNameInput = document.querySelector('#customer-first-name');
    const lastNameInput = document.querySelector('#customer-last-name');
    const emailInput = document.querySelector('#customer-email');
    const phoneInput = document.querySelector('#customer-phone');
    const eventTypeSelect = document.querySelector('#event-type');
    const decorationTypeSelect = document.querySelector('#decoration-type');
    const eventDateInput = document.querySelector('#event-date');
    const eventLocationInput = document.querySelector('#event-location');
    const messageTextarea = document.querySelector('#customer-message');

    expect(enquiryForm).not.toBeNull();
    expect(enquiryForm.getAttribute('novalidate')).not.toBeNull();

    expect(firstNameInput).not.toBeNull();
    expect(firstNameInput.getAttribute('type')).toBe('text');
    expect(firstNameInput.hasAttribute('required')).toBe(true);

    expect(lastNameInput).not.toBeNull();
    expect(lastNameInput.getAttribute('type')).toBe('text');
    expect(lastNameInput.hasAttribute('required')).toBe(true);

    expect(emailInput).not.toBeNull();
    expect(emailInput.getAttribute('type')).toBe('email');
    expect(emailInput.hasAttribute('required')).toBe(true);

    expect(phoneInput).not.toBeNull();
    expect(phoneInput.getAttribute('type')).toBe('tel');
    expect(phoneInput.hasAttribute('required')).toBe(true);

    expect(eventTypeSelect).not.toBeNull();
    expect(eventTypeSelect.hasAttribute('required')).toBe(true);

    expect(decorationTypeSelect).not.toBeNull();
    expect(decorationTypeSelect.hasAttribute('required')).toBe(true);

    expect(eventDateInput).not.toBeNull();
    expect(eventDateInput.getAttribute('type')).toBe('date');
    expect(eventDateInput.hasAttribute('required')).toBe(true);

    expect(eventLocationInput).not.toBeNull();
    expect(eventLocationInput.getAttribute('type')).toBe('text');
    expect(eventLocationInput.hasAttribute('required')).toBe(true);

    expect(messageTextarea).not.toBeNull();
    expect(messageTextarea.hasAttribute('required')).toBe(true);
  });

  test('contains enquiry submit button and privacy note', () => {
    const submitButton = document.querySelector('#enquiry .enquiry-submit-button');
    const privacyNote = document.querySelector('#enquiry .enquiry-privacy-note');

    expect(submitButton).not.toBeNull();
    expect(submitButton.getAttribute('type')).toBe('submit');
    expect(submitButton.textContent).toBe('Submit enquiry');

    expect(privacyNote).not.toBeNull();
    expect(privacyNote.textContent).toContain('Your details are safe with us');
  });
});
