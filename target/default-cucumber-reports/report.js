$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivity.feature");
formatter.feature({
  "name": "Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.scenario({
  "name": "Account Activity Page should have the title \"Zero - Account activity\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will have \"Zero - Account Activity\" title when click the Account Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinition.user_will_have_title_when_click_the_Account_Summary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account DropDown default option should be \"Savings\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see \"Savings\" as a default option of Account dropdown after click the Account Activity",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinition.userWillSeeAsADefaultOptionOfAccountDropdownAfterClickTheAccountActivity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account\tdrop down should have the following\toptions: \"Savings,Checking,Loan,Credit Card,Brokerage\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be able to see \"Savings,Checking,Loan,Credit Card,Brokerage\" options in the Account Dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinition.userWillBeAbleToSeeOptionsInTheAccountDropdown(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Savings,Checking,Loan,Credit Card,Brokerage]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.zerobank.step_definitions.AccountActivityStepDefinition.userWillBeAbleToSeeOptionsInTheAccountDropdown(AccountActivityStepDefinition.java:32)\r\n\tat ✽.user will be able to see \"Savings,Checking,Loan,Credit Card,Brokerage\" options in the Account Dropdown(file:src/test/resources/features/AccountActivity.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Transaction table should have column names \"Date,Description,Deposit,Withdrawal\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be able to see \"Date,Description,Deposit,Withdrawal,\" on the column of Transaction table",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityStepDefinition.userWillBeAbleToSeeOnTheColumnOfTransactionTable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating\tto specific accounts in\tAccounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.scenario({
  "name": "Savings\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tSavings\tlink on\tthe\tAccount\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigation.the_user_clicks_on_Savings_link_on_the_Account_Summary_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigation.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Savings selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigation.account_drop_down_should_have_Savings_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tBrokerage link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigation.theUserClicksOnBrokerageLinkOnTheAccountSummaryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigation.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Brokerage selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigation.accountDropDownShouldHaveBrokerageSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Checking link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigation.theUserClicksOnCheckingLinkOnTheAccountSummaryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigation.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Checking selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigation.accountDropDownShouldHaveCheckingSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit\tCard\taccount\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Credit card link on the Account\tSummary\tpage",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigation.theUserClicksOnCreditCardLinkOnTheAccountSummaryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigation.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have Credit Card selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigation.accountDropDownShouldHaveCreditCardSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Loan account\tredirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountActivityNavigation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on\tLoan link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountActivityNavigation.theUserClicksOnLoanLinkOnTheAccountSummaryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountActivityNavigation.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account\tdrop down should have Loan selected",
  "keyword": "And "
});
formatter.match({
  "location": "AccountActivityNavigation.accountDropDownShouldHaveLoanSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountSummary.feature");
formatter.feature({
  "name": "Account Summary",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountSummary"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user has \"Zero - Account Summary\" title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountSummary"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Zero - Account Summary\" title is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountsSummaryPageStepDefinition.user_verifies_that_title_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Account Summary Page should have \"Cash Accounts,Investment Accounts,Credit Accounts,Loan Accounts\" account types.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountSummary"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will have \"Cash Accounts,Investment Accounts,Credit Accounts,Loan Accounts\" account types.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountsSummaryPageStepDefinition.user_will_have_account_types(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Credit Accounts table must have columns \"Account,Credit Card and Balance\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountSummary"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see \"Account,Credit Card,Balance\" columns on Credit Accounts table",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountsSummaryPageStepDefinition.userWillSeeColumnsOnCreditAccountsTable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Find Transactions\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user enters date range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDateRangeFromTo(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowTransactionsDatesBetweenTo(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted by most recent date",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theResultsShouldBeSortedByMostRecentDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters date range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDateRangeFromTo(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowTransactionsDatesBetweenTo(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results table should only not contain transactions dated \"2012-09-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theResultsTableShouldOnlyNotContainTransactionsDated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Find Transactions\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDescription(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowDescriptionsContaining(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDescription(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowDescriptionsContaining(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Find Transactions\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description case insensitive",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDescription(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowDescriptionsContaining(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"online\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.theUserEntersDescription(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldOnlyShowDescriptionsContaining(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click \"Find Transactions\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userClickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FindTransaction"
    }
  ]
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowAtLeastOneResultUnderDeposit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowAtLeastOneResultUnderWithdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userSelectsType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowAtLeastOneResultUnderDeposit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under Withdrawal",
  "keyword": "But "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowNoResultUnderWithdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.userSelectsType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.clicksSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowAtLeastOneResultUnderWithdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under Deposit",
  "keyword": "But "
});
formatter.match({
  "location": "FindTransactionsStepDefinition.resultsTableShouldShowNoResultUnderDeposit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  Only authorized users should be able to login to the application.\n  Unauthorized users should not be able to login to the application.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that \"Account Summary\" page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_verifies_that_page_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see \"Login and/or password are wrong.\" warning message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_will_see_warning_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PayBills.feature");
formatter.feature({
  "name": "Pay Bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PayBills"
    }
  ]
});
formatter.scenario({
  "name": "Account activity page should have title \"Zero - Pay Bills\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayBills"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will have \"Zero - Pay Bills\" title when click the Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "PayBillsStepDefinition.user_will_have_title_when_click_the_Pay_Bills(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "After user finish Pay Operation successfully, \"The payment was successfully submitted.\" should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayBills"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Pay Bills and fill out the Pay Operation information successfully, \"The payment was successfully submitted.\" message will display",
  "keyword": "When "
});
formatter.match({
  "location": "PayBillsStepDefinition.userClickPayBillsAndFillOutThePayOperationInformationSuccessfullyMessageWillDisplay(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "If user try to make payment without entering amount or date, \"Please fill out this field.\" message should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayBills"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Pay Bills and make payment without entering amount or date, \"Please fill out this field.\" will be displayed",
  "keyword": "When "
});
formatter.match({
  "location": "PayBillsStepDefinition.userClickPayBillsAndMakePaymentWithoutEnteringAmountOrDateWillBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Amount field should not accept alphabetical or special characters.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PayBills"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Pay Bills and write alphabetical or special characters to the amount, it should not be accept.",
  "keyword": "When "
});
formatter.match({
  "location": "PayBillsStepDefinition.userClickPayBillsAndWriteAlphabeticalOrSpecialCharactersToTheAmountItShouldNotBeAccept()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[The payment was successfully submitted.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.zerobank.step_definitions.PayBillsStepDefinition.userClickPayBillsAndWriteAlphabeticalOrSpecialCharactersToTheAmountItShouldNotBeAccept(PayBillsStepDefinition.java:60)\r\n\tat ✽.user click Pay Bills and write alphabetical or special characters to the amount, it should not be accept.(file:src/test/resources/features/PayBills.feature:24)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Payee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Payee"
    }
  ]
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Payee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Add New Payee tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PayeeStepDefinition.add_New_Payee_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates new payee using following information",
  "rows": [
    {
      "cells": [
        "Payee Name",
        "The Law Offices of Hyde,Price \u0026 Scharks"
      ]
    },
    {
      "cells": [
        "Payee Address",
        "100 Same st,Anytown,USA,10001"
      ]
    },
    {
      "cells": [
        "Account",
        "Checking"
      ]
    },
    {
      "cells": [
        "Payee details",
        "XYZ account"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PayeeStepDefinition.createsNewPayeeUsingFollowingInformation(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"The new payee The Law Offices of Hyde,Price\u0026Scharks was successfully created.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeStepDefinition.messageShouldBeDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following currencies should be available",
  "rows": [
    {
      "cells": [
        "Australia (dollar)"
      ]
    },
    {
      "cells": [
        "Canada (dollar)"
      ]
    },
    {
      "cells": [
        "Switzerland (franc)"
      ]
    },
    {
      "cells": [
        "China (yuan)"
      ]
    },
    {
      "cells": [
        "Denmark (krone)"
      ]
    },
    {
      "cells": [
        "Eurozone (euro)"
      ]
    },
    {
      "cells": [
        "Great Britain (pound)"
      ]
    },
    {
      "cells": [
        "Japan (yen)"
      ]
    },
    {
      "cells": [
        "Mexico (peso)"
      ]
    },
    {
      "cells": [
        "Norway (krone)"
      ]
    },
    {
      "cells": [
        "New Zealand (dollar)"
      ]
    },
    {
      "cells": [
        "Singapore (dollar)"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.followingCurrenciesShouldBeAvailable(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to calculate cost without selecting a currency",
  "keyword": "When "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.userTriesToCalculateCostWithoutSelectingACurrency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@a"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Purchase foreign currency cash tab",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.the_user_accesses_the_Purchase_foreign_currency_cash_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.userTriesToCalculateCostWithoutEnteringAValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseForeignCurrencyStepDefinition.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});