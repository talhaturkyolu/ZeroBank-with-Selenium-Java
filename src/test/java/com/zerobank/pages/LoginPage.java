package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginPage extends BasePage{

    WebDriverWait wait = new WebDriverWait(Driver.get(),10);

    @FindBy(id = "user_login")
    public WebElement usernameInput;

    @FindBy(id = "user_password")
    public WebElement passwordInput;

    @FindBy(id = "signin_button")
    public WebElement SignInButton;

    @FindBy(css = "div[class='alert alert-error']")
    public WebElement WarningMessage;

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    public void login(){
        String username = ConfigurationReader.getProperty("user_name");
        String password = ConfigurationReader.getProperty("password");
        wait.until(ExpectedConditions.visibilityOf(SignInButton));
        wait.until(ExpectedConditions.elementToBeClickable(SignInButton));
        SignInButton.click();
        wait.until(ExpectedConditions.visibilityOf(usernameInput));
        usernameInput.clear();
        usernameInput.sendKeys(username);
        wait.until(ExpectedConditions.visibilityOf(passwordInput));
        passwordInput.clear();
        passwordInput.sendKeys(password,Keys.ENTER);
    }

    public void login(String username, String password){
        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password,Keys.ENTER);

    }

    public void thisIsForTest(){
        // Almaz please accept it man
    }

    public String GetTextOfAlertMessage(){
        BrowserUtils.waitForVisibility(WarningMessage,5);
        return WarningMessage.getText();
    }


}
