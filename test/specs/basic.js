const assert = require(`assert`);

// Lesson 5 ============= methods getTitle() &  addValue()

describe(`webdriver.io page`, () => {
  // xit("should have the right title ", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const title = await browser.getTitle();
  //   assert.strictEqual(
  //     title,
  //     "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  //   );
  // });

  // xit("should demonstrate the addValue command", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const elem = $("//span[@class='DocSearch-Button-Placeholder']");
  //   await elem.click();
  //   let input = $("//input[@id='docsearch-input']");

  //   await input.addValue("test");
  //   await browser.pause(4000);
  //   await input.addValue(123);
  //   await browser.pause(4000);

  //   value = await input.getValue();
  //   assert(value === "test123"); //true
  // });

  // Lesson 6 ============= methods setValue() &  click()

  // xit(`should demonstrate the setValue command`, async () => {
  //   await browser.url("https://webdriver.io");
  //   const elem = $("//span[@class='DocSearch-Button-Placeholder']");
  //   await elem.click();
  //   const searchField = $("//input[@id='docsearch-input']");
  //   await searchField.setValue("test123");
  //   await browser.pause(4000);
  // });

  // xit(`should demonstrate the click command`, async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const blogButton = $(`[href="/blog"]`);
  //   await blogButton.click();
  //   await browser.pause(4000);
  //   const guideButton = $(`[href="/docs/contribute"]`);
  //   await guideButton.click();
  //   await browser.pause(4000);
  // });

  // Lesson 7 ============= method getAttribute()

  // xit("should demonstrate the getAttribute command", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const elem = await $("//span[@class='DocSearch-Button-Placeholder']");
  //   await elem.click();

  //   let input = await $("//input[@id='docsearch-input']");
  //   let attr = await input.getAttribute("title");
  //   console.log(`Title attribute is: ` + (await attr));

  //   await input.setValue("test123");
  //   attr = await input.getValue();
  //   console.log(`Value attribute is: ` + (await attr));
  // });

  // Lesson 8 ============= methods getText() & getLocation

  it("should demonstrate getLocation  function", async () => {
    await browser.url(`https://webdriver.io`);
    const searchInput = $("//span[@class='DocSearch-Button-Placeholder']");
    await searchInput.click();
    let input = $("//input[@id='docsearch-input']");

    const location = input.getLocation("x");
    console.log(`xLocation attribute is: ` + (await location));
  });

  it("should demonstrate getText  function", async () => {
    await browser.url(`https://webdriver.io`);
    const blogButton = $(`[href="/blog"]`);

    console.log(`Text for element is: ` + (await blogButton.getText()));
  });
});
