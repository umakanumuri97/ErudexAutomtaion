package com.erudex.pages.student;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.login.UserAlreadyLoggedInDialog;

public class StudentDashBoardPage extends ErudexPage{	
	
	private static final Logger logger = LogManager.getLogger(StudentDashBoardPage.class);
	

	public StudentDashBoardPage(WebDriver driver) {		
		super(driver);
	}
		
}
