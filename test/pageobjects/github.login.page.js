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

  // get  the "Forgot password?" link locator
  get forgotPasswordLinkLocator() {
    return $("//a[@class='label-link position-absolute top-0 right-0']");
  }
  // click method on the "Forgot password?" link
  clickOnForgotPasswordLink() {
    this.forgotPasswordLinkLocator.click();
  }

  // get  the "Email" input field for reset password locator
  get emailInputForResetLocator() {
    return $("//input[@id='email_field']");
  }
  // click method on the password input field
  clickOnEmailInputForReset() {
    this.emailInputForResetLocator.click();
  }
  // add value to the password input field
  addEmailToInputForReset(value) {
    this.emailInputForResetLocator.addValue(value);
  }

  // ============ the "Create your account" page  ================

  // ============ the "Username" input field ================
  // get the locator of the "Login" input field
  get usernameFieldLocator() {
    return $("//input[@id='user_login']");
  }
  // click method on the "Username" input field
  clickOnUsernameField() {
    this.usernameFieldLocator.click();
  }
  // add value to the "Username" input field
  addDataToUsernameInputField(value) {
    this.usernameFieldLocator.addValue(value);
  }

  // ============ the "Email" input field ================
  // get the locator of the "Login" input field
  get emailFieldLocator() {
    return $("//input[@id='user_email']");
  }
  // click method on the "Email" input field
  clickOnEmailField() {
    this.loginFieldLocator.click();
  }
  // add value to the "Email" input field
  addDataToEmailInputField(value) {
    this.emailFieldLocator.addValue(value);
  }

  // ============ the "Password" input field ================
  // get the locator of the "Password" input field
  get passwordFieldLocator() {
    return $("//input[@id='user_password']");
  }
  // click method on the "Password" input field
  clickOnPasswordField() {
    this.passwordFieldLocator.click();
  }
  // add value to the "Password" input field
  addDataToPasswordInputField(value) {
    this.passwordFieldLocator.addValue(value);
  }

  // ============ the "Email preferences" check-box ================
  // get the locator of the "Email preferences" check-box
  get emailPreferenceCheckBoxLocator() {
    return $("//input[@id='all_emails']");
  }
  // click method on the "Email preferences" check-box
  clickOnEmailPreferenceCheckBox() {
    this.emailPreferenceCheckBoxLocator.click();
  }
  //
  //
}

module.exports = new LoginPage();
