package com.zerobank.step_definitions;

import com.zerobank.pages.PurchaseForeignCurrencyPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class PurchaseForeignCurrencyStepDefinition {

    PurchaseForeignCurrencyPage purchaseForeignCurrencyPage = new PurchaseForeignCurrencyPage();

    @Given("the user accesses the Purchase foreign currency cash tab")
    public void the_user_accesses_the_Purchase_foreign_currency_cash_tab() {
    purchaseForeignCurrencyPage.AccessThePurchaseForeignCurrencyCashTab();
    }

    @Then("following currencies should be available")
    public void followingCurrenciesShouldBeAvailable(List<String> Countries) {
        System.out.println(Countries);
        Assert.assertTrue(purchaseForeignCurrencyPage.CountriesCurrency(Countries));
    }

    @When("user tries to calculate cost without selecting a currency")
    public void userTriesToCalculateCostWithoutSelectingACurrency() {
        purchaseForeignCurrencyPage.CalculateWithoutSelectingCurrency();
    }

    @Then("error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
    Assert.assertTrue(purchaseForeignCurrencyPage.ErrorMessageDisplayed());
    }

    @When("user tries to calculate cost without entering a value")
    public void userTriesToCalculateCostWithoutEnteringAValue() {
    purchaseForeignCurrencyPage.CalculateCostWithoutEnteringValue();
    }
}
