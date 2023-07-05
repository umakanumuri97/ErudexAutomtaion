package com.erudex.selenium.pages.common;

import java.util.Scanner;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PopUpPage {
	private ChromeDriver driver;

//	@FindBy(css = ".ng-binding")
//	private WebElement messageElement;

	@FindBy(xpath = "//p[@ng-bind-html='message' and contains(@class, 'ng-binding')]")
	private WebElement messageElement;

	@FindBy(css = "div.button.alert.radius[ng-click='negativeResponse()']")
	private WebElement noButton;

	@FindBy(css = "div.button.success.radius[ng-click='positiveResponse()']")
	private WebElement yesButton;

	private String pageLoadedText = "You are already logged in elsewhere. Do you want to login here instead? (Other session will be logged out)";

	private int timeout = 10;

	private String pageUrl = "https://app.erudex.com/login";

	public PopUpPage(ChromeDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	private boolean isClickedNo = false;

	public boolean clickNoButton() {

		boolean isButtonClicked = false;
		try {
			if (!isClickedNo) {

				WebDriverWait wait = new WebDriverWait(driver, timeout);
				WebElement noButtonElement = wait.until(ExpectedConditions.elementToBeClickable(
						By.cssSelector("div.button.alert.radius[ng-click='negativeResponse()']")));
				noButtonElement.click();
				isClickedNo = true;

				isButtonClicked = true;
			} else {
				System.out.println("No button has already been clicked.");
			}
		} catch (NoSuchElementException e) {
			System.out.println("No button is no longer present.");
		} 
		return isButtonClicked;
	}

	private static boolean isClicked = false;

	public boolean clickYesButton() {

		try {
			if (!isClickedNo && !isClicked) {

				WebDriverWait wait = new WebDriverWait(driver, timeout);
				WebElement yesButtonElement = wait.until(ExpectedConditions.elementToBeClickable(yesButton));
				yesButtonElement.click();

				isClicked = true;

				boolean isButtonClicked = isElementClicked(yesButtonElement);

				return isButtonClicked;
			} else {
				System.out.println("Yes button has already been clicked.");
				return false;
			}
		} catch (NoSuchElementException e) {
			// Button element is no longer present on the page
			System.out.println("Yes button is no longer present.");
			return false;
		}
	}

	public boolean isElementClicked(WebElement element) {
		try {
			// Check if the element is still clickable after the click operation
			return element.isEnabled();
		} catch (Exception e) {
			return false;
		}
	}

	public boolean checkAlreadyLoggedIn() {
		boolean present = false;
		try {
			String expectedMessage = "You are already logged in elsewhere. Do you want to login here instead? (Other session will be logged out)";
			WebDriverWait wait = new WebDriverWait(driver, timeout);
			WebElement paragraph = wait.until(ExpectedConditions.visibilityOf(messageElement));

			String messageText = messageElement.getText();

			String paragraphText = paragraph.getText();

			if (paragraphText.contains("login")) {
				present = true;
			}
		} catch (NoSuchElementException e) {
			System.out.println("Message not found.");
		}

		return present;
	}

	public boolean handlePopup() throws InterruptedException {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Popup detected. Do you want to proceed? (Yes/No)");
		String abortAlreadyLoggedIn = scanner.nextLine().toLowerCase();
		scanner.close();

		if (abortAlreadyLoggedIn.equals("yes")) {
			clickYesButton();
			Thread.sleep(3000);
			return true;
		} else if (abortAlreadyLoggedIn.equals("no")) {
			clickNoButton();
			return false;
		} else {
			System.out.println("Invalid input. Please try again.");
			return false;
		}
	}

}
