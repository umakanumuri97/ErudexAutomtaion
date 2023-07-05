package com.erudex;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.login.LoginPage;
import com.erudex.utils.BrowserHandler;
import com.erudex.utils.Browsers;
import com.erudex.utils.PropReader;
import com.erudex.utils.Session;

public class ErudexLogin {

	private static final Logger logger = LogManager.getLogger(ErudexLogin.class);

	public static HashMap<String, String> users = new LinkedHashMap<String, String>();

	public static void main(String[] args) throws InterruptedException {

		Properties configProperties = PropReader.loadConfigProperties();

		String userDataFilePath = configProperties.getProperty("erudex.users.file");

		getLoginsFromExcel(userDataFilePath);

		// Iterate over the HashMap and get the usernames and passwords for
		
		// Create a fixed thread pool with a desired number of threads
        int numThreads = 5; // Adjust this as per your requirements
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);

        // Create a list to hold the Future objects
        List<Future<?>> futures = new ArrayList<>();

        // Iterate over the HashMap and submit tasks to the thread pool
        for (Map.Entry<String, String> entry : users.entrySet()) {
            Callable<Void> task = () -> {
                BrowserHandler browserHandler = new BrowserHandler();
                
          //    WebDriver driver = browserHandler.getDriver(Browsers.CHROME);

                WebDriver driver = browserHandler.getDriver(Browsers.FIREFOX);
                
                String username = entry.getKey();
                String password = entry.getValue();
                logger.info("Username: " + username + ", Password: " + password);

                LoginPage loginPage = new LoginPage(driver);

                loginPage.navigateToPage();
				  Thread.sleep(2000);
                loginPage.setUsername(username);
                loginPage.setPassword(password);

                ErudexPage page = loginPage.login(true);

                logger.info("Username: " + username + ", Password: " + password);
                logger.info(page.getPageTitle());
                logger.info(page.getPageUrl());
                
                
           //     logger.info(Session.getRoles(driver));
                logger.info(Session.getLandingPage(driver));

                browserHandler.closeDriver();
                
                return null;
            };

            // Submit the task to the executor and keep track of the Future object
            
            //    each future ---> executor.submit(task)
            futures.add(executor.submit(task));
        }

        // Wait for all tasks to complete
        for (Future<?> future : futures) {
            try {
                future.get(); // This blocks until the task is complete
            } catch (Exception e) {
                // Handle any exceptions that occurred during execution
                e.printStackTrace();
            }
        }

        // Shutdown the executor
        executor.shutdown();
		
		
//		for (Map.Entry<String, String> entry : users.entrySet()) {
//
//			BrowserHandler browserHandler = new BrowserHandler();
//		//	WebDriver driver = browserHandler.getDriver(Browsers.CHROME);
//
//			WebDriver driver = browserHandler.getDriver(Browsers.FIREFOX);
//			String username = entry.getKey();
//			String password = entry.getValue();
//			logger.info("Username: " + username + ", Password: " + password);
//
//			LoginPage loginPage = new LoginPage(driver);
//			
//			loginPage.navigateToPage();
//
//			Thread.sleep(2000);
//			loginPage.setUsername(username);
//			loginPage.setPassword(password);
//			
//			ErudexPage page = loginPage.login(true);
//			
//			logger.info("Username: " + username + ", Password: " + password);
//			logger.info(page.getPageTitle());
//			logger.info(page.getPageUrl());
//														
//
//			browserHandler.closeDriver();
//
//		}
	}


	private static void getLoginsFromExcel(String filePath) {
		try {
			FileInputStream excelFile = new FileInputStream(new File(filePath));
			Workbook workbook = new XSSFWorkbook(excelFile);
			Sheet datatypeSheet = workbook.getSheetAt(0);
			Iterator<Row> iterator = datatypeSheet.iterator();

			// Skip the Header Row
			iterator.next();

			while (iterator.hasNext()) {

				Row currentRow = iterator.next();
				Iterator<Cell> cellIterator = currentRow.iterator();

				Cell userNameCell = currentRow.getCell(0);
				Cell passwordCell = currentRow.getCell(1);

				if (userNameCell != null && passwordCell != null) {
					String userName = "";
					String password = "";

					if (userNameCell.getCellType() == CellType.STRING) {
						userName = userNameCell.getStringCellValue();
					} else if (userNameCell.getCellType() == CellType.NUMERIC) {
						userName = String.valueOf(userNameCell.getNumericCellValue());
					}

					if (passwordCell.getCellType() == CellType.STRING) {
						password = passwordCell.getStringCellValue();
					} else if (passwordCell.getCellType() == CellType.NUMERIC) {
						password = String.valueOf(passwordCell.getNumericCellValue());
					}

					users.put(userName, password);
				}
			}

		} catch (Exception e) {
			logger.error(e);
		}
	}
	
}
