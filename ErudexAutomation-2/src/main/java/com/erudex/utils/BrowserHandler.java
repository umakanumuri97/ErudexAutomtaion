package com.erudex.utils;

import org.apache.logging.log4j.LogManager;
import java.util.*;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import com.erudex.utils.devtools.*;
import org.openqa.selenium.JavascriptExecutor;

import java.util.Properties;

public class BrowserHandler {

    private WebDriver driver;
    
    private static final Logger logger = LogManager.getLogger(BrowserHandler.class);

    /**
     * Returns the WebDriver instance for the specified browser.
     *
     * @param browser the browser to get the WebDriver for
     * @return the WebDriver instance
     * @throws IllegalArgumentException if an invalid browser is specified
     */
    public WebDriver getDriver(Browsers browser,String deviceName , String orientation) throws IllegalArgumentException {
        Properties configProperties = PropReader.loadConfigProperties();

        if (browser == Browsers.CHROME) {
            System.setProperty("webdriver.chrome.driver", configProperties.getProperty("webdriver.chrome.driver"));
            ChromeOptions options = getChromeOptions(deviceName,orientation);
            driver = new ChromeDriver(options);
            logger.info("Chrome Driver State => " + driver.toString());
        } else if (browser == Browsers.FIREFOX) {
            System.setProperty("webdriver.gecko.driver", configProperties.getProperty("webdriver.gecko.driver"));
            FirefoxOptions options = getFirefoxOptions();
            driver = new FirefoxDriver(options);
            logger.info("FireFox Driver State => " + driver.toString());
        } else if (browser == Browsers.IE) {
            System.setProperty("webdriver.ie.driver", configProperties.getProperty("webdriver.ie.driver"));
            InternetExplorerOptions options = getIEOptions();
            driver = new InternetExplorerDriver(options);
            logger.info("IE Driver State => " + driver.toString());
        } else if (browser == Browsers.EDGE) {
            System.setProperty("webdriver.edge.driver", configProperties.getProperty("webdriver.edge.driver"));
            EdgeOptions options = getEdgeOptions();
            driver = new EdgeDriver(options);
            logger.info("Edge Driver State => " + driver.toString());
        } else {
            throw new IllegalArgumentException("Invalid browser specified: [" + browser + "]");
        }
        return driver;
    }

    private ChromeOptions getChromeOptions(String deviceName, String orientation) {
        ChromeOptions options = new ChromeOptions();
        Properties chromeProperties = PropReader.loadChromeProperties();

        // Configure Chrome options here based on the properties
        for (String propertyName : chromeProperties.stringPropertyNames()) {
            setOptionIfDefined(options, chromeProperties, propertyName);
        }
        if(deviceName.equals("BROWSER")) {
        	return options;
        }
              
        // Read the mobile options from the JSON file using ChromeMobileOptionsBuilder
        ChromeMobileOptionsBuilder optionsBuilder = new ChromeMobileOptionsBuilder("src/main/resources/mobile.json");
        Map<String, Object> mobileOptions = optionsBuilder.getMobileOptions(deviceName, orientation);
      

        if (mobileOptions != null) {
            options.setExperimentalOption("mobileEmulation", mobileOptions);
        } else {
            System.out.println("Mobile options not found for the device: " + deviceName);            
        }
        
        
        // Get the screen dimensions and insets from the mobile options
        Map<String, Object> deviceMetrics = (Map<String, Object>) mobileOptions.get("deviceMetrics");
      
        int width = (int) deviceMetrics.get("width");
        int height = (int) deviceMetrics.get("height");
        
        List<Map<String, Object>> modesList = (List<Map<String, Object>>) mobileOptions.get("modes");
     // Find the selected mode based on the orientation
        Map<String, Object> selectedMode = null;
        for (Map<String, Object> mode : modesList) {
            String modeOrientation = (String) mode.get("orientation");
            if (modeOrientation.equals(orientation)) {
                selectedMode = mode;
                break;
            }
        }
        
        if (selectedMode != null) {
            // Get the insets from the selected mode
            Map<String, Object> insets = (Map<String, Object>) selectedMode.get("insets");
            int insetLeft = (int) insets.get("left");
            int insetTop = (int) insets.get("top");
            int insetRight = (int) insets.get("right");
            int insetBottom = (int) insets.get("bottom");

            // Calculate the adjusted width and height by considering the insets
            // TODO Fix the viewport height not getting set bug..
            // <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
            int adjustedWidth = width + insetLeft + insetRight +300;
            int adjustedHeight = height + insetTop + insetBottom +300;
            

            // Set the browser window size to match the adjusted dimensions
            options.addArguments("--window-size=" + adjustedWidth + "," + adjustedHeight);
        } else {
            System.out.println("Selected mode not found for the orientation: " + orientation);
        }
                          
        logger.info("Chrome Options [" + options.toString() + "]");

        return options;
    }

    private void setOptionIfDefined(ChromeOptions options, Properties properties, String propertyName) {
        if (properties.containsKey(propertyName)) {
            String optionValue = properties.getProperty(propertyName);

            if (optionValue.equalsIgnoreCase("true") || optionValue.equalsIgnoreCase("false")) {
                boolean boolValue = Boolean.parseBoolean(optionValue);
                options.setCapability(propertyName, boolValue);
            } else {
                String[] optionParts = optionValue.split("=");

                if (optionParts.length == 2) {
                    options.addArguments(optionParts[0] + "=" + optionParts[1]);
                } else {
                    options.addArguments(optionValue);
                }
            }
        }
    }

    private FirefoxOptions getFirefoxOptions() {
        FirefoxOptions options = new FirefoxOptions();
        Properties firefoxProperties = PropReader.loadFirefoxProperties();

     // Configure Firefox options here based on the properties
        for (String propertyName : firefoxProperties.stringPropertyNames()) {
            //TODO Implement Firefox Options
        	//setOptionIfDefined(options, firefoxProperties, propertyName);
        }

        logger.debug("Chrome Options [" + options.toString() + "]");


        return options;
    }

    private InternetExplorerOptions getIEOptions() {
        InternetExplorerOptions options = new InternetExplorerOptions();
        Properties ieProperties = PropReader.loadIEProperties();

        // Configure Internet Explorer options here based on the properties

        return options;
    }

    private EdgeOptions getEdgeOptions() {
        EdgeOptions options = new EdgeOptions();
        Properties edgeProperties = PropReader.loadEdgeProperties();

        // Configure Edge options here based on the properties

        return options;
    }

    /**
     * Closes the WebDriver instance if it is not null.
     */
    public void closeDriver() {
        if (driver != null) {
        	driver.close();
            driver.quit();
        }
    }
    
    public void setBrowserTitle(String title) {
    	  // Get the current title
        String currentTitle = driver.getTitle();

        // Append a string to the current title
        String newTitle = currentTitle + " - " +  title;

        // Set the new title
     // Use the JavascriptExecutor to set the title
        JavascriptExecutor js = (JavascriptExecutor) driver;
    
        js.executeScript("document.title = arguments[0]", newTitle);

    }
}
