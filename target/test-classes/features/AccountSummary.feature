@AccountSummary
Feature: Account Summary

  Scenario:Verify that user has "Zero - Account Summary" title
    Given user is on the login page
    And user logs in with valid credentials
    Then user verifies that "Zero - Account Summary" title is displayed


  Scenario: Verify that Account Summary Page should have "Cash Accounts,Investment Accounts,Credit Accounts,Loan Accounts" account types.
    Given user is on the login page
    And user logs in with valid credentials
    Then user will have "Cash Accounts,Investment Accounts,Credit Accounts,Loan Accounts" account types.


  Scenario: Verify that Credit Accounts table must have columns "Account,Credit Card and Balance"
    Given user is on the login page
    And user logs in with valid credentials
    Then user will see "Account,Credit Card,Balance" columns on Credit Accounts table