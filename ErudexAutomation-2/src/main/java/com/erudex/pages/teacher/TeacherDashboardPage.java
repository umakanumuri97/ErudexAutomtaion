package com.erudex.pages.teacher;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.student.StudentDashBoardPage;

public class TeacherDashboardPage extends ErudexPage{
	private static final Logger logger = LogManager.getLogger(TeacherDashboardPage.class);
	

	public TeacherDashboardPage(WebDriver driver) {		
		super(driver);
	}
}
