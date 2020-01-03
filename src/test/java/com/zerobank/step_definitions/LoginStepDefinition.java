package com.zerobank.step_definitions;

import com.zerobank.pages.LoginPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class LoginStepDefinition {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.getProperty("url"));
    }

    @Then("user logs in with valid credentials")
    public void user_logs_in_with_valid_credentials() {
       loginPage.login();
    }

    @Then("User verifies that {string} page is displayed")
    public void user_verifies_that_page_is_displayed(String page) {
        BrowserUtils.wait(1);
        WebElement element = Driver.get().findElement(By.xpath("//ul[@class='nav nav-tabs']//li//a[contains(text(),'Account Summary')]"));
        Assert.assertEquals(page,element.getText());
    }

    @Then("user logs in with invalid credentials")
    public void user_logs_in_with_invalid_credentials() {
        BrowserUtils.ClickSignInButton();
        loginPage.login("talha", "turkyolu");
    }

    @Then("User will see {string} warning message")
    public void user_will_see_warning_message(String WarningMessage) {
        Assert.assertEquals("Login and/or password are wrong.",loginPage.GetTextOfAlertMessage());
    }
}
