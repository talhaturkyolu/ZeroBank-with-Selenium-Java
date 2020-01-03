package com.zerobank.step_definitions;

import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AccountsSummaryPageStepDefinition {

    LoginPage loginPage = new LoginPage();
    AccountSummaryPage accountSummaryPage = new AccountSummaryPage();

    @Then("user verifies that {string} title is displayed")
    public void user_verifies_that_title_is_displayed(String title) {
        Assert.assertEquals("Zero - Account Summary", Driver.get().getTitle());
    }

    @Then("user will have {string} account types.")
    public void user_will_have_account_types(String string) {
        Assert.assertEquals("Cash Accounts,Investment Accounts,Credit Accounts,Loan Accounts,",
                BrowserUtils.GetListOfString(accountSummaryPage.DropdownOptions));
    }

    @Then("user will see {string} columns on Credit Accounts table")
    public void userWillSeeColumnsOnCreditAccountsTable(String arg0) {
        Assert.assertEquals("Account,Credit Card,Balance,",
                BrowserUtils.GetListOfString(accountSummaryPage.ColumnNames));
    }

}
