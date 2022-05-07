class SearchPage {
  // ============ the "Topics" tab ================
  // get the locator of the "TypeScript" tab
  get typeScriptTabLocator() {
    return $("//a[@href='/search?l=TypeScript&q=webdriver.io&type=Repositories']");
  }
  // click method on the "TypeScript" tab
  clickOnTypeScriptTab() {
    this.typeScriptTabLocator.click();
  }
  // get the locator of the first search result tab
  get firstSearchResultTabLocator() {
    return $("(//a[normalize-space()='js-soft/wdi5'])[1]");
  }
  // click method on the first search result tab
  clickOnFirstSearchResultTab() {
    this.firstSearchResultTabLocator.click();
  }
  // getUrl method on the first search result page
  getUrlOfFirstSearchResultPage() {
    return browser.getUrl();
  }
  get firstSearchResultPageURL() {
    return this.getUrlOfFirstSearchResultPage();
  }
}
module.exports = new SearchPage();
