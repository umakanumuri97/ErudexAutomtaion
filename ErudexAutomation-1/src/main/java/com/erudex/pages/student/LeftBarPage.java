package com.erudex.pages.student;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.erudex.pages.ErudexPage;
import com.erudex.utils.WebElementUtils;





public class LeftBarPage extends ErudexPage {
	private static final Logger logger = LogManager.getLogger(LeftBarPage.class);
	
	@FindBy(xpath = "//li[contains(@class, 'curriculum') and contains(@class, 'ng-hide') and contains(@ui-sref, 'v2-dashboard') and @ng-show='isDataEntry']")
	private WebElement homeMenuItem;

	
	@FindBy(xpath = "//li[contains(@class, 'curriculum') and contains(@class, 'ng-hide') and contains(@ui-sref, 'v2-liveClasses')]")
	private WebElement liveClassesMenuItem;

	
	@FindBy(xpath = "//li[contains(@class, 'curriculum') and contains(@class, 'ng-hide') and contains(@ui-sref, 'v2-curriculum')]")
	private WebElement teacherLessonsMenuItem;
	
	@FindBy(xpath = "//li[contains(@class, 'curriculum') and contains(@ui-sref, 'v2-curriculum')]")
	private WebElement studentLessonsMenuItem;
	
	 	
	@FindBy(css = "li[ui-sref='v2-t-tests'][href='#/view-t-tests']")
	private WebElement teacherTestsMenuItem;



	
	@FindBy(css = "li[ui-sref='v2-tests'][ng-hide='disableModule.assessment || !isDataEntry']")
	private WebElement dataEntryTestsMenuItem;




	
	@FindBy(css = "li[ui-sref='v2-s-tests'][href='#/view-s-tests']")
	private WebElement studentTestsMenuItem;


	
	@FindBy(xpath = "//li[contains(@class, 'reports') and contains(@class, 'has-dropdown') and contains(@class, 'ng-hide') and contains(@ui-sref, 'v2-questions') and @ng-hide='disableModule.assessment || !isDataEntry']")
	private WebElement questionsMenuItem;

	@FindBy(xpath = "//li[contains(@class, 'reports') and contains(@class, 'has-dropdown') and contains(@class, 'ng-hide') and contains(@ui-sref, 'v2-t-assignments') and @ng-hide='disableModule.assignment || isDataEntry || !isTeacher || isMobile']")
	private WebElement teacherAssignmentsMenuItem;

	@FindBy(xpath = "//li[contains(@class, 'reports') and contains(@class, 'has-dropdown') and not(contains(@class, 'ng-hide')) and contains(@ui-sref, 'v2-s-assignments') and @ng-hide='disableModule.assignment || isDataEntry || isTeacher || isMobile']")
	private WebElement studentAssignmentsMenuItem;


	@FindBy(xpath = "//li[contains(@ui-sref, 'performanceReports') and contains(@class, 'ng-hide') and not(contains(@class, 'isTeacher'))]")
	private WebElement studentReportsMenuItem;
	
	@FindBy(xpath = "//li[contains(@ui-sref, 'teacherReports') and contains(@class, 'ng-hide') and contains(@class, 'isTeacher')]")
	private WebElement teacherReportsMenuItem;

	@FindBy(xpath = "//li[contains(@ui-sref, 'v2-s-timeline') and contains(@class, 'ng-scope') and not(contains(@class, 'isTeacher'))]")
	private WebElement studentTimelineMenuItem;

	@FindBy(xpath = "//li[contains(@ui-sref, 'v2-t-timeline') and contains(@class, 'ng-scope') and contains(@class, 'isTeacher')]")
	private WebElement teacherTimelineMenuItem;



	public LeftBarPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	 // Click on Lessons Icon
    public void clickLessons() 
    {    	
    	WebElementUtils.scrollToElement(studentLessonsMenuItem,driver);
    	JavascriptExecutor executor = (JavascriptExecutor) driver;
    	executor.executeScript("arguments[0].click();", studentLessonsMenuItem);

    }

    // Click on Tests Icon
    public void clickTests() {
    	WebElementUtils.scrollToElement(teacherLessonsMenuItem,driver);
    	JavascriptExecutor executor = (JavascriptExecutor) driver;
    	executor.executeScript("arguments[0].click();", studentTestsMenuItem);

       // testsIcon.click();
    }

    // Click on Reports Icon
    public void clickReports() {
    	studentReportsMenuItem.click();
    }
    
 // Get the currently selected menu item
    public StudentLeftBarMenuItem getSelectedMenuItem() {
        if (studentLessonsMenuItem.isSelected()) {
            return StudentLeftBarMenuItem.Lessons;
        } else if (studentTestsMenuItem.isSelected()) {
            return StudentLeftBarMenuItem.Tests;
        } 
        return null;
    }
    
 // Get the text of the currently selected menu item
    public String getCurrentMenuItemText() {
    	
    	String menuItemText = "";
    	
    	StudentLeftBarMenuItem menuItem = getSelectedMenuItem();
    	
    	if (menuItem == StudentLeftBarMenuItem.Lessons) {
    		menuItemText = studentLessonsMenuItem.getText(); 
    	}
    	else if (menuItem == StudentLeftBarMenuItem.Tests) {
    		menuItemText = studentTestsMenuItem.getText(); 
    	}      
       
        return menuItemText;
    }
}
