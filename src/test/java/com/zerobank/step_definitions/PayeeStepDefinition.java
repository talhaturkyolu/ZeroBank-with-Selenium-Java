package com.zerobank.step_definitions;

import com.zerobank.pages.PayeePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import javax.xml.crypto.Data;
import java.util.Map;

public class PayeeStepDefinition {

    PayeePage payeePage = new PayeePage();

    @Given("Add New Payee tab")
    public void add_New_Payee_tab() {
    payeePage.AddNewPayeTab();
    }

    @And("creates new payee using following information")
    public void createsNewPayeeUsingFollowingInformation(Map<String,String> DataTable) {
        System.out.println(DataTable);
        payeePage.CreatesNewPayee(DataTable.get("Payee Name"),DataTable.get("Payee Address"),
                                   DataTable.get("Account"), DataTable.get("Payee details"));
    }

    @Then("message {string} should be displayed")
    public void messageShouldBeDisplayed(String ExpectedMessage) {
        payeePage.MessageShouldBeDisplayed(ExpectedMessage);
    }
}
