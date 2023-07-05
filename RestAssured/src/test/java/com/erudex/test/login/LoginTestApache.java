package com.erudex.test.login;


import static org.hamcrest.Matchers.containsString;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.testng.Assert.assertEquals;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.ITestContext;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.erudex.model.user.UserReqData;
import com.erudex.model.user.UserResponseData;
import com.erudex.services.login.ILoginService;
import com.erudex.services.login.apacheimpl.LoginServiceApacheImpl;
import com.erudex.services.login.raimpl.LoginServiceRAImpl;
import com.erudex.utils.ErudexUtils;

import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import io.qameta.allure.Story;

@Epic ("Apache HTTP Client POC - Erudex Tests")
@Story ("Login related Assertions using Hamcrest in rest assured")
@Feature ("Performing different API Tests using Rest-Assured")
//@Listeners(TestListener.class)
public class LoginTestApache {
	
	private static final Logger logger = LogManager.getLogger(LoginTestApache.class);	
	
	private ILoginService svcLogin = new LoginServiceApacheImpl();
	
	@BeforeSuite
    public void setUp() {
        // Perform setup steps specific to each test method
        // e.g., initialize test data, set up test environment		
    }
    
    @AfterMethod
    public void tearDown() {
        // Perform cleanup steps after each test method
        // e.g., release resources, reset test environment
    }
    
    @DataProvider(name = "testdata", parallel = false)
    public Object[][] testData() throws IOException {
        String filePath = "src/main/resources/indus_users_iit.xlsx";
        String sheetName = "Indus_users";
        return ErudexUtils.readDataFromExcel(filePath, sheetName);
    }
    
    @Test
    @Description ("Navigation Test")
    @Severity (SeverityLevel.NORMAL)
    public void testNavToLoginPage() {
    	
    	String responseBody = svcLogin.navigateToLoginPage();
    	
    	 // Hamcrest Matchers - Assert the response contains the expected title
        String expectedTitle = "<title>Login</title>";
        assertThat(responseBody, containsString(expectedTitle));
    }
    
    @Test(dataProvider="testdata")
    @Description ("Login Test")
    @Severity (SeverityLevel.NORMAL)
    public void testLogin(String userName, String password,ITestContext context) {
    	
		/*
		 * String userName = "ind.iitstu001"; String password = "ind.iitstu001";
		 */

    	UserReqData reqData = UserReqData.builder().
    			                          username(userName)
				                         .password(password)
			 	                         .overrideSession(true)
				                         .build();
    	
        UserResponseData responseData = svcLogin.login(reqData);
       
        //Response Data - True
        assertTrue(responseData.isResult());
        
        //Status 
        assertTrue(responseData.getStatusCode() == 200); 
              
        logger.info("Login with User ID ["+userName+"] Password ["+password +"]"+responseData.getUserInfo().getId());
        logger.info("ILoggin Service ["+svcLogin+"]");
        
        context.setAttribute(userName,responseData.getSessionId());
        
       
    }
    
    @Test(dataProvider="testdata")
    @Description ("Login with Session  Test")
    @Severity (SeverityLevel.NORMAL)
    public void testLoginWithSession(String userName, String password,ITestContext context) {
    	
		/*
		 * String userName = "ind.iitstu001"; String password = "ind.iitstu001";
		 */

    	UserReqData reqData = UserReqData.builder().username(userName)
				.password(password)
				.overrideSession(true)
				.build();
    	
    	String session = (String) context.getAttribute(userName);
    	
        UserResponseData responseData = svcLogin.login(reqData,session);
       
        //Response Data - True
        assertTrue(responseData.isResult());
        
        //Status 
        assertTrue(responseData.getStatusCode() == 200);   
        
        logger.info("Login with User ID ["+userName+"] Session ID ["+session+"]"+responseData.getUserInfo().getUserId());
        logger.info("ILoggin Service ["+svcLogin+"]");
       
    }
    
    @Test(dataProvider="testdata")
    @Description ("Logout with Session  Test")
    @Severity (SeverityLevel.NORMAL)
    public void testLogoutWithSession(String userName, String password,ITestContext context) {
    	/*
		 * String userName = "ind.iitstu001"; String password = "ind.iitstu001";
		 */

    	UserReqData reqData = UserReqData.builder().username(userName)
				.password(password)
				.overrideSession(true)
				.build();
    	
    	String session = (String) context.getAttribute(userName);
    	
    	int statusCode = svcLogin.logout(reqData, session);
    	
    	assertEquals(200, statusCode);
    
    }
    
    @AfterMethod
    public void getTestExecutionTime (ITestResult result) {
        String methodName = result.getMethod ().getMethodName ();
        long totalExecutionTime = (result.getEndMillis () - result.getStartMillis ());
        logger.info("Total Execution time: " +totalExecutionTime +" milliseconds" + " for method " +methodName);
    }
	

}
