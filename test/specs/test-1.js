// CSS locators
// [class*="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3"] a
// [class*="col-6 col-sm-3 "] a

// XPath locators
//*[contains(@class, "lh-condensed mb-3")]
//*[contains(text(), 'Electron')]
//li[@class="lh-condensed mb-3"]

//Соседский элемент
//li[@class="lh-condensed mb-3"]/preceding-sibling::ul  //выше
//li[@class="lh-condensed mb-3"]/following-sibling::*   //ниже

//Родительский элемент
//li[@class="lh-condensed mb-3"]/parent::ul  //отца выше
//li[@class="lh-condensed mb-3"]/ancestor::ul  //деда/прадеда выше

// Дочерний элемент
//li[@class="lh-condensed mb-3"]/child::*  //сын ниже
//li[@class="lh-condensed mb-3"]/descendant::a  //внук ниже
//li[@class="lh-condensed mb-3"]//a  //внук ниже

// Элемент из списка
// (//*[@class='lh-condensed mb-3'])[12]

describe(`Test-1`, () => {
  it("Should click on the button and check if the text is displayed", async () => {
    const button_homeAutomate = await $('[href="#home-automate"]');
    const text_forCheck = await $('[class="text-gradient-purple-coral no-wrap"]');

    await browser.url("https://github.com/");
    await browser.pause(2000);

    await button_homeAutomate.scrollIntoView();
    await browser.pause(2000);

    await button_homeAutomate.click();
    await browser.pause(2000);

    console.log("------------------------------------ Is the checking text DISPLAYED: " + (await text_forCheck.isDisplayed()));
  });
});
