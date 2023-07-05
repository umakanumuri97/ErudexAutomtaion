package com.indus.training.selenium.basics;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTestInSelenium {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "/Users/kanumuriuma/Downloads/chromedriver_mac_arm64/chromedriver");

		WebDriver driver=new ChromeDriver();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();


		driver.get("https://rahulshettyacademy.com/locatorspractice/");
		driver.findElement(By.id("inputUsername")).sendKeys("umak4511779@gmail.com");
		driver.findElement(By.name("inputPassword")).sendKeys("hello123");
		driver.findElement(By.className("signInBtn")).click();
		//in the below statement u are defining a custom css selector..with tagname.classname
		//the reason we are doing this is to show the error message that does not have id or name
		//we ensure that it is showing the right error message by using selector hub plugin where we 
		//add that to chrome and enter p.error..to check if there are other ones in there...
		System.out.println(driver.findElement(By.cssSelector("p.error")).getText());
		
		//next when i want to do forgor password..it does not have a concrete css apart from #..as it a link with <a>..i select linktext
		//XPATH AND CSS SELECTORS ARE GENERIC ONES WHERE YOU CAN CONSTRUCT ANY HTML ELEMENTS WITH THEM
		driver.findElement(By.linkText("Forgot your password?")).click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.findElement(By.xpath("//input[@placeholder='Name']")).sendKeys("Uma");
		driver.findElement(By.cssSelector("input[placeholder='Email']")).sendKeys("umak4511779@gmail.com");
		//here if the type = text is associated with multiple elements..u are passing the index for xpath type
		driver.findElement(By.xpath("//input[@type='text'][2]")).clear();
		//in css..u do by b=nth-child
		driver.findElement(By.cssSelector("input[type='text']:nth-child(3)")).sendKeys("umak4511779@gmail.com");
		
		driver.findElement(By.xpath("//form/input[3]")).sendKeys("3236229148");
		//for some reason some other element os revceving the click for the teacher..for me its working
		driver.findElement(By.cssSelector(".reset-pwd-btn")).click();
		
		//here is a css way of reaching thropugh tags from parent to child..its beacuse of time limit being too slow and sliding window is overlapping the 
		//other page..and that button is getting clicked
		System.out.println(driver.findElement(By.cssSelector("form p")).getText());
		//after grabbing the text I need to go back to login page by clicking on go to login
		//here u have parent to child, index and customised..all three combination in below xpath
		driver.findElement(By.xpath("//div[@class='forgot-pwd-btn-conainer']/button[1]")).click();
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		driver.findElement(By.cssSelector("#inputUsername")).sendKeys("umak4511779@gmail.com");
		driver.findElement(By.cssSelector("input[type*='pass']")).sendKeys("rahulshettyacademy");
		driver.findElement(By.id("chkboxOne")).click();
		driver.findElement(By.xpath("//button[contains(@class, 'submit')]")).click();
		
	}
	

}
