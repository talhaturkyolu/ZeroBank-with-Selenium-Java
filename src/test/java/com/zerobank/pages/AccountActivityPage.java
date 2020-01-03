package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivityPage extends BasePage{

    @FindBy(id = "aa_accountId")
    public WebElement SelectOption;

    @FindBy(xpath = "//select[@id='aa_accountId']//option[@value='1']")
    public WebElement SavingsOption;

    @FindBy(xpath = "//select[@id='aa_accountId']//option")
    public List<WebElement> AllOptions;

    @FindBy (xpath = "//*[@id='all_transactions_for_account']/table/thead/tr/th")
    public List<WebElement> AllColumnNames;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/table/tbody/tr[1]/td[1]/a")
    public WebElement SavingsLink;

    @FindBy(xpath = "//a[contains(text(),'Brokerage')]")
    public WebElement BrokerageLinkOnAccountSummaryPage;

    @FindBy(id = "aa_accountId")
    public WebElement AccountDropDown;

    @FindBy(css = "option[value='6']")
    public WebElement BrokerageOption;

    @FindBy(xpath = "//a[contains(text(),'Checking')]")
    public WebElement CheckingLinkOnAccountSummaryPage;

    @FindBy(css = "option[value='2']")
    public WebElement CheckingOption;

    @FindBy(xpath = "//a[contains(text(),'Credit Card')]")
    public WebElement CreditCard;

    @FindBy(css = "option[value='5']")
    public WebElement CreditCardOption;

    @FindBy(xpath = "//a[contains(text(),'Loan')]")
    public WebElement LoanLinkOnAccountSummaryPage;

    @FindBy(xpath = "//option[contains(text(),'Loan')]")
    public WebElement LoanOption;


    public void ClickSavingsLink(){
        SavingsLink.click();
    }
    public boolean DefaultOptionIsSaving(){
        BrowserUtils.waitForVisibility(SelectOption,5);
        return SavingsOption.isSelected();
    }

    public void ClickBrokerageLink(){
        BrowserUtils.waitForClickablity(BrokerageLinkOnAccountSummaryPage,5);
        BrokerageLinkOnAccountSummaryPage.click();
    }
    public boolean BrokerageOptionSelectedByDefault(){
        BrowserUtils.waitForClickablity(AccountDropDown,5);
        Select select = new Select(AccountDropDown);
        BrowserUtils.waitForVisibility(BrokerageOption,5);
        return BrokerageOption.isSelected();
    }

    public void ClickTheCheckingLinkOnAccountSummaryPage(){
        BrowserUtils.waitForClickablity(CheckingLinkOnAccountSummaryPage,5);
        CheckingLinkOnAccountSummaryPage.click();
    }

    public boolean CheckingOptionSelectedByDefault(){
    BrowserUtils.waitForClickablity(AccountDropDown,5);
    BrowserUtils.waitForVisibility(CheckingOption,5);
    return CheckingOption.isSelected();
    }

    public void ClickCreditCardOnAccountSummaryPage(){
        BrowserUtils.waitForClickablity(CreditCard,5);
        CreditCard.click();
    }

    public boolean CreditCardOptionSelectedByDefault(){
        BrowserUtils.waitForClickablity(AccountDropDown,5);
        BrowserUtils.waitForVisibility(CreditCardOption,5);
        return CreditCardOption.isSelected();
    }

    public void ClickLoanLinkOnAcoountSummaryPage(){
        BrowserUtils.waitForClickablity(LoanLinkOnAccountSummaryPage,5);
        LoanLinkOnAccountSummaryPage.click();
    }

    public boolean LoanOptionSelectedByDefault(){
        BrowserUtils.waitForClickablity(AccountDropDown,5);
        BrowserUtils.waitForVisibility(LoanOption,5);
        return LoanOption.isSelected();
    }
}
