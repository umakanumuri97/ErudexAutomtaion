package com.erudex.selenium.pages.teacher;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class TeacherDashboardPage {
    private WebDriver driver;
    private By welcomeMessage = By.xpath("//h1[contains(text(),'Welcome, Teacher!')]");
    private By logoutButton = By.id("logoutButton");

    public TeacherDashboardPage(WebDriver driver) {
        this.driver = driver;
    }

    public String getWelcomeMessage() {
        return driver.findElement(welcomeMessage).getText();
    }

    public void logout() {
        driver.findElement(logoutButton).click();
    }

    public boolean isTeacherDashboardPage() {
        return driver.findElement(welcomeMessage).isDisplayed() &&
               driver.findElement(logoutButton).isDisplayed();
    }
}
