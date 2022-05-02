// ========= HomeWork-5 ============  Page Objects  ===========

const mainPage = require("../pageobjects/main.page.js");

describe(`webdriver.io page`, () => {
  it("should demonstrate the HomeWork-Odj commands", async () => {
    await browser.url(`https://webdriver.io`);

    await mainPage.docNavMenuItem.click();
    await browser.pause(4000);

    await mainPage.clickOnDocNavMenuItem();
    await browser.pause(4000);
  });
});
