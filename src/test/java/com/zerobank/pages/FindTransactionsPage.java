package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class FindTransactionsPage extends BasePage{

    LoginPage loginPage = new LoginPage();

    @FindBy(xpath = "//*[@id='account_activity_tab']/a")
    public WebElement AccountActivityPageLink;

    @FindBy(css = "#tabs > ul > li:nth-child(2)")
    public WebElement FindTransactionLink;

    @FindBy(xpath = "//h2[contains(text(),'Find Transactions')]")
    public WebElement FindTransactionText;

    @FindBy(id = "aa_fromDate")
    public WebElement Date1InputBox;

    @FindBy(id = "aa_toDate")
    public WebElement ToDate2InputBox;

    @FindBy(css = "button[type='submit']")
    public WebElement SearchButton;

    @FindBy(xpath = "//*[@id='filtered_transactions_for_account']/table/tbody/tr")
    public List<WebElement> DateColumnOnTheTable;

    @FindBy(id = "aa_description")
    public WebElement DescriptionInput;

    @FindBy(xpath = "//*[@id='filtered_transactions_for_account']/table/tbody/tr/td[2]")
    public List<WebElement> ResultTableShowDescription;

    @FindBy(css = "#filtered_transactions_for_account > table > tbody >tr> td:nth-child(3)")
    public List<WebElement> Depositcolumn;

    @FindBy(css = "#filtered_transactions_for_account > table > tbody > tr > td:nth-child(4)")
    public List<WebElement> WithdrawalColumn;

    @FindBy(id = "aa_type")
    public WebElement TypeSelection;


    public void ClickAccountActivityPage(){
      loginPage.navigateTo("Account Activity");
    }

    public void ClickFindTransactionLink(){
        BrowserUtils.wait(1);
        Actions actions = new Actions(Driver.get());
        actions.moveToElement(Driver.get().findElement(By.cssSelector("#tabs > ul > li:nth-child(2)"))).click().perform();
    }


    public void UserEntersDate(String Date1, String ToDate2){
        BrowserUtils.waitForVisibility(Date1InputBox,5);
        Date1InputBox.clear();
        Date1InputBox.sendKeys(Date1);
        BrowserUtils.waitForVisibility(ToDate2InputBox,5);
        ToDate2InputBox.clear();
        ToDate2InputBox.sendKeys(ToDate2);
    }

    public void ClickSearch(){
    BrowserUtils.waitForClickablity(SearchButton,5);
    SearchButton.click();
    }

    public List<WebElement> getAllDates(){
        List<WebElement>AllDates= Driver.get().findElements(By.xpath("//*[@id='filtered_transactions_for_account']/table/tbody/tr/td[1]"));
        List<WebElement>list = new ArrayList<>(AllDates);
        return list;

    }

    public String BeginningDay(){

        int number = Driver.get().findElements(By.xpath("//*[@id='filtered_transactions_for_account']/table/tbody/tr")).size();
        System.out.println(number);
        String locator = "//*[@id='filtered_transactions_for_account']/table/tbody/tr["+number+"]/td[1]";
        WebElement BeginningDate = Driver.get().findElement(By.xpath(locator));
        BrowserUtils.waitForVisibility(BeginningDate,5);
        return BeginningDate.getText();
    }

    public String EndingDay(){
        String endingDay = "//*[@id='filtered_transactions_for_account']/table/tbody/tr[1]/td[1]";
       return Driver.get().findElement(By.xpath(endingDay)).getText();
    }


    public boolean ResultTableOnlyContainInput(String input){
        input = input.toUpperCase();
        BrowserUtils.wait(1);
       int DescriptionLineNumber = ResultTableShowDescription.size();
       int InputNumber=0;
        List<String> allelements = new ArrayList<>();
        for (int i =0 ; i<ResultTableShowDescription.size(); i++){
        allelements.add(ResultTableShowDescription.get(i).getText());
        if(allelements.contains(input.toUpperCase())){
            InputNumber++;
        }
   }
      return InputNumber == DescriptionLineNumber;
    }

    public boolean ShowAtLeastOneResultUnderDeposit(){
        BrowserUtils.wait(1);
        List<String> list = new ArrayList<>();
        for(int i=0; i<Depositcolumn.size(); i++){
            list.add(Depositcolumn.get(i).getText());
        }
        return !list.isEmpty();
    }

    public boolean ShowAtLeastOneResultUnderWithdrawal(){
        BrowserUtils.wait(1);
        List<String> list = new ArrayList<>();
        for(int i=0; i<WithdrawalColumn.size(); i++){
            list.add(WithdrawalColumn.get(i).getText());
        }
        return !list.isEmpty();
    }

    public void SelectType(String input){
        input = input.toUpperCase();
        BrowserUtils.waitForClickablity(TypeSelection,5);
        Select select = new Select(TypeSelection);
        select.selectByValue(input);
    }



}
