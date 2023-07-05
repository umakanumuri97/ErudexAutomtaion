package com.erudex.pages.student;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.erudex.pages.ErudexPage;
import com.erudex.utils.WebElementUtils;

public class TopNavigationBarPage extends ErudexPage {

	private static final Logger logger = LogManager.getLogger(TopNavigationBarPage.class);

	@FindBy(className = "top-bar-user-name")
	private WebElement userNameElement;

	@FindBy(className = "v2-icon-logout")
	private WebElement logoutIcon;

	public TopNavigationBarPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	// Logout
	public void clickLogout() {
		
		WebElementUtils.scrollToElement(logoutIcon,driver);
    	JavascriptExecutor executor = (JavascriptExecutor) driver;
    	executor.executeScript("arguments[0].click();", logoutIcon);
		//logoutIcon.click();
	}

}
