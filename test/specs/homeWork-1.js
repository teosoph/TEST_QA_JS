const assert = require(`assert`);

describe(`webdriver.io page`, () => {
  // Task 1 =============================================================================================
  it("should demonstrate Task-1", async () => {
    // 1. Зайти на сайт https://webdriver.io
    await browser.url("https://webdriver.io");

    // 2. Кликнуть на кнопку сверху странички "API"(использовать локатор "li a[href=" / docs / api.html"]")
    const apiTabLocator = $('li a[href="/docs/api"]');
    await apiTabLocator.click();
    await browser.pause(2000);

    // 3. Напечатать в "Terminal" Visual Studio Code текущий адрес в строке браузера( console.log(...))
    let url = await browser.getUrl();
    console.log(`Текущий адрес страницы:`, url);

    //  4. Распечатать заглавие странички (использовать локатор ".postHeaderTitle")
    const postHeaderTitleLocator = $("//h1[normalize-space()='Introduction']");
    console.log(
      `Текущее заглавие страницы:`,
      await postHeaderTitleLocator.getText()
    );

    //    5.  Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")

    const hrefElementLocator = $("//*[text()='JSONWire protocol']");
    console.log(`Текст href элемента:`, await hrefElementLocator.getText());

    console.log(`Url href элемента:`, await hrefElementLocator.getUrl());
    console.log(
      `Атрибут "Url" href элемента:`,
      await hrefElementLocator.getAttribute("href")
    );
  });

  // Task 2 ============= click on "API" tab

  //   xit("should have the right title ", async () => {
  //     await browser.url(`https://webdriver.io`);
  //     const title = await browser.getTitle();
  //     assert.strictEqual(
  //       title,
  //       "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  //     );
  //   });
  //   it("should demonstrate the addValue command", async () => {
  //     await browser.url(`https://webdriver.io`);
  //     const elem = $("//span[@class='DocSearch-Button-Placeholder']");
  //     await elem.click();
  //     let input = $("//input[@id='docsearch-input']");
  //     await input.addValue("test");
  //     await browser.pause(4000);
  //     await input.addValue(123);
  //     await browser.pause(4000);
  //     value = await input.getValue();
  //     assert(value === "test123"); //true
  //   });
  // Lesson 6 ============= methods setValue() &  click()
  // xit(`should demonstrate the setValue command`, async () => {
  //   await browser.url("https://webdriver.io");
  //   const elem = $("//span[@class='DocSearch-Button-Placeholder']");
  //   await elem.click();
  //   const searchField = $("//input[@id='docsearch-input']");
  //   await searchField.setValue("test123");
  //   await browser.pause(4000);
  // });
  // Lesson 7 ============= method getAttribute()
  //   xit("should demonstrate the getAttribute command", async () => {
  //     await browser.url(`https://webdriver.io`);
  //     const elem = await $("//span[@class='DocSearch-Button-Placeholder']");
  //     await elem.click();
  //     let input = await $("//input[@id='docsearch-input']");
  //     let attr = await input.getAttribute("title");
  //     console.log(`Title attribute is: ` + (await attr));
  //     await input.setValue("test123");
  //     attr = await input.getValue();
  //     console.log(`Value attribute is: ` + (await attr));
  //   });
  // Lesson 8 ============= methods getText() & getLocation
  //   xit("should demonstrate getLocation  function", async () => {
  //     await browser.url(`https://webdriver.io`);
  //     const searchInput = $("//span[@class='DocSearch-Button-Placeholder']");
  //     await searchInput.click();
  //     let input = $("//input[@id='docsearch-input']");
  //     const location = input.getLocation("x");
  //     console.log(`xLocation attribute is: ` + (await location));
  //   });
  //   it("should demonstrate getText  function", async () => {
  //     await browser.url(`https://webdriver.io`);
  //     const blogButton = $(`[href="/blog"]`);
  //     console.log(`Text for element is: ` + (await blogButton.getText()));
  //   });
});
