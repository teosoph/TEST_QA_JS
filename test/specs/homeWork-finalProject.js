// ==========  Task-1  ============
const getRandomEmail = require("../scripts/getRandomEmail");
const getRandomData = require("../scripts/getRandomData");

// ==========  Task-2  ============
const mainPage = require("../../test/pageobjects/github.main.page");
const loginPage = require("../../test/pageobjects/github.login.page");
const accountPage = require("../../test/pageobjects/github.account.page");

describe(`webdriver.io page`, () => {
  // ==========  Task-1  ============
  xit(`checking the possibility of registering with valid random email data`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");

    //   click on the email field
    let emailInputForm = $("//dl[@class='col-12 my-0 pb-2 pb-sm-0 pr-0 pr-sm-2 flex-auto']");
    await emailInputForm.click();
    await browser.pause(2000);

    //   fill random data in the email field
    let emailInput = $("#user_email");
    await emailInput.addValue(getRandomEmail.getEmail());
    await browser.pause(2000);

    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(4000);

    //   click on the "Continue" button
    let emailInputButton = $("//button[@data-optimizely-event='click.signup_continue.email']");
    await emailInputButton.click();
    await browser.pause(2000);

    //   input random data to the password input field
    let passwordInput = $("//input[@id='password']");
    await passwordInput.addValue(getRandomData.randomData());
    await browser.pause(2000);

    //   click on the "Continue" button
    let passwordInputButton = $("//button[@data-optimizely-event='click.signup_continue.password']");
    await passwordInputButton.click();
    await browser.pause(2000);

    //   input random data to the username input field
    let usernameInput = $("//input[@id='login']");
    await usernameInput.addValue(getRandomData.randomData());
    await browser.pause(2000);

    //   click on the "Continue" button
    let usernameInputButton = $("//button[@data-continue-to='opt-in-container']");
    await usernameInputButton.click();
    await browser.pause(2000);

    // enter the letter "Y" in the subscription input field to agree to subscribe to the newsletter
    let subscribeInput = $("//input[@id='opt_in']");
    await subscribeInput.addValue("y");
    await browser.pause(2000);

    //   click on the "Continue" button
    let subscribeInputButton = $("//button[@data-continue-to='captcha-and-submit-container']");
    await subscribeInputButton.click();
    await browser.pause(6000);

    // check if the message "Verify your account" is displayed
    const verifyAccountTitle = $(`//div[@class='text-mono text-bold signup-text-prompt mt-4']`);
    let isDisplayedVerifyAccountTitle = verifyAccountTitle.isDisplayed();
    console.log(`Is the message "Verify your account" displayed?: ` + (await isDisplayedVerifyAccountTitle));

    //   show the actual browser URL in the console
    const actualBrowserUrl = await browser.getUrl();
    console.log(`The actual browser URL: ` + actualBrowserUrl);
  });

  // ========== Task-2 ============
  it("checking the logging into the registered Github account", async () => {
    // open url https://github.com
    await browser.url("https://github.com");

    //   click on the "Sign In" button
    await mainPage.clickOnSignInButton();
    // await browser.pause(2000);

    //   click on the "Email" field
    await loginPage.clickOnLoginInput();
    await browser.pause(1000);
    //   fill the "Email" field with the valid test email "qa-qc@i.ua"
    await loginPage.addLoginInputValue(`qa-qc@i.ua`);
    await browser.pause(1000);

    //   click on the "Password" field
    await loginPage.clickOnPasswordInput();
    // await browser.pause(2000);
    //   fill the "Password" field with the valid test password "G1thub.c0M"
    await loginPage.addPasswordInputValue(`G1thub.c0M`);
    await browser.pause(1000);
    //   click on the "Sign In" button
    await loginPage.clickOnSignInButton();
    await browser.pause(2000);

    //   click on the "View Profile" button with drop-down menu
    await accountPage.clickOnViewProfileButton();
    await browser.pause(1000);

    // checking if displayed the test account login in the "View Profile" menu title
    console.log(`============================== Is DISPLAYED the test account login in the "View Profile" menu title?: ` + (await accountPage.checkIfViewProfileMenuTitleIsDisplayed())); // output: true

    //   getting  the "View Profile" menu title
    console.log(`============================== Text for "View Profile" menu title is: ` + (await accountPage.getViewProfileMenuTitleText()));

    let a = await accountPage.getViewProfileMenuTitleText();
    if (a.indexOf("qa-qc") > 0) {
      console.log(`============================== The Github registered account login succeeded`);
    }
    if (a.indexOf("qa-qc") < 0) {
      console.log(`============================== The Github registered account login unsucceeded`);
    }
  });
});
