describe('Portfolio rendering', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="swiper portfolio-swiper">
        <div class="swiper-wrapper"></div>
      </div>
    `;
  });

  test('renders one portfolio slide from data', () => {
    const items = [
      {
        id: 'balloon-arches-1',
        title: 'Pastel Balloon Arch',
        category: 'balloon-arches',
        image: 'assets/images/portfolio/balloon-arches-1.avif',
        alt: 'Pastel balloon arch decoration for a celebration',
        description: 'A soft pastel balloon arch created for a private celebration.',
        price: 120,
      },
    ];

    renderPortfolioSlides(items);

    expect(document.querySelectorAll('.portfolio-card.swiper-slide').length).toBe(1);
  });
});
