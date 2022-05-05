class AccountPage {
  // get  the "View Profile" button locator
  get viewProfileButtonLocator() {
    return $("//summary[@aria-label='View profile and more']");
  }
  // click method on the "View Profile" button
  async clickOnViewProfileButton() {
    await this.viewProfileButtonLocator.click();
  }
  // get  the "View Profile" menu title locator
  get viewProfileMenuTitle() {
    // return $("a[href*="/qa-qc"][data-ga-click*="Signed in as"]");
    return $("//a[@class='no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block']");
  }
  // check method if displayed the test account login in the "View Profile" menu title
  async checkIfViewProfileMenuTitleIsDisplayed() {
    return await this.viewProfileMenuTitle.isDisplayed();
  }
  //   get method  the "View Profile" menu title
  async getViewProfileMenuTitleText() {
    return await this.viewProfileMenuTitle.getText();
  }
}

module.exports = new AccountPage();
