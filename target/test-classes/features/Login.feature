@Login
Feature: Login
  Only authorized users should be able to login to the application.
  Unauthorized users should not be able to login to the application.

  Scenario: Login with valid credentials
    Given user is on the login page
    Then user logs in with valid credentials
    And User verifies that "Account Summary" page is displayed

  Scenario: Login with invalid Credentials
    Given user is on the login page
    Then user logs in with invalid credentials
    And User will see "Login and/or password are wrong." warning message