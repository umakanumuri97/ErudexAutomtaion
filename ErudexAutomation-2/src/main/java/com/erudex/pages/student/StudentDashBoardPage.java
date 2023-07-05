package com.erudex.pages.student;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.student.tests.TestsPage;
import com.erudex.utils.Role;
import com.erudex.utils.WebElementUtils;

public class StudentDashBoardPage extends ErudexPage {

	private static final Logger logger = LogManager.getLogger(StudentDashBoardPage.class);

	private Role role;

	private String landingPage;

	TopNavigationBarPage topNavigation;

	LeftBarPage menuBar;

	// TODO Finish Full implementation
	private TestsPage testsPage;

	// TODO implement LessonsPage
	private ErudexPage lessonsPage;

	// TODO implement Reports Page
	private ErudexPage reportsPage;

	List<WebElement> elements = null;

	public StudentDashBoardPage(WebDriver driver) {
		super(driver);

		topNavigation = new TopNavigationBarPage(driver);
		menuBar = new LeftBarPage(driver);
		testsPage = new TestsPage(driver);

	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getLandingPage() {
		return landingPage;
	}

	public void setLandingPage(String landingPage) {
		this.landingPage = landingPage;
	}

	//
	// TOP Navigation Bar
	//

	// Logout
	public void clickLogout() {
		topNavigation.clickLogout();
	}

	//
	// Menu Bar Interaction
	//

	// Click on Lessons Icon
	public void clickLessons() {
		menuBar.clickLessons();

	}

	// Click on Tests Icon
	public void clickTests() {
		menuBar.clickTests();
	}

	// Click on Reports Icon
	public void clickReports() {
		menuBar.clickReports();
	}

	public String getCurrentMenuItem() {
		return menuBar.getCurrentMenuItemText();
	}

	//
	// Top Banner of Tests Page Interaction
	//

	// Method to select the subject radio button
	public void selectSubjectRadio() {
		testsPage.selectSubjectRadio();
	}

	// Method to select the mock radio button
	public void selectMockRadio() {
		testsPage.selectMockRadio();
	}

	// Mock Tests

	// Select Mock Test Type - Full Test
	public void selectMockTestTypeFullTest() {
		testsPage.selectMockTestTypeFullTest();
	}

	// Select Mock Test Type - Partial Test
	public void selectMockTestTypePartialTest() {
		testsPage.selectMockTestTypePartialTest();
	}

	// Select Mock Test Type - Grand Test
	public void selectMockTestTypeGrandTest() {
		testsPage.selectMockTestTypeGrandTest();
	}

	// Interact with Tabs in the Mock Tests Content Tabs
	// Interact with Tabs in the Test Content Page

	public void clickAvailableTab() {
		testsPage.clickAvailableTab();
	}

	public void clickCompletedTab() {
		testsPage.clickCompletedTab();
	}

	public void clickExpiredTab() {
		testsPage.clickCompletedTab();
	}

	// TODO remove
	public void testCards() {
		testsPage.testCards();
	}

}
