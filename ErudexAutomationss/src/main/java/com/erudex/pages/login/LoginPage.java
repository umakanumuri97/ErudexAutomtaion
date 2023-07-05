package com.erudex.pages.login;



import java.util.Map;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.json.JSONObject;

import org.openqa.selenium.JavascriptExecutor;

import com.erudex.pages.ErudexPage;
import com.erudex.pages.admin.AdminDashboardPage;
import com.erudex.pages.dataentry.DataEntryDashboardPage;
import com.erudex.pages.student.StudentDashBoardPage;
import com.erudex.pages.teacher.TeacherDashboardPage;
import com.erudex.utils.ConfigProperties;
import com.erudex.utils.PropReader;
import com.erudex.utils.SessionUtils;
import com.erudex.utils.UrlToBeAny;
import com.erudex.utils.Role;

public class LoginPage extends ErudexPage{
	
	private static final Logger logger = LogManager.getLogger(LoginPage.class);

    private Map<String, String> data;
   

    private int timeout = 15;

    private final String pageLoadedText = "";

    private final String pageUrl = "https://demo-app.erudex.com/";

    private UserAlreadyLoggedInDialog userAlreadyLoggedInDialog;

    @FindBy(name = "login")
    @CacheLookup
    private WebElement login;

    @FindAll({ @FindBy(id = "username"), @FindBy(name = "username"), @FindBy(className = "small-12"),
            @FindBy(linkText = "Username"), @FindBy(css = ".ng-valid-minlength") })
    @CacheLookup
    private WebElement username;

    @FindAll({ @FindBy(id = "password"), @FindBy(name = "password"), @FindBy(xpath = "//input[@type='password']"),
            @FindBy(className = "ng-valid-minlength") })
    @CacheLookup
    private WebElement password;

    @FindBy(linkText = "© 2022 Erudex Private Limited")
    @CacheLookup
    private WebElement copyrightElement;

    @FindBy(css = "a[href='https://erudex.com/privacy/']")
    @CacheLookup
    private WebElement privacyPolicyLink;

    @FindBy(css = "a[href='https://erudex.com/privacy/']")
    @CacheLookup
    private WebElement termsOfUseLink;
   
    public LoginPage(WebDriver driver) { 
    	super(driver);
        userAlreadyLoggedInDialog = new UserAlreadyLoggedInDialog(driver);        
    }

    public LoginPage(WebDriver driver, Map<String, String> data) {
        this(driver);
        this.data = data;
        userAlreadyLoggedInDialog = new UserAlreadyLoggedInDialog(driver);
        PageFactory.initElements(driver, this);
    }

    public LoginPage(WebDriver driver, Map<String, String> data, int timeout) {
        this(driver, data);
        this.timeout = timeout;
        userAlreadyLoggedInDialog = new UserAlreadyLoggedInDialog(driver);
        PageFactory.initElements(driver, this);
    }
    
    /**
     * Get the title of the page.
     *
     * @return the title of the page as a string
     */
    public String getPageTitle() {
        return driver.getTitle();
    }
    
    /**
     * Get the URL of the page.
     *
     * @return the URL of the page as a string
     */
    public String getPageUrl() {
        return driver.getCurrentUrl();
    }
    
    /**
     * Navigate to the page URL.
     *
     * @return the LoginPage class instance after navigating to the page URL
     */
    public LoginPage navigateToPage() {
        driver.get(pageUrl);
        return this;
    }
    
    /**
     * Set the value for the Username field.
     *
     * @param usernameValue the value to set for the Username field
     * @return the LoginPage class instance
     */
    public LoginPage setUsername(String usernameValue) {
    	username.click();
        username.sendKeys(usernameValue);
        return this;
    }

    /**
     * Set the value for the Password field.
     *
     * @param passwordValue the value to set for the Password field
     * @return the LoginPage class instance
     */
    public LoginPage setPassword(String passwordValue) {
    	password.click();
        password.sendKeys(passwordValue);
        return this;
    }

