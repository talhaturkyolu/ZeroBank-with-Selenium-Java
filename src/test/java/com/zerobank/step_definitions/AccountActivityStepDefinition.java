package com.zerobank.step_definitions;

import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class AccountActivityStepDefinition {

    LoginPage loginPage = new LoginPage();
    AccountActivityPage accountActivityPage = new AccountActivityPage();

    @Then("user will have {string} title when click the Account Summary")
    public void user_will_have_title_when_click_the_Account_Summary(String string) {
        loginPage.navigateTo("Account Activity");
        Assert.assertEquals(string, Driver.get().getTitle());
    }

    @Then("user will see {string} as a default option of Account dropdown after click the Account Activity")
    public void userWillSeeAsADefaultOptionOfAccountDropdownAfterClickTheAccountActivity(String DefaultOption) {
        loginPage.navigateTo("Account Activity");
        Assert.assertTrue(accountActivityPage.DefaultOptionIsSaving());
    }

    @Then("user will be able to see {string} options in the Account Dropdown")
    public void userWillBeAbleToSeeOptionsInTheAccountDropdown(String options) {
        loginPage.navigateTo("Account Activity");
        Assert.assertEquals(options, BrowserUtils.GetListOfString(accountActivityPage.AllOptions));
    }

    @Then("user will be able to see {string} on the column of Transaction table")
    public void userWillBeAbleToSeeOnTheColumnOfTransactionTable(String ColumnNames) {
        loginPage.navigateTo("Account Activity");
        BrowserUtils.wait(2);
        Assert.assertEquals(ColumnNames,BrowserUtils.GetListOfString(accountActivityPage.AllColumnNames));
    }


}
