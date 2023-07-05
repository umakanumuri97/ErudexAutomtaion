package com.erudex.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class PropReader {

    private static final Logger logger = LogManager.getLogger(PropReader.class);
    private static final Map<String, Properties> propertiesCache = new HashMap<>();
    private static final Map<String, Object> fileLocks = new ConcurrentHashMap<>();
    

    

    /**
     * Loads properties from a properties file. Uses double-checked locking to ensure thread safety and efficient
     * loading of properties.
     *
     * @param filePath the path to the properties file
     * @return the loaded Properties object
     */
    public static Properties loadProperties(String filePath) {
        Properties properties = propertiesCache.get(filePath);

        if (properties == null) {
            Object fileLock = fileLocks.computeIfAbsent(filePath, k -> new Object());

            synchronized (fileLock) {
                properties = propertiesCache.get(filePath);
                if (properties == null) {
                    // No other thread is loading the properties file, proceed with loading
                    properties = new Properties();
                    try (FileInputStream fis = new FileInputStream(filePath)) {
                        properties.load(fis);
                        propertiesCache.put(filePath, properties);
                    } catch (IOException e) {
                        logger.error("Failed to load properties from file: " + filePath, e);
                    }
                }
            }
        }

        return properties;
    }


    /**
     * Gets the value of a property by name from the specified properties file.
     *
     * @param filePath the path to the properties file
     * @param propName the name of the property
     * @return the value of the property, or null if not found
     */
    public static String getProperty(String filePath, String propName) {
        Properties properties = loadProperties(filePath);
        return properties.getProperty(propName);
    }

    /**
     * Loads the config.properties file.
     *
     * @return the loaded Properties object for config.properties
     */
    public static Properties loadConfigProperties() {
        return loadProperties(ConfigProperties.CONFIG_PROPS);
    }

    /**
     * Loads the chrome.properties file.
     *
     * @return the loaded Properties object for chrome.properties
     */
    public static Properties loadChromeProperties() {
        return loadProperties(BrowerProperties.CHROME);
    }

    /**
     * Loads the firefox.properties file.
     *
     * @return the loaded Properties object for firefox.properties
     */
    public static Properties loadFirefoxProperties() {
        return loadProperties(BrowerProperties.FIREFOX);
    }

    /**
     * Loads the ie.properties file.
     *
     * @return the loaded Properties object for ie.properties
     */
    public static Properties loadIEProperties() {
        return loadProperties(BrowerProperties.IE);
    }

    /**
     * Loads the edge.properties file.
     *
     * @return the loaded Properties object for edge.properties
     */
    public static Properties loadEdgeProperties() {
        return loadProperties(BrowerProperties.EDGE);
    }
}
