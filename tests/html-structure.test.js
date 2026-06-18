const fs = require("fs");

const path = require("path");

describe("Validate that elements are present on the page", () => {
    beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );

    document.documentElement.innerHTML = html;

  });
    test("header is on the page", () => {
        expect(document.getElementsByTagName("header").length).toBe(1);
    });
    test("navbar is on the page", () => {
        expect(document.querySelectorAll("header nav").length).toBe(1);
    });
    test("hero is on the page", () => {
      expect(document.querySelectorAll("section#hero").length).toBe(1);
    })
    test("services is on the page", () => {
      expect(document.querySelectorAll("section#services").length).toBe(1);
    })
    test("portfolio is on the page", () => {
      expect(document.querySelectorAll("section#portfolio").length).toBe(1);
    })
    test("howItWorks is on the page", () => {
      expect(document.querySelectorAll("section#howItWorks").length).toBe(1);
    })
    test("testimonials is on the page", () => {
      expect(document.querySelectorAll("section#testimonials").length).toBe(1);
    })
    test("enquiryForm is on the page", () => {
      expect(document.querySelectorAll("section#enquiryForm").length).toBe(1);
    })
    test("footer is on the page", () => {
      expect(document.getElementsByTagName("footer").length).toBe(1);
    })
})