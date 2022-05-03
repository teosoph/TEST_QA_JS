it("should demonstrate Task-1", async () => {
  await browser.url("https://webdriver.io");

  const apiTabLocator = await $('li a[href="/docs/api"]');
  await apiTabLocator.click();
  await browser.pause(2000);

  const postHeaderH2 = $("//h2[@id='examples']");
  console.log(await postHeaderH2.getAttribute("id"));
});

//   xit(`should check the entered characters in the "Search" field`, async () => {
//     // open url https://github.com
//     await browser.url("https://github.com");
//     await browser.pause(5000);

//     //   click on the search field
//     let searchInputForm = $("form[aria-label='Site']");
//     await searchInputForm.click();
//     await browser.pause(5000);

//     //   fill data in the search field
//           let searchInput = $("//input[@data-test-selector="nav-search-input"]");

//     searchInput.addValue(256);
//     await browser.pause(5000);

//     //   send "Enter" command
//     await browser.keys("\uE007");
//     await browser.pause(5000);
//   });

//  while(true){
// let i=0;
// searchInput.addValue(i);
//           i++;
// if(i===257){
// break;
// }
// }
