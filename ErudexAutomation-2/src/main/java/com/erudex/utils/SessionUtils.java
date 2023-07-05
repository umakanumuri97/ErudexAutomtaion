package com.erudex.utils;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class SessionUtils {
	
	private static final Logger logger = LogManager.getLogger(SessionUtils.class);


	public static Role getRole(WebDriver driver) {

		if (driver != null) {

			// Retrieve session storage data using JavascriptExecutor
			JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
			String sessionStorageData = (String) jsExecutor
					.executeScript("return JSON.stringify(window.sessionStorage);");

			// Convert session storage data to JSON object
			JSONObject sessionStorageJson = new JSONObject(sessionStorageData);
			
			 try {
		            
		            // Extract the "com.erudex.userKey" object
				    String strUserKey = (String) sessionStorageJson.get("com.erudex.userKey");
				    
				    JSONObject userKey = new JSONObject(strUserKey);

		            // Extract the "roles" array from userKey
		            JSONArray roles = userKey.getJSONArray("roles");

		            // Extract the first role object from roles array
		            JSONObject userRole = roles.getJSONObject(0);		            		       

		            // Extract the role ID and landing page from the role object
		            String roleName = userRole.getString("roleName");
		            
		            return Role.getRole(roleName);

		        } catch (JSONException jsonEx) {
		        	logger.error(jsonEx);
		        }
		    }
							
		return null;

	}
	
	public static String getLandingPage(WebDriver driver) {

		if (driver != null) {

			// Retrieve session storage data using JavascriptExecutor
			JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
			String sessionStorageData = (String) jsExecutor
					.executeScript("return JSON.stringify(window.sessionStorage);");

			// Convert session storage data to JSON object
			JSONObject sessionStorageJson = new JSONObject(sessionStorageData);
			
			 try {		           

				   // Extract the "com.erudex.userKey" object
				    String strUserKey = (String) sessionStorageJson.get("com.erudex.userKey");
				    
				    JSONObject userKey = new JSONObject(strUserKey);


		            // Extract the "roles" array from userKey
		            JSONArray roles = userKey.getJSONArray("roles");

		            // Extract the first role object from roles array
		            JSONObject userRole = roles.getJSONObject(0);		            		       

		            // Extract the role ID and landing page from the role object
		            String landingpage = userRole.getString("landingPage");
		            
		            return landingpage;

		        } catch (JSONException jsonEx) {
		            logger.error(jsonEx);
		        }
		    }
							
		return null;

	}
	
	public static void waitFor(int milliSec) {
		try {
			Thread.sleep(milliSec);
		} catch (InterruptedException interruptedEx) {
			// TODO Auto-generated catch block
			logger.error(interruptedEx);
		}
	}	
	
	public static void getScreenShot(WebDriver driver) {
		
        // Get the current timestamp
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        String timestamp = currentTime.format(formatter);

        // Create the directory path for saving screenshots
        String directoryPath = "logs/screenshots/";

        // Create the File object for the directory
        File directory = new File(directoryPath);

        // If the directory does not exist, create it
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Take the screenshot as a file
        File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        // Set the destination path for saving the screenshot
        String destinationPath = directoryPath + "screenshot_" + timestamp + ".png";

        // Copy the screenshot file to the destination path
        try {
            FileUtils.copyFile(screenshotFile, new File(destinationPath));
            System.out.println("Screenshot saved: " + destinationPath);
        } catch (IOException e) {
            System.out.println("Failed to save screenshot: " + e.getMessage());
        }
    }
	
	

}
