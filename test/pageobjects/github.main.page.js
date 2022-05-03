class MainPage {
  // get the "Sign In" button locator
  get signInButtonLocator() {
    return $("//a[@class='HeaderMenu-link flex-shrink-0 no-underline']");
  }
  // click method on the "Sign In" button
  clickOnSignInButton() {
    this.signInButtonLocator.click();
  }
}

module.exports = new MainPage();
