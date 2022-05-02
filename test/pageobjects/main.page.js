class MainPage {
  // method  - get locator
  get searchInput() {
    return $("//input[@id='docsearch-input']");
  }
  // method  - addSearchInputValue
  addSearchInputValue(value) {
    this.searchInput.addValue(value);
  }

  // homeWork-Obj - get locator method
  get docNavMenuItem() {
    return $("//a[normalize-space()='Docs']");
  }
  // method  - addSearchInputValue
  clickOnDocNavMenuItem() {
    this.docNavMenuItem.click();
  }
}

module.exports = new MainPage();
