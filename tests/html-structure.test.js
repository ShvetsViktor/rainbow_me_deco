const fs = require("fs");

const path = require("path");

beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../index.html"),
    "utf8"
  );

  document.documentElement.innerHTML = html;
});

describe("Page layout structure", () => {
    test("header is on the page", () => {
        expect(document.getElementsByTagName("header").length).toBe(1);
    });

    test("navbar is on the page", () => {
        expect(document.querySelectorAll("header nav").length).toBe(1);
    });

    test("hero is on the page", () => {
      expect(document.querySelectorAll("section#hero").length).toBe(1);
    });

    test("services is on the page", () => {
      expect(document.querySelectorAll("section#services").length).toBe(1);
    });

    test("portfolio is on the page", () => {
      expect(document.querySelectorAll("section#portfolio").length).toBe(1);
    });

    test("how-it-works is on the page", () => {
      expect(document.querySelectorAll("section#how-it-works").length).toBe(1);
    });

    test("testimonials is on the page", () => {
      expect(document.querySelectorAll("section#testimonials").length).toBe(1);
    });

    test("enquiry is on the page", () => {
      expect(document.querySelectorAll("section#enquiry").length).toBe(1);
    });
    
    test("footer is on the page", () => {
      expect(document.getElementsByTagName("footer").length).toBe(1);
    });
});

describe("Hero section content", () => {
  test("hero contains a main heading", () => {
    expect(document.querySelectorAll("#hero h1").length).toBe(1);
  });

  test("hero contains introductory text", () => {
    expect(document.querySelectorAll("#hero p").length > 0).toBe(true);
  });

  test("hero contains an image with alt text", () => {
    const heroImage = document.querySelector("#hero img");

    expect(heroImage !== null).toBe(true);
    expect(heroImage.getAttribute("alt").length > 0).toBe(true);
  });

  test("hero contains a portfolio CTA link", () => {
    expect(document.querySelectorAll('#hero a[href="#portfolio"]').length).toBe(1);
  });

  test("hero contains an enquiry CTA link", () => {
    expect(document.querySelectorAll('#hero a[href="#enquiry"]').length).toBe(1);
  });
});