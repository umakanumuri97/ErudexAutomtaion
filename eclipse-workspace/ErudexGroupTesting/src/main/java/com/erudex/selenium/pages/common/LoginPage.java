package com.erudex.selenium.pages.common;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	private ChromeDriver driver;

	@FindBy(id = "username")
	@CacheLookup
	private WebElement usernameField;

	@FindBy(id = "password")
	@CacheLookup
	private WebElement passwordField;

	@FindBy(name = "login")
	@CacheLookup
	private WebElement loginButton;

	private String pageLoadedText = "<title>Login</title>";

	private int timeout = 10;

	private String pageUrl = "https://app.erudex.com/";

	public LoginPage(ChromeDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void setUsernameTextField(String username) {
		usernameField.sendKeys(username);
	}

	public void setPasswordTextField(String password) {
		passwordField.sendKeys(password);
	}

	public String getPasswordTextField(String password) {
		return password;

	}

	public String getUsername() {
		WebElement usernameField = driver.findElement(By.id("username"));
		return usernameField.getAttribute("value");
	}

	public String getPassword() {
		return passwordField.getAttribute("value");
	}

	public void submit() {
		loginButton.click();
	}

	public LoginPage fill() {
		getLoginsFromExcel("/Users/kanumuriuma/Downloads/dataonly.xlsx");
		String username = users.keySet().iterator().next();
		String password = users.get(username);
		setUsernameTextField(username);
		setPasswordTextField(password);
		return this;
	}

	public LoginPage fillAndSubmit() {
		fill();
		submit();
		return this;
	}

	public boolean verifyPageLoaded() {
		return driver.getTitle().contains("Login");
	}

	public boolean verifyPageUrl() {
		return driver.getCurrentUrl().contains("https://app.erudex.com/login");
	}

	public void waitForLoginButtonClickable() {
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		wait.until(ExpectedConditions.elementToBeClickable(loginButton));
	}

	private static Map<String, String> users = new HashMap<>();

	private static void getLoginsFromExcel(String filePath) {
		try {
			FileInputStream excelFile = new FileInputStream(new File(filePath));
			Workbook workbook = new XSSFWorkbook(excelFile);
			Sheet datatypeSheet = workbook.getSheetAt(0);
			Iterator<Row> iterator = datatypeSheet.iterator();

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
						userName = String.valueOf((int) userNameCell.getNumericCellValue());
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
			System.err.println(e);
		}

	}

}
