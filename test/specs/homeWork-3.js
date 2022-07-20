// ======= https://webdriver.io/docs/api locators =======

// ------- Part 1 ---------

// === 1 ====
// Locators for "Introduction" element
// Id locator: locator not provided
// CSS locator: [class*="menu"][href="/docs/api"]
// Xpath locator: //a[@class='menu__link menu__link--active']  or  //*[text()="Introduction" and @href and @xpath]

// === 2 ====
// Locators for "Expect" element
// Id locator: locator not provided

// CSS locator:  [class= "menu__link"][href*="/docs/api/expect"]
// next CSS element:  [class= "menu__link"][href*="/docs/api/expect"]div
// p a[href*="appium"]

// Xpath locator:
//a[text()='Expect']  or
//*[text()="Expect" and @href and @xpath]
//*[contains(text(), "Expect") and @href and @xpath]
//h3[contains(@class, "Expect")]
//div[@class='g'][5]//a[@class='fl']
//div[text()='g']/../../..
//div[text()='g']/parent::div/
//div[text()='g']/parent::div/following-sibling:div

// === 3 ====
// Locators for "Protocols" element
// Id locator: locator not provided
// CSS locator: div a[class*="menu"][xpath='1']
// Xpath locator: //a[text()='Protocols']

// === 4 ====
// Locators for "WebDriver Protocol" element
// Id locator: locator not provided
// CSS locator:  a[href="/docs/api/webdriver"]
// Xpath locator: //a[text()='WebDriver Protocol']

// === 5 ====
// Locators for "Appium" element
// Id locator: locator not provided
// CSS locator:    a[class*='menu'][href*="appium"]
// Xpath locator: //a[@class='menu__link'][text()='Appium']

// === 6 ====
// Locators for "Mobile JSON Wire Protocol" element
// Id locator: locator not provided
// CSS locator:    a[class*='menu'][href="/docs/api/mjsonwp"]
// Xpath locator: //a[text()='Mobile JSON Wire Protocol']

// === 7 ====
// Locators for "Chromium" element
// Id locator: locator not provided
// CSS locator:    a[class*='menu'][href*="chromium"]
// Xpath locator: //a[text()='Chromium']

// === 8 ====
// Locators for "Firefox" element
// Id locator: locator not provided
// CSS locator:    a[class*='menu'][href="/docs/api/gecko"]
// Xpath locator: //a[text()='Firefox']

// === 9 ====
// Locators for "Sauce Labs" element
// Id locator: locator not provided
// CSS locator: a[class*='menu'][href="/docs/api/saucelabs"]
// Xpath locator: //a[text()='Sauce Labs']

// === 10 ====
// Locators for "Selenium Standalone" element
// Id locator: locator not provided
// CSS locator: a[class*='menu'][href*="selenium"]
// Xpath locator: //a[text()='Selenium Standalone']

// === 11 ====
// Locators for "JSON Wire Protocol" element
// Id locator: locator not provided
// CSS locator: a[class*='menu'][href="/docs/api/jsonwp"]
// Xpath locator: //a[text()='JSON Wire Protocol']

// === 12 ====
// Locators for "Appiuml" element
// Id locator: locator not provided
// CSS locator: p a[href*="appium"]  or   a[href*="appium"][target]
// Xpath locator: //a[@href='http://appium.io']

// === 13 ====
// Locators for "old documentation websites" element
// Id locator: locator not provided
// CSS locator: p a[href="/versions"]  or a[href="/versions"][xpath]
// Xpath locator: //a[text()='old documentation websites']

// === 14 ====
// Locators for "Contribute" element
// Id locator: locator not provided
// CSS locator: li a[href="#contribute"]  or  a[href="#contribute"][xpath]
// Xpath locator: //a[@href="#contribute" and @xpath]  or  //a[@href="#contribute" and text()='Contribute']

// === 15 ====
// Locators for "Contribute" element
// Id locator: locator not provided
// CSS locator: p[xpath]  or  p[xpath][style]
// Xpath locator: //p[contains(text(),'Each command documentation usually comes with')]

