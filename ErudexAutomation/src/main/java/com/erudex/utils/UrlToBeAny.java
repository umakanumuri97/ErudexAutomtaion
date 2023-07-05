package com.erudex.utils;

import java.util.Arrays;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;

public class UrlToBeAny implements ExpectedCondition<Boolean> {
    private List<String> expectedUrls;

    public UrlToBeAny(String... expectedUrls) {
        this.expectedUrls = Arrays.asList(expectedUrls);
    }

    @Override
    public Boolean apply(WebDriver driver) {
        String currentUrl = driver.getCurrentUrl();
        return expectedUrls.stream().anyMatch(url -> url.equals(currentUrl));
    }
}
