package com.erudex.utils.devtools;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChromeMobileOptionsBuilder {

    private Map<String, Object> jsonData;
    
    private static List<Map<String, Object>> extensions = null;

    public ChromeMobileOptionsBuilder(String jsonFilePath) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // Read the mobile options from the JSON file
            File jsonFile = new File(jsonFilePath);
            jsonData = objectMapper.readValue(jsonFile, Map.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private List<Map<String, Object>> getExtensions(){
    	// DCL - Thread Safe
    	if ( extensions == null ) {
    		synchronized (ChromeMobileOptionsBuilder.class) {
                if (extensions == null) {
                    extensions = (List<Map<String, Object>>) jsonData.get("extensions");
                }
            }
    	}
    	
    	return extensions;
    }
    
    public List<String> getDeviceList() {
    	
    	getExtensions();
    	
        List<String> deviceList = new ArrayList<>();        
        for (Map<String, Object> extension : extensions) {
            String type = (String) extension.get("type");
            if (type.equals("emulated-device")) {
                Map<String, Object> device = (Map<String, Object>) extension.get("device");
                String title = (String) device.get("title");
                deviceList.add(title);
            }
        }

        return deviceList;
    }

    public Map<String, Object> getMobileOptions(String deviceName, String orientation) {
    	
    	getExtensions();

        // Find the specified device
        for (Map<String, Object> extension : extensions) {
            String type = (String) extension.get("type");
            if (type.equals("emulated-device")) {
                Map<String, Object> device = (Map<String, Object>) extension.get("device");
                String title = (String) device.get("title");

                if (title.equals(deviceName)) {
                    // Process the device properties
                    boolean showByDefault = (boolean) device.get("show-by-default");
                    String userAgent = (String) device.get("user-agent");

                    // Process the modes
                    List<Map<String, Object>> modes = (List<Map<String, Object>>) device.get("modes");

                    // Find the specified mode based on the orientation
                    Map<String, Object> selectedMode = null;
                    for (Map<String, Object> mode : modes) {
                        String modeOrientation = (String) mode.get("orientation");
                        if (modeOrientation.equals(orientation)) {
                            selectedMode = mode;
                            break;
                        }
                    }

                    if (selectedMode != null) {
                        // Process the selected mode properties
                        Map<String, Object> insets = (Map<String, Object>) selectedMode.get("insets");
                        int selectedInsetLeft = (int) insets.get("left");
                        int selectedInsetTop = (int) insets.get("top");
                        int selectedInsetRight = (int) insets.get("right");
                        int selectedInsetBottom = (int) insets.get("bottom");

                        // Process the device metrics
                        Map<String, Object> screen = (Map<String, Object>) device.get("screen");
                        Map<String, Object> selectedScreen = (Map<String, Object>) screen.get(orientation);
                        int selectedWidth = (int) selectedScreen.get("width");
                        int selectedHeight = (int) selectedScreen.get("height");
                        
                        Object objPixelRatio = screen.get("device-pixel-ratio");
                        
                        Double devicePixelRatio = null;
                        
                        if (objPixelRatio instanceof Integer) {
                            Integer intValue = (Integer) objPixelRatio;
                            // Convert Integer to Double
                            devicePixelRatio = intValue.doubleValue();
                            // Use the doubleValue as needed
                        } else if (objPixelRatio instanceof Double) {
                            devicePixelRatio = (Double) objPixelRatio;
                            // Use the doubleValue as needed
                        }

                        // Build the device metrics map
                        Map<String, Object> deviceMetrics = new HashMap<>();
                        deviceMetrics.put("width", selectedWidth);
                        deviceMetrics.put("height", selectedHeight);
                        deviceMetrics.put("pixelRatio", devicePixelRatio);

                        // Build the insets map
                        Map<String, Object> insetsMap = new HashMap<>();
                        insetsMap.put("left", selectedInsetLeft);
                        insetsMap.put("top", selectedInsetTop);
                        insetsMap.put("right", selectedInsetRight);
                        insetsMap.put("bottom", selectedInsetBottom);

                        // Build the modes list
                        List<Map<String, Object>> modesList = new ArrayList<>();
                        Map<String, Object> mode = new HashMap<>();
                        mode.put("title", "default");
                        mode.put("orientation", orientation);
                        mode.put("insets", insetsMap);
                        modesList.add(mode);

                        // Build the mobile emulation map
                        Map<String, Object> mobileEmulation = new HashMap<>();
                        mobileEmulation.put("deviceMetrics", deviceMetrics);
                        mobileEmulation.put("userAgent", userAgent);
                        mobileEmulation.put("modes", modesList);

                        // Return the mobile options for the specified device
                        return mobileEmulation;
                    }
                }
            }
        }

        // Return null if the device is not found
        return null;
    }

}
