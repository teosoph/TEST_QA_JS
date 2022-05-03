// ==================================================== Task 1 ===========================================================================

describe(`webdriver.io page`, () => {
  it("These scripts should demonstrate HomeWork-1 tasks work", async () => {
    // 1. Зайти на сайт https://webdriver.io
    await browser.url("https://webdriver.io");

    // 2. Кликнуть на кнопку сверху странички "API"(использовать локатор "li a[href=" / docs / api.html"]")
    const apiTabLocator = $('li a[href="/docs/api"]');
    await apiTabLocator.click();
    await browser.pause(2000);

    // 3. Напечатать в "Terminal" Visual Studio Code текущий адрес в строке браузера( console.log(...))
    let actualUrl = await browser.getUrl();
    console.log(`======== Текущий адрес страницы:` + actualUrl, ` ============`);

    //  4. Распечатать заглавие странички (использовать локатор ".postHeaderTitle") - этот локатор неактуальный, применен актуальный "//h1[normalize-space()='Introduction']"
    const postHeaderTitleLocator = $("//h1[normalize-space()='Introduction']");
    console.log(` ======= Текущее заглавие страницы:` + (await postHeaderTitleLocator.getText()), ` ========`);

    //    5.  Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")

    const hrefElementLocator = $("//*[text()='JSONWire protocol']");
    console.log(`========= Текст href элемента:` + (await hrefElementLocator.getText()), ` ==========`);

    console.log(`========= Url href элемента:` + (await hrefElementLocator.getUrl()), ` ============`);
    console.log(`========= Атрибут "Url" href элемента:` + (await hrefElementLocator.getAttribute("href")), ` ===========`);

    // 6. Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")
    const searchFieldLocator = $("//span[@class='DocSearch-Button-Placeholder']");
    await searchFieldLocator.click();
    await browser.pause(2000);

    let searchInputLocator = $("//input[@id='docsearch-input']");
    await searchInputLocator.addValue("test is ");
    await browser.pause(2000);

    // 7. Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "'#search_input_react'")

    await searchInputLocator.addValue("DONE!");

    // 8. Сделать паузу в тесте на 5 секунд.
    await browser.pause(5000);
  });
});
