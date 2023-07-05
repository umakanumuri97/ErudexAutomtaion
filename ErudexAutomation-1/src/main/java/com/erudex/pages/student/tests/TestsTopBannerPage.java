package com.erudex.pages.student.tests;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import com.erudex.pages.ErudexPage;
import com.erudex.utils.WebElementUtils;

public class TestsTopBannerPage extends ErudexPage {

	private static final Logger logger = LogManager.getLogger(TestsTopBannerPage.class);

	@FindBy(className = "subject-select-wrapper")
	private WebElement subjectSelectWrapper;

	// Find the tests-toggle element when it is visible
	@FindBy(xpath = "//div[contains(@class, 'tests-toggle') and not(contains(@class, 'ng-hide'))]")
	private WebElement testsToggleVisible;

	// Find the tests-toggle element when it is hidden
	@FindBy(xpath = "//div[contains(@class, 'tests-toggle') and contains(@class, 'ng-hide')]")
	private WebElement testsToggleHidden;

	@FindBy(id = "radio-1")
	private WebElement subjectRadio;

	@FindBy(css = "label[for='radio-1'].toggle-btn")
	private WebElement subjectLabel;

	@FindBy(id = "radio-2")
	private WebElement mockRadio;

	@FindBy(css = "label[for='radio-2'].toggle-btn")
	private WebElement mockLabel;

	// Find the list of li elements using Page Factory annotations
	@FindBy(xpath = "//div[contains(@class, 'subject-wrapper') and contains(@ng-show, 'showMockTests')]//li")
	private List<WebElement> testTypeElements;

	@FindBy(className = "curriculum-language-select")
	private WebElement curriculumLanguageSelect;

	public TestsTopBannerPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	// Method to check if tests-toggle is present and visible
	public boolean isTestsToggleVisible() {
		if (!WebElementUtils.isElementStale(testsToggleVisible)) {
			return testsToggleVisible.isDisplayed();
		}

		return false;
	}

	// Method to check if tests-toggle is present and hidden
	public boolean isTestsToggleHidden() {
		if (!WebElementUtils.isElementStale(testsToggleHidden)) {
			return testsToggleHidden.isDisplayed();
		}

		return false;
	}

	// Method to select the subject radio button
	public void selectSubjectRadio() {
		if (isTestsToggleVisible()) {		
			WebElementUtils.jsClick(subjectRadio,driver);
		}
	}

	// Method to select the mock radio button
	public void selectMockRadio() {
		if (isTestsToggleVisible()) {
			WebElementUtils.jsClick(mockRadio,driver);
		}
	}

	// Mock Test Types

	// Method to interact with each item in the list
	public void interactWithMockTestTypeElements() {
		for (WebElement testTypeElement : testTypeElements) {
			String label = testTypeElement.findElement(By.xpath(".//div")).getText();
			// Perform desired actions based on the label of each item
			System.out.println("Interacting with item: " + label);

			// Example cases:
			if (label.equals("Part Tests")) {
				// Case 1: Perform action for "Part Tests"
				System.out.println("Performing action for Part Tests");
				// Code to interact with "Part Tests" item
				testTypeElement.click();
			} else if (label.equals("Full Tests")) {
				// Case 2: Perform action for "Full Tests"
				System.out.println("Performing action for Full Tests");
				// Code to interact with "Full Tests" item
				testTypeElement.click();
			} else if (label.equals("Grand Tests")) {
				// Case 3: Perform action for "Grand Tests"
				System.out.println("Performing action for Grand Tests");
				// Code to interact with "Grand Tests" item
				testTypeElement.click();
			} else {
				// Default case: Skip the item if it doesn't match any specific case
				System.out.println("Skipping item: " + label);
				continue;
			}

			// Add more cases and actions as needed

			// Wait or perform other actions between iterations if required
		}
	}

	//TODO Refactor
	//TDO  Add checks only Tests Toggle is available
	// Select Mock Test Type - Full Test
	public void selectMockTestTypeFullTest() {

		for (WebElement testTypeElement : testTypeElements) {
			String label = testTypeElement.findElement(By.xpath(".//div")).getText();
			// Perform desired actions based on the label of each item
			logger.debug("Interacting with item: " + label);
			if (label.equals("Full Tests")) {
				logger.debug("Performing action for Full Tests");
				testTypeElement.click();
			}
		}
	}
	
	// Select Mock Test Type - Partial Test
	public void selectMockTestTypePartialTest() {

		for (WebElement testTypeElement : testTypeElements) {
			String label = testTypeElement.findElement(By.xpath(".//div")).getText();
			// Perform desired actions based on the label of each item
			logger.debug("Interacting with item: " + label);

			if (label.equals("Part Tests")) {
				logger.debug("Performing action for Partial Tests");
				testTypeElement.click();
			} 
		}
	}
	
	// Select Mock Test Type - Grand Test
	public void selectMockTestTypeGrandTest() {

		for (WebElement testTypeElement : testTypeElements) {
			String label = testTypeElement.findElement(By.xpath(".//div")).getText();
			// Perform desired actions based on the label of each item
			logger.debug("Interacting with item: " + label);

			if (label.equals("Grand Tests")) {
				logger.debug("Performing action for Grand Tests");
				testTypeElement.click();
			}
		}
	}
	
	
}
