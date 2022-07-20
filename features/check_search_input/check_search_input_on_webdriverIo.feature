Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | Friday         | TGIF   |
    | Sunday         | Nope   |
    | anything else! | Nope   |


# Feature: Check search input on webdriver.io
# Should check the possibility of searching for data after filling in the search input on webdriver.io
  
#   Scenario: Check search input
#     Given I am on webdriverio page
#     When  I click on search
#     Then I type text to search