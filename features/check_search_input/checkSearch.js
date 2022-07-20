// const assert = require("assert");
// const { Given, When, Then } = require("@cucumber/cucumber");

// const testSiteUrl = `https://webdriver.io`;

// function isItFriday(today) {
//   if (today === "Friday") {
//     return "TGIF";
//   } else {
//     return "Nope";
//   }
// }
// Given("today is {string}", function (givenDay) {
//   this.today = givenDay;
// });

// When("I ask whether it's Friday yet", function () {
//   this.actualAnswer = isItFriday(this.today);
//   return console.log("==============" + this.actualAnswer);
// });

// Then("I should be told {string}", function (expectedAnswer) {
//   assert.strictEqual(this.actualAnswer, expectedAnswer);
// });

// it(`checking the possibility of registering with valid random email data`, async () => {
// describe(`webdriver.io page`, () => {
//     Given("I am on webdriverio page", async function () {
//       await browser.url(testSiteUrl);
//       await browser.pause(2000);
//     });

//     When("I click on search", function () {
//       // Write code here that turns the phrase above into concrete actions
//       return "pending";
//     });

//     Then("I type text to search", function () {
//       // Write code here that turns the phrase above into concrete actions
//       return "pending";
//     });
//   });
// });

/* This Cucumber.js tutorial file contains the step definition or the description of each of the behavior that is expected from the application */

/* This Cucumber.js tutorial file contains the step definition or the description of each of the behavior that is expected from the application */
 
'use strict';
 
const { Given, When, Then } = require('cucumber');
 
const assert = require('assert')
 
const webdriver = require('selenium-webdriver');
 
// // The step definitions are defined for each of the scenarios // //
 
// // The “given” condition for our test scenario // //
Given(/^I have visited the Selenium official web page on "([^"]*)"$/, function (url, next) {
    
this.driver.get('https://www.selenium.dev').then(next);
 
  });
 
// // The “when” condition for our test scenario // //
  When(/^There is a title on the page as "SeleniumHQ Browser Automation" "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
 
// // The “then” condition for our test scenario // //
Then(/^I should be able to click Search in the sidebar $/, function (text, next) {
     this.driver.findElement({ id: 'searchText' }).click();
     this.driver.findElement({ id: 'searchText' }).sendKeys(text).then(next);
  });