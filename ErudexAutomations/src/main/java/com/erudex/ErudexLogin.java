package com.erudex;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.login.LoginPage;
import com.erudex.pages.student.StudentDashBoardPage;
import com.erudex.utils.BrowserHandler;
import com.erudex.utils.Browsers;
import com.erudex.utils.PropReader;
import com.erudex.utils.SessionUtils;

public class ErudexLogin {

	private static final Logger logger = LogManager.getLogger(ErudexLogin.class);

	public static HashMap<String, String> users = new LinkedHashMap<String, String>();

	public static void main(String[] args) {

		Properties configProperties = PropReader.loadConfigProperties();

		String userDataFilePath = configProperties.getProperty("erudex.users.file");

		getLoginsFromExcel(userDataFilePath);

		// Iterate over the HashMap and get the usernames and passwords for
		for (Map.Entry<String, String> entry : users.entrySet()) {

			BrowserHandler browserHandler = new BrowserHandler();
			WebDriver driver = browserHandler.getDriver(Browsers.CHROME);

			String username = entry.getKey();
			String password = entry.getValue();
			logger.info("Username: " + username + ", Password: " + password);

			LoginPage loginPage = new LoginPage(driver);

			loginPage.navigateToPage();

			loginPage.setUsername(username);
			loginPage.setPassword(password);

			ErudexPage page = loginPage.login(true);

			if (page instanceof StudentDashBoardPage) {

				StudentDashBoardPage stuDashBoardPage = (StudentDashBoardPage) page;

				// Click to Tests on Left MenuBar
				stuDashBoardPage.clickTests();SessionUtils.waitFor(3000);
								
				// Select Subject Tests
				stuDashBoardPage.selectSubjectRadio();
											
				//Select Mock Tests
				stuDashBoardPage.selectMockRadio();
				
				// Select Partial Tests in Mock Tests				
				stuDashBoardPage.selectMockTestTypePartialTest();SessionUtils.waitFor(3000);
				
				// Select Grand Tests in Mock Tests				
				stuDashBoardPage.selectMockTestTypeGrandTest();SessionUtils.waitFor(3000);
				
				// Select Full Tests in Mock Tests				
				stuDashBoardPage.selectMockTestTypeFullTest();SessionUtils.waitFor(3000);
				
				// Interact with Tabs
				stuDashBoardPage.clickAvailableTab();
				stuDashBoardPage.clickCompletedTab();
				stuDashBoardPage.clickExpiredTab();
				
															
				stuDashBoardPage.clickLogout();
			}

			browserHandler.closeDriver();

		}

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
