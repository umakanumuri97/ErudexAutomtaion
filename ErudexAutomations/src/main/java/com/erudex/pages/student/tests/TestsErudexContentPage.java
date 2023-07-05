package com.erudex.pages.student.tests;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.erudex.pages.ErudexPage;
import com.erudex.utils.WebElementUtils;

public class TestsErudexContentPage extends ErudexPage {
	
	private static final Logger logger = LogManager.getLogger(TestsErudexContentPage.class);
	
	@FindBy(xpath = "//li[contains(@ng-class, 'active')]//a[contains(@ng-click, 'setTab(1)')]")
	private WebElement availableTab;
	
	@FindBy(xpath = "//li[contains(@ng-class, 'active')]//a[contains(@ng-click, 'setTab(2)')]")
	private WebElement completedTab;
	
	@FindBy(xpath = "//li[contains(@ng-class, 'active')]//a[contains(@ng-click, 'setTab(3)')]")
	private WebElement expiredTab;
	
	public TestsErudexContentPage(WebDriver driver) {
		super(driver);		
	}
	
	public void clickAvailableTab() {
		WebElementUtils.jsClick(availableTab,driver);			
	}
	
	public void clickCompletedTab() {
		WebElementUtils.jsClick(completedTab,driver);				
	}
	
	public void clickExpiredTab() {
		WebElementUtils.jsClick(expiredTab,driver);	
	}
	
	
	
}
