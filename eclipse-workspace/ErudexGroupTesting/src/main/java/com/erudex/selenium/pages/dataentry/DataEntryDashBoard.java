package com.erudex.selenium.pages.dataentry;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DataEntryDashBoard {
	private ChromeDriver studentDashBoarddriver;

	String pageUrl = "https://app.erudex.com/data-entry/index.html#/";

	@FindBy(className = "top-bar-user-name")
	private WebElement usernameElement;

	public DataEntryDashBoard(ChromeDriver driver) {
		this.studentDashBoarddriver = driver;
		PageFactory.initElements(driver, this);
	}

	public String getUserNameElement() {
		return usernameElement.getText();

	}

	public boolean verifyPageLoaded() {
		return studentDashBoarddriver.getTitle().contains("Login");
	}

	public boolean verifyPageUrl() {
		return studentDashBoarddriver.getCurrentUrl().contains(pageUrl);
	}

}
