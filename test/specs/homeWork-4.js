describe.only(`github.com`, () => {
  // Test case 1
  it.skip(`checking the sub-menu displayed or not`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");
    await browser.pause(5000);

    // check visibility of sub-menu
    const subMenu = $(`//div[@class='sub-nav-mktg js-toggler-container js-sticky js-position-sticky top-0 width-full z-3 scrollnav is-stuck']`);
    isDisplayed = subMenu.isDisplayed();
    console.log(`Is the Sub-menu DISPLAYED?: ` + (await isDisplayed)); // output: false

    // check visibility in viewport of sub-menu
    isDisplayedInViewport = subMenu.isDisplayedInViewport();
    console.log(`Is the Sub-menu Displayed In Viewport?: ` + (await isDisplayedInViewport)); // output:  false

    const footer = $("//div[@class='color-bg-subtle']");
    footer.scrollIntoView(); // scroll-up to footer
    await browser.pause(3000);

    isDisplayed = subMenu.isDisplayed();
    console.log(`Is the Sub-menu DISPLAYED?: ` + (await isDisplayed)); // output: true

    isDisplayedInViewport = subMenu.isDisplayedInViewport();
    console.log(`Is the Sub-menu Displayed In Viewport?: ` + (await isDisplayedInViewport)); // output:  true
  });

  // Test case 2
  it.skip(`checking the search perform`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");
    await browser.pause(5000);

    //   click on the search field
    let searchInputForm = $("form[aria-label='Site']");
    await searchInputForm.click();
    await browser.pause(5000);

    //   fill data in the search field
    let searchInput = $("//input[@placeholder='Search GitHub']");

    searchInput.addValue("test123");
    await browser.pause(5000);

    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(5000);
  });

  // Test case 3
  it.skip(`checking the possibility of entering the valid email data "test123@test.123"`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");
    // await browser.pause(5000);

    //   click on the email field
    let emailInputForm = $("//dl[@class='col-12 my-0 pb-2 pb-sm-0 pr-0 pr-sm-2 flex-auto']");
    await emailInputForm.click();
    await browser.pause(2000);

    //   fill data in the email field
    let emailInput = $("#user_email");
    emailInput.addValue("test123@test.123");
    await browser.pause(2000);

    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(2000);
  });

  // Test case 4
  it.skip(`checking the login possibility with the invalid email and password data (for example, login:"test123@test.123" & password:"test123"`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");
    await browser.pause(3000);

    //   click on the email field
    let sighInButton = $("//a[normalize-space()='Sign in']");
    await sighInButton.click();
    await browser.pause(2000);

    //   fill data in the email field
    let emailInput = $("//input[@id='login_field']");
    emailInput.addValue("test123@test.123");
    await browser.pause(2000);

    //   fill data in the password field
    let passwordInput = $("//input[@id='password']");
    passwordInput.addValue("test123");
    await browser.pause(2000);

    //   send "Enter" command
    await browser.keys("\uE007");
    await browser.pause(2000);
  });

  // Test case 5
  it.only(`Take a screenshot of the image that appears to the right of the text block "Code verification built in..."`, async () => {
    // open url https://github.com
    await browser.url("https://github.com");
    await browser.pause(3000);

    //   scroll-down to the text block
    let textBlock = $("//h3[contains(text(),'Pull requests cover the entire review flow: propos')]");
    await textBlock.scrollIntoView();
    await browser.pause(5000);

    //   take a screenshot of the image
    let imgForScreenshot = $("//img[@alt='Pull request comment on GitHub']");
    imgForScreenshot.saveScreenshot("imgScreenshot.png");
    // const filepath = "../../test/Screenshots/imgScreenshot.png";
    // imgForScreenshot.saveScreenshot(filepath);
    await browser.pause(2000);
  });
});
