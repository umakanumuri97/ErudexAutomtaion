package com.indus.training.selenium.basics;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Locators3 {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "/Users/kanumuriuma/Downloads/chromedriver_mac_arm64/chromedriver");

		WebDriver driver=new ChromeDriver();
		driver.get("https://rahulshettyacademy.com/locatorspractice/");
		System.out.println(driver.findElement(By.xpath("//header/div/button[1]/following-sibling::button[1]")).getText());
		
		
	}

}
