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
}

module.exports = new PlansPage();
