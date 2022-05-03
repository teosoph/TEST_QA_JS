class LoginPage {
  // get  the login input field locator
  get loginInputLocator() {
    return $("//input[@id='login_field']");
  }
  // click method on the login input field
  clickOnLoginInput() {
    this.loginInputLocator.click();
  }
  // add value to the login input field
  addLoginInputValue(value) {
    this.loginInputLocator.addValue(value);
  }
  // get  the password input field locator
  get passwordInputLocator() {
    return $("//input[@id='password']");
  }
  // click method on the password input field
  clickOnPasswordInput() {
    this.passwordInputLocator.click();
  }
  // add value to the password input field
  addPasswordInputValue(value) {
    this.passwordInputLocator.addValue(value);
  }

  // get  the "Sign In" button locator
  get signInButtonLocator() {
    return $("//input[@name='commit']");
  }
  // click method on the "Sign In" button
  clickOnSignInButton() {
    this.signInButtonLocator.click();
  }
}

module.exports = new LoginPage();