    /**
     * Click on Login Button.
     *
     * @return the DashboardPage class instance if the user is already logged in
     *         elsewhere and accepts, otherwise return the LoginPage class instance.
     */
    public ErudexPage login(boolean accept) {
        login.click();

        WebDriverWait wait = new WebDriverWait(driver, 5);
        String studentURL = PropReader.getProperty(ConfigProperties.CONFIG_PROPS,"erudex.student.url");
    	String teacherURL = PropReader.getProperty(ConfigProperties.CONFIG_PROPS,"erudex.teacher.url");
    	String adminURL = PropReader.getProperty(ConfigProperties.CONFIG_PROPS,"erudex.admin.url");
    	String dataentryURL = PropReader.getProperty(ConfigProperties.CONFIG_PROPS,"erudex.dataentry.url");
    	

        try {        	        	
        	
        	//what is happening here in this url....
            // Wait for the dashboard page to load
        	wait.until(new UrlToBeAny(studentURL, teacherURL,adminURL,dataentryURL));
        	
        	ErudexPage page = null;
        	
        	logger.info(driver.getCurrentUrl());                
        	logger.info(driver.getTitle());
        	logger.info(driver.getWindowHandle());
        	logger.debug(driver.getPageSource());
        	
            
        	
        	Role role = SessionUtils.getRole(driver);
        	String landingPage = SessionUtils.getLandingPage(driver);
        	
        	logger.info("User Role is ["+role.getRoleName()+"]");  
        	logger.info("User Landing Page is ["+landingPage +"]");          	        
            
        	if (role == Role.TEACHER ) {        		
        		page =  new TeacherDashboardPage(driver);
        	}
        	else if (role == Role.STUDENT) {
        		page =  new StudentDashBoardPage(driver);
        	}
        	else if (role == Role.DATA_ENTRY) {
        		page =  new DataEntryDashboardPage(driver);
        	}
        	else if (role == Role.ADMIN) {
        		page =  new AdminDashboardPage(driver);
        	}
        	
        	return page;

        } catch (TimeoutException e) {
            // Dashboard page didn't load, check for confirmation dialog
            if (userAlreadyLoggedInDialog.isDisplayed()) {
                if (accept) {
                    userAlreadyLoggedInDialog.clickYesButton();                                   
                                        
                 // Wait for the dashboard page to load
                	wait.until(new UrlToBeAny(studentURL, teacherURL,adminURL,dataentryURL));
                	
                	ErudexPage page = null;
                	
                	logger.info(driver.getCurrentUrl());                
                	logger.info(driver.getTitle());
                	logger.info(driver.getWindowHandle());
                	logger.debug(driver.getPageSource());
                	
                	Role role = SessionUtils.getRole(driver);
                	String landingPage = SessionUtils.getLandingPage(driver);
                	
                	logger.info("User Role is ["+role.getRoleName()+"]");  
                	logger.info("User Landing Page is ["+landingPage +"]");  
                    
                	if (role == Role.TEACHER ) {        		
                		page =  new TeacherDashboardPage(driver);
                	}
                	else if (role == Role.STUDENT) {
                		page =  new StudentDashBoardPage(driver);
                	}
                	else if (role == Role.DATA_ENTRY) {
                		page =  new DataEntryDashboardPage(driver);
                	}
                	else if (role == Role.ADMIN) {
                		page =  new AdminDashboardPage(driver);
                	}
                	
                	return page;
                                        
                } else {
                    userAlreadyLoggedInDialog.clickNoButton();
                    PageFactory.initElements(driver, this); 
                    wait.until(ExpectedConditions.visibilityOf(login));
                    return this;
                }
            } else if (isInvalidLoginMessageDisplayed()) {
                return new LoginPage(driver); // Return back to login page with invalid login message
            } else {
                return this;
            }
        }
    }

    private boolean isInvalidLoginMessageDisplayed() {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 1);
            wait.until(ExpectedConditions.textToBePresentInElementLocated(By.cssSelector("div.error-msg"), "* Invalid username and/or password."));
            return true;
        } catch (TimeoutException e) {
            return false;
        }
    }

    
    

    /**
     * Verify that the page loaded completely.
     *
     * @return the LoginPage class instance.
     */
    public LoginPage verifyPageLoaded() {
        (new WebDriverWait(driver, timeout)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                return d.getPageSource().contains(pageLoadedText);
            }
        });
        return this;
    }

    /**
     * Verify that current page URL matches the expected URL.
     *
     * @return the LoginPage class instance.
     */
    public LoginPage verifyPageUrl() {
        (new WebDriverWait(driver, timeout)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                return d.getCurrentUrl().contains(pageUrl);
            }
        });
        return this;
    }
}
