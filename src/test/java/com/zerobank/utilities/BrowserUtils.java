package com.zerobank.utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BrowserUtils {

    public static void ClickSignInButton(){
        WebElement element = Driver.get().findElement(By.id("signin_button"));
        element.click();
    }

    public static void wait(int seconds){
        try{
            Thread.sleep(1000*seconds);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public static WebElement waitForVisibility(WebElement element,int TimeToWaitInSec){
        WebDriverWait wait = new WebDriverWait(Driver.get(),10);
        return wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static WebElement waitForClickablity(WebElement element,int TimeToWaitInSec){
        WebDriverWait wait = new WebDriverWait(Driver.get(),10);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void WaitForPageTitle(String pageTitle){
        WebDriverWait wait = new WebDriverWait(Driver.get(),10);
        wait.until(ExpectedConditions.titleIs(pageTitle));
    }

    public static String GetListOfString(List<WebElement> ListOfWebElements){
        List<String> elements = new ArrayList<>();
        for(WebElement each : ListOfWebElements){
           String value = each.getText().trim();
           if(value.length()>0){
               elements.add(value);
           }
        }
        String listString ="";
        for(String each : elements){
            listString += each+",";
        }
        return listString;
    }

    public static List<String> getStringList(List<WebElement>webElements){
        List<String>string = new ArrayList<>();
        for(WebElement each:webElements){
            string.add(each.getText().trim());
        }
        return string;
    }

    public static List<String> getOriginalStringList(List<WebElement> webElement) {
        List<WebElement>list= new ArrayList<>(webElement);
        return getStringList(list);
    }

    public static List<String> getDescendingSortedStringList(List<WebElement> webElement) {
        List<String>list= getStringList(webElement);
        Collections.sort(list,Collections.reverseOrder());
        return  list;
    }



}
