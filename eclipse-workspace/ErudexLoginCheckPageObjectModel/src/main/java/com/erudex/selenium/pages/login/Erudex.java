package com.erudex.selenium.pages.login;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

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
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.erudex.selenium.pages.login.LoginPage;



public class Erudex {
    private static ChromeDriver driver = null;
    private static LinkedHashMap<String, String> users = new LinkedHashMap<>();

    public static void main(String[] args) {
    	System.setProperty("webdriver.chrome.driver", "/Users/kanumuriuma/Downloads/chromedriver_mac_arm64/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
        driver = new ChromeDriver(options);

        try {
            readUserDataFromExcel();
            loginUsers();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }

    private static void readUserDataFromExcel() throws Exception {
        String excelFilePath = "/Users/kanumuriuma/Downloads/choppedUsers.xlsx";
        FileInputStream inputStream = new FileInputStream(new File(excelFilePath));
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Iterator<Row> iterator = sheet.iterator();
        while (iterator.hasNext()) {
            Row currentRow = iterator.next();
            Cell usernameCell = currentRow.getCell(0);
            Cell passwordCell = currentRow.getCell(1);

            String username = "";
            String password = "";

            if (usernameCell != null && usernameCell.getCellType() == CellType.STRING) {
                username = usernameCell.getStringCellValue();
            }

            if (passwordCell != null && passwordCell.getCellType() == CellType.STRING) {
                password = passwordCell.getStringCellValue();
            }

            if (!username.isEmpty() && !password.isEmpty()) {
                users.put(username, password);
            }
        }

        workbook.close();
        inputStream.close();
    }
    private static void loginUsers() throws InterruptedException {
    	for (Map.Entry<String, String> user : users.entrySet()) {
    	    String username = user.getKey();
    	    String password = user.getValue();

    	    driver.get("https://app.erudex.com/");

    	    LoginPage loginPage = new LoginPage(driver);
    	    System.out.println("******************************************");
    	    loginPage.setUsernameTextField(username);
    	    System.out.println(username);
    	    loginPage.setPasswordTextField(password);
    	    System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    	    System.out.println(password);
    	    loginPage.submit();

            WebDriverWait wait = new WebDriverWait(driver, 30);
            try {
//                wait.until(new ExpectedCondition<Boolean>() {
////                    public Boolean apply(WebDriver driver) {
////                        WebElement dashboardElement = driver.findElement(By.xpath("//div[@class='dashboard']"));
////                        return dashboardElement != null && dashboardElement.isDisplayed();
////                    }
//                });

                //System.out.println("User '" + username + "' logged in successfully.");
                Thread.sleep(5000);
                if (checkAlreadyLoggedin()) {
                    if (alreadyLoggedInYes()) {
                        System.out.println("Successfully logged in and launched dashboard.");
                        Thread.sleep(5000);
                        //WebElement dashboardElement = driver.findElement(By.xpath("//div[@class='dashboard']"));
                        // Perform actions on the dashboard element

                        // Example: Get the text of the dashboard element
                        //String dashboardText = dashboardElement.getText();
                        //System.out.println("Dashboard text: " + dashboardText);

                        // Example: Click on a button within the dashboard
                        //WebElement dashboardButton = dashboardElement.findElement(By.xpath("//button[@id='dashboard-button']"));
                        //dashboardButton.click();
                    } else {
                        System.out.println("User logged in, but failed to launch the dashboard.");
                    }
                }
            } catch (NoSuchElementException e) {
                System.out.println("User '" + username + "' failed to log in.");
            }
            
        }
    }
    private static boolean checkAlreadyLoggedin() {
        boolean present = false;

        try {
            WebElement paragraph = driver.findElement(By.cssSelector(".ng-binding"));
            String paragraphText = paragraph.getText();
            System.out.println("Paragraph text: " + paragraphText);

            if (paragraphText.equals("You are already logged in elsewhere.<br>Do you want to login here instead?")) {
                present = true;
                WebElement yesButton = driver.findElement(By.cssSelector(".button.success.radius"));
                try {
					Thread.sleep(5000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
                yesButton.click();
            }
        } catch (NoSuchElementException e) {
            System.out.println("Paragraph or Yes button not found.");
        }

        return present;
    }
    private static boolean alreadyLoggedInYes() throws InterruptedException {
        try {
            WebElement yesButton = driver.findElement(By.cssSelector(".button.success.radius"));
            yesButton.click();
            Thread.sleep(5000);
            return true;
        } catch (NoSuchElementException e) {
            System.out.println("Yes button not found.");
            return false;
        }
    }


}

