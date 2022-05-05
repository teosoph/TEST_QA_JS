const assert = require(`assert`);
const mainPage = require("../pageobjects/main.page.js");

describe(`webdriver.io page`, () => {
  xit("should demonstrate the addValue command", async () => {
    await browser.url(`https://webdriver.io`);
    const elem = $("//span[@class='DocSearch-Button-Placeholder']");
    await elem.click();
    let input = $("//input[@id='docsearch-input']");

    await mainPage.searchInput.addValue("test");
    await browser.pause(4000);

    await mainPage.addSearchInputValue(" type with method");
    await browser.pause(4000);
  });

  it("should click Docs button", () => {
    await mainPage.clickOnDocNavMenuItem();
    await browser.pause(4000);
  });
});
