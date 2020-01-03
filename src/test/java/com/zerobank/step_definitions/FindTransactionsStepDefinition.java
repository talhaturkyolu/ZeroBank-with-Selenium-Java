package com.zerobank.step_definitions;

import com.zerobank.pages.FindTransactionsPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class FindTransactionsStepDefinition {

    FindTransactionsPage findTransactionsPage = new FindTransactionsPage();

    @And("user click {string} page")
    public void userClickPage(String AccountActivity) {
    findTransactionsPage.ClickAccountActivityPage();
    }
    @Then("user click {string} link")
    public void userClickLink(String FindTransactionLink) {
    findTransactionsPage.ClickFindTransactionLink();
    }

    @When("the user enters date range from {string} to {string}")
    public void theUserEntersDateRangeFromTo(String Date1, String ToDate2) {
        findTransactionsPage.UserEntersDate(Date1,ToDate2);
    }

    @And("clicks search")
    public void clicksSearch() {
        findTransactionsPage.ClickSearch();
        BrowserUtils.wait(1);
    }

    @Then("results table should only show transactions dates between {string} to {string}")
    public void resultsTableShouldOnlyShowTransactionsDatesBetweenTo(String Date, String ToDate1) {
        int result1 = Integer.parseInt(Date.replaceAll("-",""));
        int result2 = Integer.parseInt(findTransactionsPage.BeginningDay().replaceAll("-",""));
        Assert.assertTrue(result1<=result2);
        Assert.assertEquals(ToDate1,findTransactionsPage.EndingDay());
    }


    @And("the results should be sorted by most recent date")
    public void theResultsShouldBeSortedByMostRecentDate() {
        Assert.assertEquals(BrowserUtils.getDescendingSortedStringList(findTransactionsPage.getAllDates()),
                BrowserUtils.getOriginalStringList(findTransactionsPage.getAllDates()));
    }

    @And("the results table should only not contain transactions dated {string}")
    public void theResultsTableShouldOnlyNotContainTransactionsDated(String TransactionDate) {
        Assert.assertFalse(BrowserUtils.getOriginalStringList(findTransactionsPage.getAllDates()).contains(TransactionDate));
    }


    @When("the user enters description {string}")
    public void theUserEntersDescription(String input) {
        BrowserUtils.waitForVisibility(findTransactionsPage.DescriptionInput,5);
        findTransactionsPage.DescriptionInput.clear();
        findTransactionsPage.DescriptionInput.sendKeys(input);
    }

    @Then("results table should only show descriptions containing {string}")
    public void resultsTableShouldOnlyShowDescriptionsContaining(String input) {
        findTransactionsPage.ResultTableOnlyContainInput(input);
    }

    @Then("results table should show at least one result under Deposit")
    public void resultsTableShouldShowAtLeastOneResultUnderDeposit() {
    Assert.assertTrue(findTransactionsPage.ShowAtLeastOneResultUnderDeposit());
    }

    @Then("results table should show at least one result under Withdrawal")
    public void resultsTableShouldShowAtLeastOneResultUnderWithdrawal() {
        Assert.assertTrue(findTransactionsPage.ShowAtLeastOneResultUnderWithdrawal());
    }

    @When("user selects type {string}")
    public void userSelectsType(String SelectType) {
        findTransactionsPage.SelectType(SelectType);
    }

    @But("results table should show no result under Withdrawal")
    public void resultsTableShouldShowNoResultUnderWithdrawal() {
        Assert.assertFalse(!findTransactionsPage.ShowAtLeastOneResultUnderWithdrawal());
    }

    @But("results table should show no result under Deposit")
    public void resultsTableShouldShowNoResultUnderDeposit() {
        Assert.assertFalse(!findTransactionsPage.ShowAtLeastOneResultUnderDeposit());
    }
}
