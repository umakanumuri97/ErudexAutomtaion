package com.erudex.utils.devtools;



import java.util.List;
import java.util.Optional;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.devtools.DevTools;
import org.openqa.selenium.devtools.idealized.OpaqueKey;
import org.openqa.selenium.devtools.v112.*;
import org.openqa.selenium.devtools.v112.performance.Performance;
import org.openqa.selenium.devtools.v112.performance.Performance.*;
import org.openqa.selenium.devtools.v112.performance.model.Metric;

public class ChromeDevtools {
	
	private static DevTools devTools = null;
	
	public static DevTools getDevTools(ChromeDriver driver) {
						
		devTools = driver.maybeGetDevTools().get();
		
		devTools.createSession();
				
        return devTools;
	}
	
	public static void closeDevToolsSession() {
	    devTools.close();
	}
	
	public static List<Metric> getPerformenceMetrics(ChromeDriver driver){
		
        List<Metric> metricList = devTools.send(Performance.getMetrics());
		
        return metricList;
	}
	
	public static void enablePerformenceMetrics(ChromeDriver driver){
		
		if (ChromeDevtools.devTools == null) {
			getDevTools(driver);
		}
		
		Optional<Performance.EnableTimeDomain> timeDomain =
				Optional.of(Performance.EnableTimeDomain.TIMETICKS);
		
		
		devTools.send(Performance.enable(timeDomain));        
		        
	}

}
