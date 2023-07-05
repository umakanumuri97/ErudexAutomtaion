package com.erudex.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.JavascriptExecutor;
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

}
