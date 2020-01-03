package com.zerobank.pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {




    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    public void navigateTo(String moduleName){
        WebElement ModuleLocator = Driver.get().findElement(By.xpath("//ul[@class='nav nav-tabs']//li//a[contains(text(),'"+moduleName+"')]"));
        WebDriverWait wait = new WebDriverWait(Driver.get(),10);
        wait.until(ExpectedConditions.elementToBeClickable(ModuleLocator));
        ModuleLocator.click();
    }

}
