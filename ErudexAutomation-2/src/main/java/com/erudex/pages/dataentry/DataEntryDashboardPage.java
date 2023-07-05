package com.erudex.pages.dataentry;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.erudex.pages.ErudexPage;


public class DataEntryDashboardPage extends ErudexPage{
private static final Logger logger = LogManager.getLogger(DataEntryDashboardPage.class);
	
	public DataEntryDashboardPage(WebDriver driver) {		
		super(driver);
	}

}
