const fs = require("fs");

const path = require("path");

describe("Validate that elements present on the page", () => {
    beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );

    document.documentElement.innerHTML = html;

  });
    test("header is on the page", () => {
        expect(document.getElementsByTagName("header").length > 0).toBe(true);
    })
})