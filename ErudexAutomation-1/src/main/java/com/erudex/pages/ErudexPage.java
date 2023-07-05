package com.erudex.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ErudexPage {
	
	 protected WebDriver driver;
	
	 public ErudexPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);		
	}

	/**
     * Get the title of the page.
     *
     * @return the title of the page as a string
     */
    public String getPageTitle() {
        return driver.getTitle();
    }
    
    /**
     * Get the URL of the page.
     *
     * @return the URL of the page as a string
     */
    public String getPageUrl() {
        return driver.getCurrentUrl();
    }

}
