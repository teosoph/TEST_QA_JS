//TODO: 1. Перейти на страничку https://webdriver.io/docs/api.html
//TODO: 2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера
//TODO: 3. Переключиться на открытую табу
//TODO: 4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
//TODO: 5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
//TODO: 6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
//TODO: 7. Делаем скриншот элемента ".postHeaderTitle"
//TODO: 8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
//TODO: 9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
//TODO: 10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
//TODO: 11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
//TODO: 12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
//TODO: 13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"
//TODO: 14. Кликаем по локатору  href="/blog/"
//TODO: 15. Выводим результат выполнения команды isFocused для локатора href="/blog/"

describe(`homeWork-2`, () => {
  it("homeWork-2 tasks scripts", async () => {
    // 1. Перейти на страничку https://webdriver.io/docs/api.html
    const webDriverApiLink = "https://webdriver.io/docs/api.html";
    await browser.url(webDriverApiLink);
    const titleWebDriverApiLink = await browser.getTitle();
    await browser.pause(3000);

    // 2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера
    let linkLocator = await $('//*[text()="JSONWire protocol"]');
    let linkLocatorAttr = await linkLocator.getAttribute("href");
    console.log(`linkLocator attribute is: ` + (await linkLocatorAttr));
    await browser.pause(3000);
    await browser.newWindow(linkLocatorAttr);
    await browser.pause(3000);
    const titleLinkLocatorAttr = await browser.getTitle();

    // 3. Переключиться на открытую табу
    await browser.switchWindow(titleLinkLocatorAttr);
    await browser.pause(3000);

    // 4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
    const wikiLinkLocator = $("a[href='https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol']");
    let isDisplayedWikiLink = wikiLinkLocator.isDisplayed();
    console.log(`Is DISPLAYED "SeleniumHQ/selenium/wiki/"?: ` + (await isDisplayedWikiLink));

    //5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
    await browser.switchWindow(titleWebDriverApiLink);
    await browser.pause(3000);

    // 6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
    const pageTitleLocator = $("div[class='theme-doc-markdown markdown'] header h1");
    await browser.waitUntil(
      () => {
        return pageTitleLocator.getText();
      },
      5000,
      `Introduction`
    );
    console.log((await pageTitleLocator.getText()) + " is the same as `Introduction`");

    // 7. Делаем скриншот элемента ".postHeaderTitle"
    pageTitleLocator.saveScreenshot("titleLocatorScreenshot.png");

    // 8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    const twitterTabLinkLocator = $(`[href="https://twitter.com/webdriverio"]`);
    let isDisplayedTwitterTab = twitterTabLinkLocator.isDisplayed();
    console.log(`Is the Twitter tab DISPLAYED a first time?: ` + (await isDisplayedTwitterTab));

    // 9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    let isDisplayedInViewportTwitterTab = twitterTabLinkLocator.isDisplayedInViewport();
    console.log(`Is the Twitter tab DISPLAYED In Viewport a first time ?: ` + (await isDisplayedInViewportTwitterTab));

    // 10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
    twitterTabLinkLocator.scrollIntoView();
    await browser.pause(3000);

    // 11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    let isDisplayedTwitterTab2 = twitterTabLinkLocator.isDisplayed();
    console.log(`Is the Twitter tab DISPLAYED a second time?: ` + (await isDisplayedTwitterTab2));

    // 12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    let isDisplayedInViewportTwitterTab2 = twitterTabLinkLocator.isDisplayedInViewport();
    console.log(`Is the Twitter tab DISPLAYED In Viewport a second time ?: ` + (await isDisplayedInViewportTwitterTab2));

    // 13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"
    const blogButtonLocator = $(`[href="/blog"]`);
    console.log(`Is the "BLOG" button FOCUSED a first time?:  ` + (await blogButtonLocator.isFocused()));

    // 14. Кликаем по локатору  href="/blog/"
    await blogButtonLocator.click();
    await browser.pause(3000);

    // 15. Выводим результат выполнения команды isFocused для локатора href="/blog/"
    console.log(`Is the "BLOG" button FOCUSED a second time?: ` + (await blogButtonLocator.isFocused()));
  });
});
