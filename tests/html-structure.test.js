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
        expect(document.getElementsByTagName("header").length > 0).toBe(true);
    });
    test("hero is on the page", () => {
      expect(document.querySelectorAll("section#hero").length).toBe(1);
    })
    test("services is on the page", () => {
      expect(document.querySelectorAll("section#services").length).toBe(1);
    })
    test("services is on the page", () => {
      expect(document.querySelectorAll("section#portfolio").length).toBe(1);
    })
})