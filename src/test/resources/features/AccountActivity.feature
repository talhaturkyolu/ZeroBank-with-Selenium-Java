@AccountActivity
Feature: Account Activity

  Scenario: Account Activity Page should have the title "Zero - Account activity"
    Given user is on the login page
    And user logs in with valid credentials
    Then user will have "Zero - Account Activity" title when click the Account Summary


  Scenario: Account DropDown default option should be "Savings"
    Given user is on the login page
    And user logs in with valid credentials
    Then user will see "Savings" as a default option of Account dropdown after click the Account Activity


  Scenario: Account	drop down should have the following	options: "Savings,Checking,Loan,Credit Card,Brokerage"
    Given user is on the login page
    And user logs in with valid credentials
    Then user will be able to see "Savings,Checking,Loan,Credit Card,Brokerage" options in the Account Dropdown


  Scenario: Transaction table should have column names "Date,Description,Deposit,Withdrawal"
    Given user is on the login page
    And user logs in with valid credentials
    Then user will be able to see "Date,Description,Deposit,Withdrawal," on the column of Transaction table
