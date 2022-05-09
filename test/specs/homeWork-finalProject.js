// ========== Сommon constants ===========
const testSiteUrl = `https://github.com`;
const validEmail = `qa-qc@i.ua`;
const validPassword = `G1thub.c0M`;

// ==========  Imported constants  ============
const assert = require(`assert`);
const getRandomEmail = require("../scripts/getRandomEmail");
const getRandomData = require("../scripts/getRandomData");
const mainPage = require("../../test/pageobjects/github.main.page");
const loginPage = require("../../test/pageobjects/github.login.page");
const accountPage = require("../../test/pageobjects/github.account.page");
const plansPage = require("../../test/pageobjects/github.plans.page");
const explorePage = require("../../test/pageobjects/github.explore.page");
const searchPage = require("../../test/pageobjects/github.search.page");
const enterprisePage = require("../../test/pageobjects/github.enterprise.page");
const getRandomPhone = require("../scripts/getRandomPhone");

// =========== Test Scripts ==========
describe(`webdriver.io page`, () => {
  // ==========  Task-1  ============
  xit(`checking the possibility of registering with valid random email data`, async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    //   click on the "Email" field
    await mainPage.clickOnEmailField();
    await browser.pause(2000);
    //   fill random data in the email field
    await mainPage.addDataToEmailField(getRandomEmail.getEmail());
    await browser.pause(2000);
    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(4000);

    //   click on the "Continue" button
    await mainPage.clickOnEmailContinueButton();
    await browser.pause(2000);

    //   input random data to the password input field
    await mainPage.clickOnPasswordField();
    await mainPage.addDataToPasswordField(getRandomData.randomData());
    await browser.pause(2000);
    //   click on the "Continue" button
    await mainPage.clickOnPasswordContinueButton();
    await browser.pause(2000);

    //   input random data to the username input field
    await mainPage.clickOnLoginField();
    await mainPage.addDataToLoginField(getRandomData.randomData());
    await browser.pause(2000);
    //   click on the "Continue" button
    await mainPage.clickOnLoginContinueButton();
    await browser.pause(3000);

    // enter the letter "Y" in the subscription input field to agree to subscribe to the newsletter
    await mainPage.clickOnSubscribeInputField();
    await mainPage.addAgreementToSubscribeInputField("y");
    await browser.pause(2000);
    //   click on the "Continue" button
    await mainPage.clickOnSubscribeInputFieldContinueButton();
    await browser.pause(2000);

    // check if the message "Verify your account" is displayed
    const verifyAccountTitle = $(`//div[@class='text-mono text-bold signup-text-prompt mt-4']`);
    let isDisplayedVerifyAccountTitle = verifyAccountTitle.isDisplayed();
    console.log(`============================== Is the message "Verify your account" displayed?: ` + (await isDisplayedVerifyAccountTitle));

    // compare the actual verification confirmation text with the reference phrase
    actualText = await verifyAccountTitle.getText();
    if (actualText === "Verify your account") {
      console.log(`=========================== The text "Verify your account" is displayed, so, your registration credentials are correct and accepted.`);
    }

    //   show the actual browser URL in the console
    const actualBrowserUrl = await browser.getUrl();
    console.log(`============================== The actual browser URL: ` + actualBrowserUrl);
  });

  // ========== Task-2 ============
  xit("checking the logging into the registered Github account", async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    //   click on the "Sign In" button
    await mainPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "Email" field
    await loginPage.clickOnLoginInput();
    // await browser.pause(1000);
    //   fill the "Email" field with the valid test email "qa-qc@i.ua"
    await loginPage.addLoginInputValue(validEmail);
    await browser.pause(1000);

    //   click on the "Password" field
    await loginPage.clickOnPasswordInput();
    // await browser.pause(2000);
    //   fill the "Password" field with the valid test password "G1thub.c0M"
    await loginPage.addPasswordInputValue(validPassword);
    await browser.pause(1000);
    //   click on the "Sign In" button
    await loginPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "View Profile" button with drop-down menu
    await accountPage.clickOnViewProfileButton();
    await browser.pause(1000);

    // checking if displayed the test account login in the "View Profile" menu title
    console.log(`============================== Is displayed the test account login in the "View Profile" menu title?: ` + (await accountPage.checkIfViewProfileMenuTitleIsDisplayed())); // output: true

    //   getting  the "View Profile" menu title
    console.log(`============================== The "View Profile" menu title text is: ` + (await accountPage.getViewProfileMenuTitleText()));

    //   show the actual browser URL in the console
    const actualBrowserUrl = await browser.getUrl();
    console.log(`============================== The actual browser URL: ` + actualBrowserUrl);

    let a = await accountPage.getViewProfileMenuTitleText();
    if (a.indexOf("qa-qc") > 0) {
      console.log(`============================== The Github registered account login succeeded`);
    }
    if (a.indexOf("qa-qc") < 0) {
      console.log(`============================== The Github registered account login unsucceeded`);
    }
  });

  // ========== Task-3 ============
  xit("checking the reset of the registered Github account password with empty field", async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    //   click on the "Sign In" button
    await mainPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "Forgot password?" link
    await loginPage.clickOnForgotPasswordLink();
    await browser.pause(2000);

    //   click on the "Email" input field for reset password
    await loginPage.clickOnEmailInputForReset();
    await browser.pause(2000);

    //   fill the "Email" field for reset password with the invalid data (empty field)
    await loginPage.addLoginInputValue();
    await browser.pause(4000);
  });
  xit("checking the reset of the registered Github account password with invalid data", async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    //   click on the "Sign In" button
    await mainPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "Forgot password?" link
    await loginPage.clickOnForgotPasswordLink();
    await browser.pause(2000);

    //   click on the "Email" input field for reset password
    await loginPage.clickOnEmailInputForReset();
    await browser.pause(2000);

    //   fill the "Email" field for reset password with the invalid data (random data)
    await loginPage.addEmailToInputForReset(getRandomData.randomData());
    await browser.pause(4000);
  });
  xit("checking the reset of the registered Github account password with valid data", async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    //   click on the "Sign In" button
    await mainPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "Forgot password?" link
    await loginPage.clickOnForgotPasswordLink();
    await browser.pause(2000);

    //   click on the "Email" input field for reset password
    await loginPage.clickOnEmailInputForReset();
    await browser.pause(2000);

    //   fill the "Email" field for reset password with the invalid data (random data)
    await loginPage.addEmailToInputForReset(validEmail);
    await browser.pause(4000);
  });

  // ========== Task-4 ============
  xit("checking the hover and display of the header drop-down menu tabs", async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);

    // ============ the "Product" tab ================
    //   move mouse-hover to the "Product" tab location
    await mainPage.moveToProductTab(mainPage.getLocationOfProductTab());
    // await browser.pause(2000);
    // check if "Product" drop-down menu tab is displayed
    const isProductTabDisplayed = mainPage.productTabLocator.isDisplayed();
    console.log(`================== Is displayed the "Product" tab in the header?: ` + (await isProductTabDisplayed)); // output: true

    // ============ the "Explore" tab ================
    //   move mouse-hover to the "Explore" tab location
    await $(`//input[@placeholder='Search GitHub']`).moveTo(); // needed for the moveTo method to work
    await mainPage.moveToExploreTab(mainPage.getLocationOfExploreTab());
    // await browser.pause(2000);
    // check if "Explore" drop-down menu tab is displayed
    const isExploreTabDisplayed = mainPage.exploreTabLocator.isDisplayed();
    console.log(`================== Is displayed the "Explore" tab in the header?: ` + (await isExploreTabDisplayed)); // output: true

    // ============ the "Pricing" tab ================
    await $(`//input[@placeholder='Search GitHub']`).moveTo(); // needed for the moveTo method to work
    //   move mouse-hover to the "Pricing" tab location
    await mainPage.moveToPricingTab(mainPage.getLocationOfPricingTab());
    // await browser.pause(2000);
    // check if "Pricing" drop-down menu tab is displayed
    const isPricingTabDisplayed = mainPage.pricingTabLocator.isDisplayed();
    console.log(`================== Is displayed the "Pricing" tab in the header?: ` + (await isPricingTabDisplayed)); // output: true
  });

  // ========== Task-5 ============
  // Pricing => Plans -> chose "Join for free"
  // Make registration
  xit(`checking the possibility of registering the "Join Free" plan`, async () => {
    await browser.url(testSiteUrl); // open url https://github.com
    // ============ the "Pricing" tab ================
    //   move mouse-hover to the "Pricing" tab location
    await mainPage.moveToPricingTab(mainPage.getLocationOfPricingTab());
    await browser.pause(1000);
    await mainPage.clickOnPlansTab();
    await browser.pause(1000);
    // ============ the "Plans" page ================
    await plansPage.scrollToJoinFreeButton();
    await browser.pause(2000);
    await plansPage.clickOnJoinFreeButton();
    await browser.pause(1000);
    // ============ the "Create your account" page ================
    //   fill the "Username" input field with valid random data
    await loginPage.addDataToUsernameInputField(getRandomData.randomData());
    await browser.pause(1000);
    //   fill the "Email" input field with valid random data
    await loginPage.addDataToEmailInputField(getRandomEmail.getEmail());
    await browser.pause(1000);
    //   fill the "Password" input field with valid random data
    await loginPage.addDataToPasswordInputField(getRandomData.randomData());
    await browser.pause(1000);
    //   click on the email preference check box
    await loginPage.clickOnEmailPreferenceCheckBox();
    await browser.pause(2000);
  });

  // ========== Task-6 ============
  //   explore Git -> topics (isDisplayed)
  xit(`checking the displaying the "Topics" title`, async () => {
    await browser.url(testSiteUrl); // open url https://github.com
    // ============ the "Explore" tab ================
    //   move mouse-hover to the "Explore" tab location
    await mainPage.moveToExploreTab(mainPage.getLocationOfExploreTab());
    await browser.pause(2000);
    //   click on the "Explore Github" tab
    await mainPage.clickOnExploreGithubTab();
    await browser.pause(2000);
    //   click on the "Topics" tab
    await explorePage.clickOnTopicsTab();
    await browser.pause(4000);
    // check if the "Topics" title is displayed
    console.log(`============================== Is the  "Topics" title displayed?: ` + (await explorePage.isDisplayedTopicsTitle()));
  });
  // ========== Task-7 ============
  // Search input -> fill "webdriver.io" -> filter "TypeScript" -> click on the first search result -> URL should contain  "webdriver.io"
  xit(`checking the URL containing the message "webdriver.io"`, async () => {
    await browser.url(testSiteUrl); // open url https://github.com
    // ============ the "Explore" tab ================
    //   click on the "Search" input field
    await mainPage.clickOnSearchInputField();
    // await browser.pause(2000);
    //   addValue to the "Search" input field
    const webDriverIoURL = "webdriver.io";
    await mainPage.addValueToSearchInputField(webDriverIoURL);
    await browser.pause(2000);
    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(2000);

    //   click on the "TypeScript" tab
    // check if the "Topics" title is displayed
    await searchPage.clickOnTypeScriptTab();
    await browser.pause(2000);
    // click  on the first search result tab
    await searchPage.clickOnFirstSearchResultTab();
    await browser.pause(4000);

    //   show the actual browser URL in the console
    console.log(`==================== The actual browser URL: ` + (await searchPage.getUrlOfFirstSearchResultPage()));

    //   check if the first page of search results contains "webdriver.io"
    //   variant 1
    // if ((await String(searchPage.getUrlOfFirstSearchResultPage()).indexOf("webdriver.io")) < 0) {
    //   console.log(`============================== The URL of the first page of search results do not contain "webdriver.io"`);
    // }

    //   variant 2
    await expect(browser).toHaveUrlContaining("webdriver.io");

    //   variant 3
    // await expect(String(await searchPage.getUrlOfFirstSearchResultPage())).toHaveTextContaining(`webdriver.io`);
  });

  // ========== Task-8 ============
  //   Click on the "Start a free trial" on main -> choose "Enterprise cloud" -> registaration -> go back ...
  xit(`checking the possibility to register "Enterprise Cloud" and "Enterprise Server"`, async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);
    // ============ the "Explore" tab ================
    // scroll to the "Start a free trial" button
    await mainPage.scrollToStartFreeTrialButton();
    await browser.pause(2000);
    //   click on the "Start a free trial" button
    await mainPage.clickOnStartFreeTrialButton();
    await browser.pause(2000);
    //   click on the the "Enterprise Cloud" block
    await plansPage.clickOnEnterpriseCloudBlock();
    await browser.pause(2000);
    //   fill the "Username" input field with valid random data
    await loginPage.addDataToUsernameInputField(getRandomData.randomData());
    await browser.pause(2000);
    //   fill the "Email" input field with valid random data
    await loginPage.addDataToEmailInputField(getRandomEmail.getEmail());
    await browser.pause(2000);
    //   fill the "Password" input field with valid random data
    await loginPage.addDataToPasswordInputField(getRandomData.randomData());
    await browser.pause(2000);
    //   click on the email preference check box
    await loginPage.clickOnEmailPreferenceCheckBox();
    await browser.pause(2000);
    //   go back to the previous page
    await browser.back();
    await browser.pause(2000);
    //   click on the "Enterprise Server" block
    await plansPage.clickOnEnterpriseServerBlock();
    await browser.pause(2000);

    //   =============== Enterprise Page ============
    //   fill random data to the "Name" input field
    await enterprisePage.addDataToNameInputField(getRandomData.randomData());
    await browser.pause(2000);
    //   fill random data to the "Company" input field
    await enterprisePage.addDataToCompanyInputField(getRandomData.randomData());
    await browser.pause(2000);
    //   fill random data to the "Email" input field
    await enterprisePage.addDataToEmailInputField(getRandomEmail.getEmail());
    await browser.pause(2000);
    //   fill random data to the "Phone" input field
    await enterprisePage.addDataToPhoneInputField(getRandomPhone.randomPhone());
    await browser.pause(2000);
    //   click on the "Not sure yet" radio-button
    await enterprisePage.clickOnNotSureYetRadioButton();
    await browser.pause(2000);
    //   click on the "Yes" radio-button
    await enterprisePage.clickOnYesRadioButton();
    await browser.pause(2000);
    //   fill random data to the "List the question" input field
    await enterprisePage.addValueToTextAreaQuestionInputField(getRandomData.randomData() + ` ` + getRandomEmail.getEmail() + ` ` + getRandomData.randomData() + ` ` + getRandomPhone.randomPhone() + ` ` + getRandomData.randomData());
    await browser.pause(2000);
    //   click on the check-box in the "Agreements" block
    await enterprisePage.clickOnAgreeCheckBox();
    await browser.pause(4000);
  });
  // ========== Task-9 ============
  //    Click on the "Cariers" -> open positions -> console.log all labels
  it(`show to the console all the titles of the carrier open positions `, async () => {
    // open url https://github.com
    await browser.url(testSiteUrl);
    // ============ the "Careers" link ================
    //   scroll to the "Careers" link
    await mainPage.scrollToCareersLink();
    await browser.pause(2000);
    //   click on the "Careers" link
    await mainPage.clickOnCareersLink();
    await browser.pause(2000);
    //   click on the "Open positions" link
    await mainPage.clickOnOpenPositionsLink();
    await browser.pause(2000);
    //   show to console "Open positions" list
    console.log(
      `======= "Open positions" list: `,
      "\n" + "- " + (await mainPage.getBusinessSystemsPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getDesignPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getEngineeringPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getFinancePositionLinkTitle()),
      "\n" + "- " + (await mainPage.getHumanResourcesPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getLegalPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getMarketingPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getProductPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getOperationsPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getSalesPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getSecurityPositionLinkTitle()),
      "\n" + "- " + (await mainPage.getSupportPositionLinkTitle())
    );
    await browser.pause(2000);
  });
});
