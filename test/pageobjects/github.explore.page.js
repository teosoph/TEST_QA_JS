class ExplorePage {
  // ============ the "Topics" tab ================
  // get the locator of the "Topics" tab
  get topicsTabLocator() {
    return $("//a[@class='js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link'][normalize-space()='Topics']");
  }
  // click method on the "Sign In" button
  clickOnTopicsTab() {
    this.topicsTabLocator.click();
  }
  // get the locator of the "Topics" title
  get topicsTitleLocator() {
    return $("//h1[@class='h1']");
  }
  //   isDisplayed method on the "Topics" title
  isDisplayedTopicsTitle() {
    return this.topicsTitleLocator.isDisplayed();
  }
}
module.exports = new ExplorePage();