// ------- Part 2 ---------

// === 16 ====
// Locators for "Docs" element
// Id locator: locator not provided
// CSS locator: body > div:nth-child(2) > footer:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)
// Xpath locator: //div[text()='Docs']

// === 17 ====
// Locators for "Getting Started" element
// Id locator: locator not provided
// CSS locator: a[class="footer__link-item"][href*=gettingstarted]
// Xpath locator: //a[text()='Getting Started']

// === 18 ====
// Locators for "API Reference" element
// Id locator: locator not provided
// CSS locator: a[class="footer__link-item"][href="/docs/api"]
// Xpath locator: //a[text()='API Reference']

// === 19 ====
// Locators for "Contribute" element
// Id locator: locator not provided
// CSS locator: a[class="footer__link-item"][href="/docs/contribute/"]
// Xpath locator: //a[@class='footer__link-item'][text()='Contribute']

// === 20 ====
// Locators for "Help" element
// Id locator: locator not provided
// CSS locator:  a[class*="footer"][href="/community/support"]
// Xpath locator: //a[text()='Help']

// === 21 ====
// Locators for "Community" element
// Id locator: locator not provided
// CSS locator:  body > div:nth-child(2) > footer:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)
// Xpath locator: //div[text()='Community']

// === 22 ====
// Locators for "Stack Overflow" element
// Id locator: locator not provided
// CSS locator: a[class*="footer"][href*=stackoverflow]  or  body > div:nth-child(2) > footer:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)
// Xpath locator: //span[text()='Stack Overflow']/..

// === 23 ====
// Locators for "Support Chat" element
// Id locator: locator not provided
// CSS locator:    a[class*="footer"][href*="gitter"]
// Xpath locator: //span[text()='Support Chat']/..

// === 24 ====
// Locators for "Slack" element
// Id locator: locator not provided
// CSS locator: a[href*='seleniumhq.slack.com']
// Xpath locator: //span[text()='Slack']/.. or  (//a)[42]   or   //body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]

// === 25 ====
// Locators for "Twitter" element
// Id locator: locator not provided
// CSS locator: a[href*='twitter'][class*='footer']
// Xpath locator: //span[text()='Twitter']/..  or  //body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[4]/a[1] or  (//a)[43]

// === 26 ====
// Locators for "More" element
// Id locator: locator not provided
// CSS locator: body > div:nth-child(2) > footer:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)
// Xpath locator: //div[text()='More']

// === 27 ====
// Locators for "Tidelift Subscription" element
// Id locator: locator not provided
// CSS locator: .footer__link-item[href*='enterprise']
// Xpath locator: //a[text()='Tidelift Subscription']

// === 28 ====
// Locators for "Donate to WebdriverIO" element
// Id locator: locator not provided
// CSS locator: .footer__link-item[href*='opencollective'] or  a[class*='footer'][href*='opencollective']
// Xpath locator://a[@href='https://opencollective.com/webdriverio']  or  //span[text()='Donate to WebdriverIO']/..

// === 29 ====
// Locators for "Swag Store" element
// Id locator: locator not provided
// CSS locator: a[href="http://shop.webdriver.io"][class*='footer']
// Xpath locator: //a[@href='http://shop.webdriver.io']

// === 30 ====
// Locators for "Blog" element
// Id locator: locator not provided
// CSS locator: a[href="/blog"][class*='footer']
// Xpath locator: //a[@class='footer__link-item'][text()='Blog']

// === 31 ====
// Locators for "GitHub" element
// Id locator: locator not provided
// CSS locator: a[href*="github"][class*='footer']
// Xpath locator: //span[text()='GitHub']/..

// === 32 ====
// Locators for "OpenJS Foundation Logo" element
// Id locator: locator not provided
// CSS locator: img[src="/img/open-jsf-logo.svg"][class*='footer']
// Xpath locator: //img[@alt='OpenJS Foundation Logo']
