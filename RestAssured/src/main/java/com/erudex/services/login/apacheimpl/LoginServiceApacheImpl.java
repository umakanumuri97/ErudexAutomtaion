package com.erudex.services.login.apacheimpl;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.erudex.model.user.SessionReqData;
import com.erudex.model.user.UserInfo;
import com.erudex.model.user.UserReqData;
import com.erudex.model.user.UserResponseData;
import com.erudex.services.login.ILoginService;
import com.erudex.utils.ErudexUtils;

public class LoginServiceApacheImpl implements ILoginService {

	private static final Logger logger = LogManager.getLogger(LoginServiceApacheImpl.class);

	private static final String baseURL = "https://demo-app.erudex.com/";
	private static final String loginPage = "login/index.html";
	private static final String validateuserAPI = "https://api-d.erudex.com/user/validateUser";

	public String navigateToLoginPage() {
		
	    CloseableHttpClient httpClient = HttpClients.createDefault();
	    
	    HttpGet httpGet = new HttpGet(baseURL + loginPage);

	    String strResponse = "";

	    try {
	        HttpResponse response = httpClient.execute(httpGet);
	        HttpEntity entity = response.getEntity();
	        strResponse = EntityUtils.toString(entity);
	    } catch (ClientProtocolException e) {
	        logger.error("[ClientProtocolException] " + e.getMessage());
	    } catch (IOException e) {
	        logger.error("[IOException] " + e.getMessage());
	    } finally {
	        try {
	            httpClient.close();
	        } catch (IOException e) {
	            logger.error("[IOException] Failed to close HttpClient: " + e.getMessage());
	        }
	    }

	    return strResponse;
	}

	public UserResponseData login(UserReqData reqData) {

		String validateUserJSon = ErudexUtils.getJson(reqData);

		HttpClient httpClient = HttpClientBuilder.create().build();

		HttpPost httpPost = new HttpPost(validateuserAPI);

		httpPost.setHeader("Content-Type", "application/json");

		HttpResponse response = null;
		String responseBody = null;

		try {
			StringEntity se = new StringEntity(validateUserJSon);

			httpPost.setEntity(se);

			// httpPost.setEntity(new UrlEncodedFormEntity(params));

			response = httpClient.execute(httpPost);

			responseBody = EntityUtils.toString(response.getEntity());

		} catch (UnsupportedEncodingException unSupportedCodingEx) {

			logger.error("[" + unSupportedCodingEx + "]" + "[" + unSupportedCodingEx.getMessage() + "]");

		} catch (IOException ioEx) {

			logger.error("[" + ioEx + "]" + "[" + ioEx.getMessage() + "]");
		}

		// Get Headers Map
		Header[] headers = response.getAllHeaders();
		Map<String, String> headerMap = new HashMap<>();

		for (Header header : headers) {
			headerMap.put(header.getName(), header.getValue());
		}

		// Retrieve the cookies from the response headers and store them in a map
		Map<String, String> cookiesMap = new HashMap<>();
		headers = response.getHeaders("Set-Cookie");
		for (Header header : headers) {
			String[] cookieParts = header.getValue().split(";")[0].split("=");
			String name = cookieParts[0].trim();
			String value = cookieParts[1].trim();
			cookiesMap.put(name, value);
		}

		// Get the status code from the response
		StatusLine statusLine = response.getStatusLine();
		int statusCode = statusLine.getStatusCode();

		return ErudexUtils.getUserResponseDataObject(responseBody, headerMap, cookiesMap, statusCode,
				UserResponseData.class);
	}

	public UserResponseData login(UserReqData reqData, String erudexSession) {

		String validateUserSessionJson = ErudexUtils.getJson(SessionReqData.builder().sessionId(erudexSession).build());

		HttpClient httpClient = HttpClientBuilder.create().build();

		HttpPost httpPost = new HttpPost(validateuserAPI);

		httpPost.setHeader("Content-Type", "application/json");

		HttpResponse response = null;
		String responseBody = null;

		try {

			StringEntity se = new StringEntity(validateUserSessionJson);

			httpPost.setEntity(se);

			response = httpClient.execute(httpPost);

			responseBody = EntityUtils.toString(response.getEntity());

		} catch (UnsupportedEncodingException unSupportedCodingEx) {

			logger.error("[" + unSupportedCodingEx + "]" + "[" + unSupportedCodingEx.getMessage() + "]");

		} catch (IOException ioEx) {

			logger.error("[" + ioEx + "]" + "[" + ioEx.getMessage() + "]");
		}

		UserInfo userInfo = (UserInfo) ErudexUtils.getObject(responseBody, UserInfo.class);

		// Get Headers Map
		Header[] headers = response.getAllHeaders();
		Map<String, String> headerMap = new HashMap<>();

		for (Header header : headers) {
			headerMap.put(header.getName(), header.getValue());
		}

		// Retrieve the cookies from the response headers and store them in a map
		Map<String, String> cookiesMap = new HashMap<>();
		headers = response.getHeaders("Set-Cookie");
		for (Header header : headers) {
			String[] cookieParts = header.getValue().split(";")[0].split("=");
			String name = cookieParts[0].trim();
			String value = cookieParts[1].trim();
			cookiesMap.put(name, value);
		}

		// Get the status code from the response
		StatusLine statusLine = response.getStatusLine();
		int statusCode = statusLine.getStatusCode();

		UserResponseData userResponseData = UserResponseData.builder().headers(headerMap).cookies(cookiesMap)
				.sessionId(erudexSession).statusCode(statusCode).result(true).userInfo(userInfo).build();
		return userResponseData;
	}

	public int logout(UserReqData reqData, String erudexSession) {

		String validateUserSessionJson = ErudexUtils.getJson(SessionReqData.builder().sessionId(erudexSession).build());

		HttpClient httpClient = HttpClientBuilder.create().build();

		HttpPost httpPost = new HttpPost(validateuserAPI);

		httpPost.setHeader("Content-Type", "application/json");

		HttpResponse response = null;

		try {

			StringEntity se = new StringEntity(validateUserSessionJson);

			httpPost.setEntity(se);

			response = httpClient.execute(httpPost);

		} catch (UnsupportedEncodingException unSupportedCodingEx) {

			logger.error("[" + unSupportedCodingEx + "]" + "[" + unSupportedCodingEx.getMessage() + "]");

		} catch (IOException ioEx) {

			logger.error("[" + ioEx + "]" + "[" + ioEx.getMessage() + "]");
		}

		// Get the status code from the response
		StatusLine statusLine = response.getStatusLine();
		int statusCode = statusLine.getStatusCode();

		return statusCode;
	}
}
