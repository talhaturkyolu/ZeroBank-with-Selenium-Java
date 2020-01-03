package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class PurchaseForeignCurrencyPage extends BasePage{

    LoginPage loginPage = new LoginPage();

    @FindBy(xpath = "//a[contains(text(),'Purchase Foreign Currency')]")
    public WebElement PurchaseForeignCurrency;

    @FindBy(xpath = "//select[@id='pc_currency']//option")
    public WebElement countries;

    @FindBy(id = "pc_calculate_costs")
    public WebElement CalculateCostButton;

    @FindBy(xpath = "//*[@id='pc_currency']")
    public WebElement selectDropDown;



    public void AccessThePurchaseForeignCurrencyCashTab(){
        Driver.get().get(ConfigurationReader.getProperty("url"));
        loginPage.login();
        loginPage.navigateTo("Pay Bills");
        BrowserUtils.waitForClickablity(PurchaseForeignCurrency,5);
        PurchaseForeignCurrency.click();
    }

    public boolean CountriesCurrency(List<String> Countries){
        BrowserUtils.waitForVisibility(countries,5);
        List<WebElement> elements = Driver.get().findElements(By.xpath("//select[@id='pc_currency']//option"));
        List<WebElement> list = new ArrayList<>(elements);
        List<String> originalList = BrowserUtils.getOriginalStringList(list);

        return originalList.containsAll(Countries);
    }

    public void CalculateWithoutSelectingCurrency(){
        BrowserUtils.waitForClickablity(CalculateCostButton,5);
        CalculateCostButton.click();
    }

    public boolean ErrorMessageDisplayed(){
      String message = Driver.get().switchTo().alert().getText();
      return !message.isEmpty();
    }

    public void CalculateCostWithoutEnteringValue(){
        BrowserUtils.waitForVisibility(selectDropDown,5);
       Select select = new Select(selectDropDown);
       select.selectByValue("CAD");
       BrowserUtils.waitForClickablity(CalculateCostButton,5);
       CalculateCostButton.click();
    }
}
