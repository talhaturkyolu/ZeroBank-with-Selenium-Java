package com.zerobank.step_definitions;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class AccountActivityNavigation {

    AccountActivityPage accountActivityPage = new AccountActivityPage();

    @When("the user clicks on	Savings	link on	the	Account	Summary	page")
    public void the_user_clicks_on_Savings_link_on_the_Account_Summary_page() {
       accountActivityPage.ClickSavingsLink();
    }

    @Then("the Account Activity page should be displayed")
    public void the_Account_Activity_page_should_be_displayed() {
        Assert.assertEquals("Zero - Account Activity", Driver.get().getTitle());
    }

    @Then("Account	drop down should have Savings selected")
    public void account_drop_down_should_have_Savings_selected() {
        Assert.assertTrue(accountActivityPage.DefaultOptionIsSaving());
    }

    @When("the user clicks on	Brokerage link on the Account Summary page")
    public void theUserClicksOnBrokerageLinkOnTheAccountSummaryPage() {
    accountActivityPage.ClickBrokerageLink();
    }

    @And("Account	drop down should have Brokerage selected")
    public void accountDropDownShouldHaveBrokerageSelected() {
    Assert.assertTrue(accountActivityPage.BrokerageOptionSelectedByDefault());
    }


    @When("the user clicks on Checking link on the Account Summary page")
    public void theUserClicksOnCheckingLinkOnTheAccountSummaryPage() {
    accountActivityPage.ClickTheCheckingLinkOnAccountSummaryPage();
    }

    @And("Account	drop down should have Checking selected")
    public void accountDropDownShouldHaveCheckingSelected() {
    Assert.assertTrue(accountActivityPage.CheckingOptionSelectedByDefault());
    }

    @When("the user clicks on Credit card link on the Account	Summary	page")
    public void theUserClicksOnCreditCardLinkOnTheAccountSummaryPage() {
    accountActivityPage.ClickCreditCardOnAccountSummaryPage();
    }

    @And("Account drop down should have Credit Card selected")
    public void accountDropDownShouldHaveCreditCardSelected() {
    Assert.assertTrue(accountActivityPage.CreditCardOptionSelectedByDefault());
    }

    @When("the user clicks on	Loan link on the Account Summary page")
    public void theUserClicksOnLoanLinkOnTheAccountSummaryPage() {
    accountActivityPage.ClickLoanLinkOnAcoountSummaryPage();
    }

    @And("Account	drop down should have Loan selected")
    public void accountDropDownShouldHaveLoanSelected() {
    Assert.assertTrue(accountActivityPage.LoanOptionSelectedByDefault());
    }
}
