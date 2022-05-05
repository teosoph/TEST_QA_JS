class MainPage {
  // ============ the "Sign In" button ================
  // get the locator of the "Sign In" button  header
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
    // return $("//summary[normalize-space()='Product']");
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
    // return $("//summary[normalize-space()='Explore']");
  }
  // moveTo method on the "Explore" tab in the header
  async moveToExploreTab(value) {
    await this.exploreTabLocator.moveTo(value);
    await browser.pause(2000);
  }

  // ============ the "Pricing" tab ================
  // get the locator of the "Pricing" tab in the header
  get pricingTabLocator() {
    return $("(//ul/li/details/summary)[3]");
    // return $("//summary[normalize-space()='Pricing']");
  }
  // moveTo method on the "Pricing" tab in the header
  async moveToPricingTab(value) {
    await this.pricingTabLocator.moveTo(value);
    await browser.pause(2000);
  }
}

module.exports = new MainPage();
