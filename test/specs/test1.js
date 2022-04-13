it("should demonstrate Task-1", async () => {
  await browser.url("https://webdriver.io");

  const apiTabLocator = await $('li a[href="/docs/api"]');
  await apiTabLocator.click();
  await browser.pause(2000);

  const postHeaderH2 = $("//h2[@id='examples']");
  console.log(await postHeaderH2.getAttribute("id"));
});
