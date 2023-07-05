package com.erudex.selenium.pages.student;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class StudentDashboardPage {
    private WebDriver driver;
    private By welcomeMessage = By.xpath("//h1[contains(text(),'Welcome, Student!')]");
    private By logoutButton = By.id("logoutButton");

    public StudentDashboardPage(WebDriver driver) {
        this.driver = driver;
    }

    public String getWelcomeMessage() {
        return driver.findElement(welcomeMessage).getText();
    }

    public void logout() {
        driver.findElement(logoutButton).click();
    }

    public boolean isStudentDashboardPage() {
        return driver.findElement(welcomeMessage).isDisplayed() &&
               driver.findElement(logoutButton).isDisplayed();
    }
}
