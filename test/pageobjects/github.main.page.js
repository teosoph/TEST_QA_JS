class MainPage {
  // ============ the "Sign In" button ================
  // get the locator of the "Sign In" button in the header
  get signInButtonLocator() {
    return $("//a[@class='HeaderMenu-link flex-shrink-0 no-underline']");
  }
  // click method on the "Sign In" button
  clickOnSignInButton() {
    this.signInButtonLocator.click();
  }

  // ============ the "Email" field ================
  // get the locator of the "Email" field
  get emailFieldLocator() {
    return $("#user_email");
  }
  // click method on the "Email" field
  clickOnEmailField() {
    this.emailFieldLocator.click();
  }
  // fill data to the"Email" field
  addDataToEmailField(value) {
    this.emailFieldLocator.addValue(value);
  }
  // get the locator of the email "Continue" button
  get emailContinueButtonLocator() {
    return $("//button[@data-optimizely-event='click.signup_continue.email']");
  }
  // click method on the email "Continue" button
  clickOnEmailContinueButton() {
    this.emailContinueButtonLocator.click();
  }

  // ============ the "Password" field ================
  // get the locator of the "Password" field
  get passwordFieldLocator() {
    return $("//input[@id='password']");
  }
  // click method on the "Password" field
  clickOnPasswordField() {
    this.passwordFieldLocator.click();
  }
  // fill data to the"Password" field
  addDataToPasswordField(value) {
    this.passwordFieldLocator.addValue(value);
  }
  // get the locator of the password "Continue" button
  get passwordContinueButtonLocator() {
    return $("//button[@data-optimizely-event='click.signup_continue.password']");
  }
  // click method on the password "Continue" button
  clickOnPasswordContinueButton() {
    this.passwordContinueButtonLocator.click();
  }

  // ============ the "Login" field ================
  // get the locator of the "Login" field
  get loginFieldLocator() {
    return $("//input[@id='login']");
  }
  // click method on the "Login" field
  clickOnLoginField() {
    this.loginFieldLocator.click();
  }
  // fill data to the "Login" field
  addDataToLoginField(value) {
    this.loginFieldLocator.addValue(value);
  }
  // get the locator of the login "Continue" button
  get loginContinueButtonLocator() {
    return $("//button[@data-continue-to='opt-in-container']");
  }
  // click method on the login "Continue" button
  clickOnLoginContinueButton() {
    this.loginContinueButtonLocator.click();
  }

  // ============ the Subscribe input field ================
  // get the locator of the subscribe input field
  get subscribeInputFieldLocator() {
    return $("//input[@id='opt_in']");
  }
  // click method on the subscribe input field
  clickOnSubscribeInputField() {
    this.subscribeInputFieldLocator.click();
  }
  // fill agreement to the subscribe input field
  addAgreementToSubscribeInputField(value) {
    this.subscribeInputFieldLocator.addValue(value);
  }
  // get the locator of the subscribe input field "Continue" button
  get subscribeInputFieldContinueButtonLocator() {
    return $("//button[@data-continue-to='captcha-and-submit-container']");
  }
  // click method on the subscribe input field "Continue" button
  clickOnSubscribeInputFieldContinueButton() {
    this.subscribeInputFieldContinueButtonLocator.click();
  }

  // ============ the "Product" tab ================
  // get the locator of the "Product" tab in the header
  get productTabLocator() {
    return $("(//ul/li/details/summary)[1]");
  }
  //   get the "Product" tab location
  async getLocationOfProductTab() {
    productTabLocator.getLocation();
  }
  // moveTo method on the "Product" tab in the header
  async moveToProductTab(value) {
    await this.productTabLocator.moveTo(value);
    await browser.pause(2000);
  }

  // ============ the "Explore" tab ================
  // get the locator of the "Explore" tab in the header
  get exploreTabLocator() {
    return $("(//ul/li/details/summary)[2]");
  }
  //   get the "Explore" tab location
  async getLocationOfExploreTab() {
    exploreTabLocator.getLocation();
  }
  // moveTo method on the "Explore" tab in the header
  async moveToExploreTab(value) {
    await this.exploreTabLocator.moveTo(value);
    await browser.pause(2000);
  }

  // get the locator of the "Explore Github" tab in the header
  get exploreGithubTabLocator() {
    return $("//a[normalize-space()='Explore GitHub']");
  } // click method on the  "Explore Github" tab
  clickOnExploreGithubTab() {
    this.exploreGithubTabLocator.click();
  }

  // ============ the "Pricing" tab ================
  // get the locator of the "Pricing" tab in the header
  get pricingTabLocator() {
    return $("(//ul/li/details/summary)[3]");
  }
  //   get the "Pricing" tab location
  async getLocationOfPricingTab() {
    pricingTabLocator.getLocation();
  }
  // moveTo method on the "Pricing" tab in the header
  async moveToPricingTab(value) {
    await this.pricingTabLocator.moveTo(value);
    // await browser.pause(2000);
  }
  // get the locator of the "Plans" tab in the "Pricing" drop-down menu
  get plansTabLocator() {
    return $("//a[normalize-space()='Plans']");
  }
  // click method on the  "Plans" tab
  clickOnPlansTab() {
    this.plansTabLocator.click();
  }
  // ============ the "Search" input field ================
  // get the locator of the "Search" input field in the header
  get searchInputFieldLocator() {
    return $("//input[@placeholder='Search GitHub']");
  }
  // click method on the "Search" input field
  clickOnSearchInputField() {
    this.searchInputFieldLocator.click();
  }
  // addValue method on the "Search" input field
  addValueToSearchInputField(value) {
    this.searchInputFieldLocator.addValue(value);
  }
  // ============ the "Enterprise" block ================
  // get the locator of the "Start a free trial" button in the  "Enterprise" info-block
  get startFreeTrialButtonLocator() {
    return $("//a[@class='btn-mktg mb-3 mb-sm-0 mr-sm-2 btn-muted-mktg']");
  }
  // scroll method to the "Start a free trial" button
  scrollToStartFreeTrialButton() {
    this.startFreeTrialButtonLocator.scrollIntoView();
  }
  // click method on the "Search" input field
  clickOnStartFreeTrialButton() {
    this.startFreeTrialButtonLocator.click();
  }
}

module.exports = new MainPage();
