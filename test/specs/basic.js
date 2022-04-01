const assert = require(`assert`);

describe(`webdriver.io page`, () => {
  xit("should have the right title ", async () => {
    await browser.url(`https://webdriver.io`);
    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });

  it("should demonstrate the addValue command", async () => {
    await browser.url(`https://webdriver.io`);
    const elem = $("//span[@class='DocSearch-Button-Placeholder']");
    await elem.click();
    let input = $("//input[@id='docsearch-input']");
    await input.addValue("test");
    await browser.pause(4000);
    await input.addValue(123);
    await browser.pause(4000);

    value = await input.getValue();
    assert(value === "test123"); //true
  });

  xit(`should demonstrate the setValue command`, async () => {
    await browser.url("https://webdriver.io");
    const elem = $("//span[@class='DocSearch-Button-Placeholder']");
    await elem.click();
    const searchField = $("//input[@id='docsearch-input']");
    await searchField.setValue("test123");
    await browser.pause(4000);
  });

  xit(`should demonstrate the click command`, async () => {
    await browser.url(`https://webdriver.io`);
    const blogButton = $(`[href="/blog"]`);
    await blogButton.click();
    await browser.pause(4000);
    const guideButton = $(`[href="/docs/contribute"]`);
    await guideButton.click();
    await browser.pause(4000);
  });
});
