package com.erudex.basepage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ErudexPage {
	
	protected WebDriver driver;
	
	public ErudexPage() {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	
	
	

}
