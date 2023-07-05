package com.indus.training.selenium.basics;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WindowActivities {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "/Users/kanumuriuma/Downloads/chromedriver_mac_arm64/chromedriver");

		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://google.com");
		driver.navigate().to("https://rahulshettyacademy.com/locatorspractice/");
		driver.navigate().back();
		driver.navigate().forward();
		
		
		
	}

}
