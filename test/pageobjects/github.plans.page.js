class PlansPage {
  // ============ the "Join Free" button ================
  // get the locator of the "Join Free" button
  get joinFreeButtonLocator() {
    return $("//a[@class='btn-mktg d-block btn-muted-mktg']");
  }
  // scrollTo method to the "Join Free" button
  scrollToJoinFreeButton() {
    this.joinFreeButtonLocator.scrollIntoView();
  }
  // click method on the "Join Free" button
  clickOnJoinFreeButton() {
    this.joinFreeButtonLocator.click();
  }

  // ============ the "Enterprise Cloud" block ================
  // get the locator of the "Enterprise Cloud" block
  get enterpriseCloudBlockLocator() {
    return $("//div[@class='rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan']");
  }
  // click method on the "Enterprise Cloud" block
  clickOnEnterpriseCloudBlock() {
    this.enterpriseCloudBlockLocator.click();
  }

  // ============ the "Enterprise Server" block ================
  // get the locator of the "Enterprise Server" block
  get enterpriseServerBlockLocator() {
    return $("//div[@class='rounded-3 px-2 pt-5 pb-2']");
  }
  // click method on the "Enterprise Server" block
  clickOnEnterpriseServerBlock() {
    this.enterpriseServerBlockLocator.click();
  }
}

module.exports = new PlansPage();
