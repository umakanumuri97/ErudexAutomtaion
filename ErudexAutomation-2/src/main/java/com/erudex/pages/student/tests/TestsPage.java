package com.erudex.pages.student.tests;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.student.LeftBarPage;
import com.erudex.pages.student.TopNavigationBarPage;

public class TestsPage extends ErudexPage {
	private static final Logger logger = LogManager.getLogger(TestsPage.class);
		
	TestsTopBannerPage topBanner;
	TestsErudexContentPage erudexContent;
	

	public TestsPage(WebDriver driver) {
		super(driver);				
		topBanner = new TestsTopBannerPage(driver);
		erudexContent = new TestsErudexContentPage(driver);
	}
	
	// Method to select the subject radio button
    public void selectSubjectRadio() {
    	topBanner.selectSubjectRadio();
    }

    // Method to select the mock radio button
    public void selectMockRadio() {
      topBanner.selectMockRadio();
    }
    
    //Mock Tests
    
	// Select Mock Test Type - Full Test
	public void selectMockTestTypeFullTest() {		
		topBanner.selectMockTestTypeFullTest();	
	}
	
	// Select Mock Test Type - Partial Test
	public void selectMockTestTypePartialTest() {
		topBanner.selectMockTestTypePartialTest();
	}
	
	// Select Mock Test Type - Grand Test
	public void selectMockTestTypeGrandTest() {
		topBanner.selectMockTestTypeGrandTest();
	}
	
	// Interact with Tabs in the Test Content Page
	
	public void clickAvailableTab() {
		erudexContent.clickAvailableTab();		
	}
	
	public void clickCompletedTab() {
		erudexContent.clickCompletedTab();		
	}
	
	public void clickExpiredTab() {
		erudexContent.clickCompletedTab();		
	}
	
	//TODO remove 
	public void testCards() {
		erudexContent.testCards();
	}
}
	
