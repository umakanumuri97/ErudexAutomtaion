package com.erudex.utils;

import org.apache.logging.log4j.LogManager;
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
    public WebDriver getDriver(Browsers browser) throws IllegalArgumentException {
        Properties configProperties = PropReader.loadConfigProperties();

        if (browser == Browsers.CHROME) {
            System.setProperty("webdriver.chrome.driver", configProperties.getProperty("webdriver.chrome.driver"));
            ChromeOptions options = getChromeOptions();
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

    private ChromeOptions getChromeOptions() {
        ChromeOptions options = new ChromeOptions();
        Properties chromeProperties = PropReader.loadChromeProperties();

        // Configure Chrome options here based on the properties
        for (String propertyName : chromeProperties.stringPropertyNames()) {
            setOptionIfDefined(options, chromeProperties, propertyName);
        }

        logger.debug("Chrome Options [" + options.toString() + "]");

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
}
