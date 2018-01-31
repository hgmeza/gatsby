var _require = require("../internals"),
    regexExclude404 = _require.regexExclude404;

describe("gatsby-plugin-sitemap", function () {
  it("regex for filtering out 404 pages", function () {
    var regex = new RegExp(regexExclude404); // 404 pages

    expect(regex.exec("/404")).toBeNull();
    expect(regex.exec("/404.html")).toBeNull();
    expect(regex.exec("/dev-404-page")).toBeNull();
    expect(regex.exec("/404page")).toBeNull();
    expect(regex.exec("/404-and-now-anything")).toBeNull(); // Generic valid pages

    expect(regex.exec("/my-page")).not.toBeNull();
    expect(regex.exec("/my-page-404123")).not.toBeNull();
    expect(regex.exec("/my-page-404")).not.toBeNull();
  });
});