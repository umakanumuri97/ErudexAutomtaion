package com.erudex.selenium.pages.login;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ErudexLoginTest {
    private static WebDriver driver;

    public static void main(String[] args) {
        // Set the path to the chromedriver executable
        System.setProperty("webdriver.chrome.driver", "/Users/kanumuriuma/Downloads/chromedriver_mac_arm64/chromedriver");

        // Create a new instance of the Chrome driver
        ChromeDriver driver = new ChromeDriver();

        // Launch the Erudex login page
        driver.get("https://app.erudex.com/");
        LoginPage loginPage = new LoginPage(driver);
        boolean isPageLoaded = loginPage.verifyPageLoaded();
        
        
        loginPage.fill();
        loginPage.waitForLoginButtonClickable();
        loginPage.submit();
        boolean isAlreadyLoggedIn = loginPage.checkAlreadyLoggedin();
        if (isAlreadyLoggedIn) {
            System.out.println("User is already logged in elsewhere. Handling the popup...");
            // Handle the popup here
        } 
       
        boolean isPageUrlCorrect = loginPage.verifyPageUrl();

        if (isPageLoaded && isPageUrlCorrect) {
            System.out.println("Login successful");
            DashboardPage dashboardPage = new DashboardPage(driver);
            if (dashboardPage.isDashboardPage(driver)) {
                System.out.println("Dashboard page is displayed");

                // Get the dashboard title
                String dashboardTitle = dashboardPage.toString();
                System.out.println("Dashboard title: " + dashboardTitle);
            } else {
                System.out.println("Dashboard page is not displayed");
            }
        } else {
            System.out.println("Login failed");
        }
        try {
			Thread.sleep(30000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        driver.quit();
    }
}
