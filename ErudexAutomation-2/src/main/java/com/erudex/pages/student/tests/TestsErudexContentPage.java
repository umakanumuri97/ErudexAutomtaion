package com.erudex.pages.student.tests;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
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

	// Define your page elements using @FindBy annotations
	@FindBy(css = ".assignment-card")
	private List<WebElement> testCards;

	public TestsErudexContentPage(WebDriver driver) {
		super(driver);
	}

	public void clickAvailableTab() {
		WebElementUtils.jsClick(availableTab, driver);
	}

	public void clickCompletedTab() {
		WebElementUtils.jsClick(completedTab, driver);
	}

	public void clickExpiredTab() {
		WebElementUtils.jsClick(expiredTab, driver);
	}

	// Test Cards

	// Define methods to interact with the page elements
	public int getNumberOfTests() {
		return testCards.size();
	}

	public WebElement getTestCardByIndex(int index) {
		return testCards.get(index);
	}

	public String getDateTimeRowText(WebElement testCard) {
		return testCard.findElement(By.className("date-time-row")).getText();
	}

	public String getNameRowText(WebElement testCard) {
		return testCard.findElement(By.className("name-row")).getText();
	}

	public String getTimeRemainingText(WebElement testCard) {
		return testCard.findElement(By.cssSelector("span[time-remaining]")).getText();
	}

	public void testCards() {
		int numTests = getNumberOfTests();

		logger.info(numTests);

		for (int i = 0; i < numTests; i++) {
			WebElement testCard = this.getTestCardByIndex(i);
			
			
			String dateTimeRowText = this.getDateTimeRowText(testCard);
			String nameRowText = this.getNameRowText(testCard);
			String timeRemainingText = this.getTimeRemainingText(testCard);

			String fullText = "Test " + (i + 1) + ": " + "DateTime Row: " + dateTimeRowText + ", " + "Name Row: "
					+ nameRowText + ", " + "Time Remaining: " + timeRemainingText;

			logger.info(fullText);
			
			// Find and click the "Time To Submit" button within the test card
	        WebElement timeToSubmitButton = testCard.findElement(By.xpath(".//div[contains(text(), 'Time To Submit')]"));
	        timeToSubmitButton.click();
		}

	}

}
