package com.erudex.pages.admin;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.erudex.pages.ErudexPage;


public class AdminDashboardPage extends ErudexPage {
private static final Logger logger = LogManager.getLogger(AdminDashboardPage.class);
	
	public AdminDashboardPage(WebDriver driver) {		
		super(driver);
	}


}
