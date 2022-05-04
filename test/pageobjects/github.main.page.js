class MainPage {
  // get the locator of the "Sign In" button  header
  get signInButtonLocator() {
    return $("//a[@class='HeaderMenu-link flex-shrink-0 no-underline']");
  }
  // click method on the "Sign In" button
  clickOnSignInButton() {
    this.signInButtonLocator.click();
  }

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
}

module.exports = new MainPage();
