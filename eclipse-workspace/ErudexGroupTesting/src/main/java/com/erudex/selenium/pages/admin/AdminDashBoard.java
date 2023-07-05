package com.erudex.selenium.pages.admin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminDashBoard {
	private ChromeDriver studentDashBoarddriver;

	String pageUrl = "https://app.erudex.com/admin/index.html#/";

	@FindBy(className = "top-bar-user-name")
	private WebElement usernameElement;

	public AdminDashBoard(ChromeDriver driver) {		
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

	private boolean isDashBoardPage() {
		boolean success = false;

		try {
			Thread.sleep(6000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String title = studentDashBoarddriver.getTitle();
		System.out.println("Title of the page is: " + title);

		if (title == "Erudex App") {
			success = true;
		}

		return success;
	}

}
