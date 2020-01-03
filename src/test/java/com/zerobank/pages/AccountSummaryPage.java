package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class AccountSummaryPage extends BasePage{

    @FindBy(xpath = "//div[@class='offset2 span8']//h2")
    public List<WebElement> DropdownOptions;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div/div[2]/div/div/div[3]/div/table/thead/tr/th")
    public List<WebElement> ColumnNames;


    public void GetColumnNames(){
        BrowserUtils.GetListOfString(ColumnNames);
    }

}
