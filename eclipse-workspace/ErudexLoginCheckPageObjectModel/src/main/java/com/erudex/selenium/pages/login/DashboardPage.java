package com.erudex.selenium.pages.login;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class DashboardPage {
    private WebDriver driver;

    public DashboardPage(WebDriver driver) {
        this.driver = driver;
    }

    
    private boolean isDashBoardPage() {
        boolean success = false;

        // Get the title of the webpage and print it
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String title = driver.getTitle();
        System.out.println("Title of the page is: " + title);

        if (title.equals("Erudex Data Entry")) {
            success = true;
        }

        return success;
    }

    

	public boolean isDashboardPage(ChromeDriver driver2) {
		boolean success = false;

        // Get the title of the webpage and print it
        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String title = driver.getTitle();
        System.out.println("Title of the page is: " + title);

        if (title.equals("Erudex Data Entry")) {
            success = true;
        }

        return success;
		// TODO Auto-generated method stub
		
	}
    
}
