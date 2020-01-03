package com.zerobank.step_definitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.pages.PayBillsPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Random;

public class PayBillsStepDefinition {
    Random random = new Random();
    LoginPage loginPage = new LoginPage();
    PayBillsPage payBillsPage = new PayBillsPage();

    @Then("user will have {string} title when click the Pay Bills")
    public void user_will_have_title_when_click_the_Pay_Bills(String Title) {
        loginPage.navigateTo("Pay Bills");
        Assert.assertEquals(Title, Driver.get().getTitle());
    }


    @When("user click Pay Bills and fill out the Pay Operation information successfully, {string} message will display")
    public void userClickPayBillsAndFillOutThePayOperationInformationSuccessfullyMessageWillDisplay(String Message) {
        loginPage.navigateTo("Pay Bills");
        payBillsPage.SelectABank("bofa");
        payBillsPage.SelectAccountType(3);
        payBillsPage.AmountSendKey(600);
        payBillsPage.DateSendKey("2020-01-01");
        payBillsPage.DescriptionSendKeys("money, must be funny");
        payBillsPage.ClickPayButton();
        BrowserUtils.waitForVisibility(payBillsPage.TextMessageAfterFinishPayOperation,5);
        Assert.assertEquals(Message,payBillsPage.GetTextOfTheMessage());
    }

    @When("user click Pay Bills and make payment without entering amount or date, {string} will be displayed")
    public void userClickPayBillsAndMakePaymentWithoutEnteringAmountOrDateWillBeDisplayed(String AlertMessage) {
        loginPage.navigateTo("Pay Bills");
        payBillsPage.SelectABank("bofa");
        payBillsPage.SelectAccountType(3);
        payBillsPage.DateSendKey("2020-01-01");
        payBillsPage.DescriptionSendKeys("money, must be funny");
        payBillsPage.ClickPayButton();
        Assert.assertEquals(AlertMessage,payBillsPage.GetTextToAlertMessage());
    }

    @When("user click Pay Bills and write alphabetical or special characters to the amount, it should not be accept.")
    public void userClickPayBillsAndWriteAlphabeticalOrSpecialCharactersToTheAmountItShouldNotBeAccept() {

            loginPage.navigateTo("Pay Bills");
            payBillsPage.SelectABank("bofa");
            payBillsPage.SelectAccountType(3);
            payBillsPage.AmountSendKey("*&23bsdf");
            payBillsPage.DateSendKey("2020-01-01");
            payBillsPage.DescriptionSendKeys("money, must be funny");
            payBillsPage.ClickPayButton();
            BrowserUtils.waitForVisibility(payBillsPage.TextMessageAfterFinishPayOperation, 5);
            Assert.assertEquals("", payBillsPage.GetTextOfTheMessage());
    }



}


