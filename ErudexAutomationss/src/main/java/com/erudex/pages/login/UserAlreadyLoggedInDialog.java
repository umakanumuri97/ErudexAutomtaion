package com.erudex.pages.login;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.erudex.pages.ErudexPage;

public class UserAlreadyLoggedInDialog extends ErudexPage{
	
	private static final Logger logger = LogManager.getLogger(UserAlreadyLoggedInDialog.class);
	
    private WebDriver driver;

    @FindBy(css = ".login-confirm-modal")
    private WebElement dialogContainer;

    @FindBy(css = ".logo")
    private WebElement logoImage;

    @FindBy(css = "p.ng-binding")
    private WebElement messageText;

    @FindBy(css = ".button.alert.radius")
    private WebElement noButton;

    @FindBy(css = ".button.success.radius")
    private WebElement yesButton;

    public UserAlreadyLoggedInDialog(WebDriver driver) {
        super(driver);        
    }

    public boolean isDisplayed() {
        try {
            return dialogContainer.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public String getLogoImageUrl() {
        return logoImage.getAttribute("src");
    }

    public String getMessageText() {
        return messageText.getText();
    }

    public void clickNoButton() {
        noButton.click();
    }

    public void clickYesButton() {
        yesButton.click();
    }
}
