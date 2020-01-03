package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class PayBillsPage extends BasePage {

    @FindBy(id = "sp_payee")
    public WebElement PayeeSelectOption;

    @FindBy(css = "select[id='sp_account']")
    public WebElement AccountSelectOption;

    @FindBy(id = "sp_amount")
    public WebElement Amount;

    @FindBy(id = "sp_date")
    public WebElement Date;

    @FindBy(id = "sp_description")
    public WebElement Description;

    @FindBy(xpath = "//span[contains(text(),'The payment was successfully submitted.')]")
    public WebElement TextMessageAfterFinishPayOperation;

    @FindBy(css = "input[type='submit']")
    public WebElement PayButton;

    public void SelectABank(String BankName){
        BrowserUtils.waitForVisibility(PayeeSelectOption,5);
        BrowserUtils.waitForClickablity(PayeeSelectOption,5);
        Select select = new Select(PayeeSelectOption);
        select.selectByValue(BankName);
    }

    public void SelectAccountType(int AccountType){
        BrowserUtils.waitForVisibility(AccountSelectOption,5);
        BrowserUtils.waitForClickablity(AccountSelectOption,5);
        Select select = new Select(AccountSelectOption);
        select.selectByValue(""+AccountType+"");
    }

    public void AmountSendKey(int AmountNumber){
        Amount.sendKeys(""+AmountNumber+"");
    }

    public void AmountSendKey(String Amountwithcharacter){
        Amount.sendKeys(""+Amountwithcharacter+"");
    }


    public void DateSendKey(String date){
        Date.sendKeys(date);
    }

    public void DescriptionSendKeys(String description){
        Description.sendKeys(description);
    }

   public String GetTextOfTheMessage(){
        return TextMessageAfterFinishPayOperation.getText();
   }

   public void ClickPayButton(){
        PayButton.click();
   }

   public String GetTextToAlertMessage(){
        //HTML5 validation error message
       return Driver.get().findElement(By.name("amount")).getAttribute("validationMessage");
   }


}
