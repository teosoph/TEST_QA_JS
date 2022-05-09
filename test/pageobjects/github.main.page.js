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
  // ============ the "Careers" link ================
  // get the locator of the "Careers" link
  get careersLinkLocator() {
    return $("//a[normalize-space()='Careers']");
  }
  // scroll method to the "Start a free trial" button
  scrollToCareersLink() {
    this.careersLinkLocator.scrollIntoView();
  }
  // click method on the "Search" input field
  clickOnCareersLink() {
    this.careersLinkLocator.click();
  }
  // ============ the "Open positions" link ================
  // get the locator of the "Careers" link
  get openPositionsLinkLocator() {
    return $("//a[@class='f3-light d-inline-block mr-5 js-smoothscroll-anchor']");
  }
  // click method on the "Careers" link
  clickOnOpenPositionsLink() {
    this.openPositionsLinkLocator.click();
  }
  // ============ the "Open positions" list ================
  // the "Business Systems position"  link
  // get the locator of the "Business Systems position"  link
  get businessSystemsPositionLinkLocator() {
    return $("//h3[normalize-space()='Business Systems']");
  }
  //   get method the  "Business Systems position"  link title
  async getBusinessSystemsPositionLinkTitle() {
    return await this.businessSystemsPositionLinkLocator.getText();
  }
  // the "Design position" link
  // get the locator of the "Design position" link
  get designPositionLinkLocator() {
    return $("//h3[normalize-space()='Design']");
  }
  //   get method the  "Design position" link title
  async getDesignPositionLinkTitle() {
    return await this.designPositionLinkLocator.getText();
  }
  //  the "Engineering position"  link
  // get the locator of the "Engineering position"  link
  get engineeringSystemsPositionLinkLocator() {
    return $("//h3[normalize-space()='Engineering']");
  }
  //   get method the  "Engineering position" link title
  async getEngineeringPositionLinkTitle() {
    return await this.engineeringSystemsPositionLinkLocator.getText();
  }
  //  the "Finance position"  link
  // get the locator of the "Finance position"  link
  get financePositionLinkLocator() {
    return $("//h3[normalize-space()='Finance']");
  }
  async getFinancePositionLinkTitle() {
    return await this.financePositionLinkLocator.getText();
  }
  //  the "Human Resources position"  link
  // get the locator of the "Human Resources position"  link
  get humanResourcesPositionLinkLocator() {
    return $("//h3[normalize-space()='Human Resources']");
  }
  async getHumanResourcesPositionLinkTitle() {
    return await this.humanResourcesPositionLinkLocator.getText();
  }
  //  the "Legal position"  link
  // get the locator of the "Legal position"  link
  get legalPositionLinkLocator() {
    return $("//h3[normalize-space()='Legal']");
  }
  async getLegalPositionLinkTitle() {
    return await this.legalPositionLinkLocator.getText();
  }
  //  the "Marketing position"  link
  // get the locator of the "Marketing position"  link
  get marketingPositionLinkLocator() {
    return $("//h3[normalize-space()='Marketing']");
  }
  async getMarketingPositionLinkTitle() {
    return await this.marketingPositionLinkLocator.getText();
  }
  //  the "Product position"  link
  // get the locator of the "Product position"  link
  get productPositionLinkLocator() {
    return $("//h3[normalize-space()='Product']");
  }
  async getProductPositionLinkTitle() {
    return await this.productPositionLinkLocator.getText();
  }
  //  the "Operations position"  link
  // get the locator of the "Operations position"  link
  get operationsPositionLinkLocator() {
    return $("//h3[normalize-space()='Operations']");
  }
  async getOperationsPositionLinkTitle() {
    return await this.operationsPositionLinkLocator.getText();
  }
  // the "Sales position"  link
  // get the locator of the "Sales position"  link
  get salesPositionLinkLocator() {
    return $("//h3[normalize-space()='Sales']");
  }
  async getSalesPositionLinkTitle() {
    return await this.salesPositionLinkLocator.getText();
  }
  // the "Security position"  link
  // get the locator of the "Security position"  link
  get securityPositionLinkLocator() {
    return $("//h3[normalize-space()='Security']");
  }
  async getSecurityPositionLinkTitle() {
    return await this.securityPositionLinkLocator.getText();
  }
  //  the "Support position"  link
  // get the locator of the "Support position"  link
  get supportPositionLinkLocator() {
    return $("//h3[normalize-space()='Support']");
  }
  async getSupportPositionLinkTitle() {
    return await this.supportPositionLinkLocator.getText();
  }
}

module.exports = new MainPage();
