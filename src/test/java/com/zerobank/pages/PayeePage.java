package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PayeePage extends BasePage{

    LoginPage loginPage = new LoginPage();

    @FindBy(xpath = "//a[contains(text(),'Add New Payee')]")
    public WebElement AddNewPage;

    @FindBy(id = "np_new_payee_name")
    public WebElement PayeeName;

    @FindBy(id = "np_new_payee_address")
    public WebElement PayeeAddress;

    @FindBy(id = "np_new_payee_account")
    public WebElement Account;

    @FindBy(id = "np_new_payee_details")
    public WebElement PayeeDetails;

    @FindBy(id = "alert_content")
    public WebElement Message;

    @FindBy(xpath = "//*[@id='add_new_payee']")
    public WebElement Add;

    public void AddNewPayeTab(){
        Driver.get().get(ConfigurationReader.getProperty("url"));
        loginPage.login();
        loginPage.navigateTo("Pay Bills");
        BrowserUtils.waitForClickablity(AddNewPage,5);
        AddNewPage.click();
    }

    public void CreatesNewPayee(String name, String address, String account, String Details){
        BrowserUtils.waitForVisibility(PayeeName,5);
        PayeeName.sendKeys(name);
        PayeeAddress.sendKeys(address);
        Account.sendKeys(account);
        PayeeDetails.sendKeys(Details);
        Add.click();
    }

    public boolean MessageShouldBeDisplayed(String ExpectedMessage){
        BrowserUtils.waitForVisibility(Message,5);
        String ActualMessage = Message.getText();
        return ExpectedMessage == ActualMessage;
    }
}
