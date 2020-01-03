@PayBills
Feature: Pay Bills

  Scenario: Account activity page should have title "Zero - Pay Bills"
    Given user is on the login page
    Then user logs in with valid credentials
    And user will have "Zero - Pay Bills" title when click the Pay Bills


  Scenario: After user finish Pay Operation successfully, "The payment was successfully submitted." should be displayed
    Given user is on the login page
    Then user logs in with valid credentials
    When user click Pay Bills and fill out the Pay Operation information successfully, "The payment was successfully submitted." message will display


  Scenario: If user try to make payment without entering amount or date, "Please fill out this field." message should be displayed
    Given user is on the login page
    Then user logs in with valid credentials
    When user click Pay Bills and make payment without entering amount or date, "Please fill out this field." will be displayed

  Scenario: Amount field should not accept alphabetical or special characters.
    Given user is on the login page
    Then user logs in with valid credentials
    When user click Pay Bills and write alphabetical or special characters to the amount, it should not be accept.
