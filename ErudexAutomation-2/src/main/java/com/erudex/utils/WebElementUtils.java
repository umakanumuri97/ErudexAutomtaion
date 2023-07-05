package com.erudex.utils;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Utility methods for interacting with WebElements.
 */
public class WebElementUtils {

    /**
     * Checks if the given WebElement is stale.
     *
     * @param element the WebElement to check
     * @return true if the WebElement is stale, false otherwise
     */
    public static boolean isElementStale(WebElement element) {
        try {
            element.isDisplayed();
            return false;
        } catch (StaleElementReferenceException e) {
            return true;
        }
    }

    /**
     * Checks if the given WebElement is visible.
     *
     * @param element the WebElement to check
     * @return true if the WebElement is visible, false otherwise
     */
    public boolean isElementVisible(WebElement element) {
        return element.isDisplayed();
    }

    /**
     * Checks if the given WebElement is enabled.
     *
     * @param element the WebElement to check
     * @return true if the WebElement is enabled, false otherwise
     */
    public boolean isElementEnabled(WebElement element) {
        return element.isEnabled();
    }

    /**
     * Checks if the given WebElement is selected.
     *
     * @param element the WebElement to check
     * @return true if the WebElement is selected, false otherwise
     */
    public static boolean isElementSelected(WebElement element) {
        return element.isSelected();
    }

    /**
     * Retrieves the text of the given WebElement.
     *
     * @param element the WebElement to get text from
     * @return the text of the WebElement
     */
    public static String getElementText(WebElement element) {
        return element.getText();
    }

    /**
     * Retrieves the value of the input element.
     *
     * @param element the input WebElement
     * @return the value of the input element
     */
    public static String getInputValue(WebElement element) {
        return element.getAttribute("value");
    }

    /**
     * Clears the input element.
     *
     * @param element the input WebElement to clear
     */
    public static void clearInputElement(WebElement element) {
        element.clear();
    }

    /**
     * Submits the form containing the given WebElement.
     *
     * @param element the WebElement inside the form
     */
    public static void submitForm(WebElement element) {
        element.submit();
    }

    /**
     * Scrolls the page to the given WebElement.
     *
     * @param element the WebElement to scroll to
     * @param driver  the WebDriver instance
     */
    public static void scrollToElement(WebElement element, WebDriver driver) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    /**
     * Selects the given WebElement if it is not already selected.
     *
     * @param element the WebElement to select
     */
    public static void selectElement(WebElement element) {
        if (!element.isSelected()) {
            element.click();
        }
    }
    
    // Use this method , when element.click is not working
    public static void jsClick(WebElement elem,WebDriver driver) {    	
    	JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", elem);
		
		SessionUtils.waitFor(3000);
    }
}

