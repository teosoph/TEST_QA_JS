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

  // // Lesson 6 ============= methods setValue() &  click()

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

  // // Lesson 7 ============= method getAttribute()

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

  // // Lesson 8 ============= methods getText() & getLocation

  // xit("should demonstrate getLocation  function", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const searchInput = $("//span[@class='DocSearch-Button-Placeholder']");
  //   await searchInput.click();
  //   let input = $("//input[@id='docsearch-input']");

  //   const location = input.getLocation("x");
  //   console.log(`xLocation attribute is: ` + (await location));
  // });

  // xit("should demonstrate getText  function", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const blogButton = $(`[href="/blog"]`);

  //   console.log(`Text for element is: ` + (await blogButton.getText()));
  // });

  // Lesson 10 ============= methods isDisplayed(), isDisplayedInViewPort(), isClickable()
  // xit("should detect if an element is clickable", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const blogButton = $(`[href="/blog"]`);
  //   let clickable = blogButton.isClickable();
  //   console.log(`Is CLICKABLE?: ` + (await clickable)); // output: true
  // });

  // xit("should detect if an element is displayed", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const blogButton = $(`[href="/blog"]`);
  //   isDisplayed = blogButton.isDisplayed();
  //   console.log(`Is DISPLAYED?: ` + (await isDisplayed)); // output: true
  // });

  // xit("should detect if an element is visible in actual viewport", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   let isBlogDisplayedInViewport = $(`[href="/blog"]`).isDisplayedInViewport();
  //   console.log(`Is Blog DisplayedInViewport?: ` + (await isBlogDisplayedInViewport)); // output:  true

  //   let isGithubDisplayedInViewport = $("//span[normalize-space()='GitHub']").isDisplayedInViewport();
  //   console.log(`Is Blog DisplayedInViewport?: ` + (await isGithubDisplayedInViewport)); // output:  false
  // });

  // Lesson 11 ============= methods isEnabled(), isFocused(), scrollIntoView()
  // it("should detect if an element is enabled", async () => {
  //   await browser.url(`https://webdriver.io`);
  //   const blogButton = $(`[href="/blog"]`);
  //   let isEnabled = blogButton.isEnabled();
  //   console.log(`=======================  Is ENABLED?: ` + (await isEnabled)); // output: true
  // });

  // it("should detect the focus of an element", async () => {
  //   await browser.url(`https://webdriver.io`);

  //   const input = $("//span[@class='DocSearch-Button-Placeholder']");
  //   console.log(`====================== search.isFocused() before click: ` + (await input.isFocused())); // output: false
  //   await browser.pause(2000);

  //   await input.click();
  //   let inputModal = $("//input[@id='docsearch-input']");
  //   await inputModal.click();
  //   await browser.pause(2000);
  //   console.log(`====================== search.isFocused() after click: ` + (await inputModal.isFocused())); // output: true
  //   await browser.pause(2000);
  // });

  it("should move to element", async () => {
    await browser.url("https://webdriver.io");
    const githubLink = $("//span[normalize-space()='GitHub']");
    githubLink.scrollIntoView(); // scroll-down to Github link
    await browser.pause(3000);
  });

  it("should move to element", async () => {
    await browser.url("https://webdriver.io");
    const blogButton = $("//a[@class='navbar__item navbar__link'][normalize-space()='Blog']");
    blogButton.scrollIntoView(); // scroll-up to Blog tab
    await browser.pause(3000);
  });
});

//* =============== LOCATORS =======================
//* -- Id locators  (quickest of locators):
//* #search_input_react

//* -- CSS locators:
//* [class="aa-dropdown-menu"][role*='list'][id*="algolia"]div
//* [href="http://appium.io"]
//* li a[href*="http://appium"]
//* p a[href*="http://appium"]
//* [src=/img/open-js-logo.svg"]

//* -- Xpath locators:
//*   //*[text()="Introduction"]
//*  //h3[text()="Introduction"]
//*   *[contains(text(), "Guide")]
//*   *[contains(text(), "Guide") and @href and @target]
//*   *[contains(text(), "Guide") and @href or @targe]
//*   *[@href or @target]
//*   *[contains(text(), "Guide") and @href or @targe]/../..  (move to levels up)
//*   *[contains(text(), "Guide") and @href or @targe]/../..//a  (move down to chosen element "a" )
//*   //a[@class=contains(text(), 'table')]
