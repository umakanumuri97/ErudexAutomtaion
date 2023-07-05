package com.erudex.services.login.raimpl;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.erudex.model.user.SessionReqData;
import com.erudex.model.user.UserInfo;
import com.erudex.model.user.UserReqData;
import com.erudex.model.user.UserResponseData;
import com.erudex.services.login.ILoginService;
import com.erudex.utils.ErudexUtils;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Header;
import io.restassured.response.Response;

public class LoginServiceRAImpl implements ILoginService {

	private static final Logger logger = LogManager.getLogger(LoginServiceRAImpl.class);

	public String navigateToLoginPage() {

		Response response = given().when().get(baseURL + loginPage).thenReturn();

		String strResponse = response.asString();

		return strResponse;
	}

	public UserResponseData login(UserReqData reqData) {

		// Create the JSON payload string
		String validateUserJSon = ErudexUtils.getJson(reqData);

		// Send a POST request with the payload
		Response response = RestAssured.given().contentType(ContentType.JSON).body(validateUserJSon)
				.post(validateuserAPI);

		String responseBody = response.getBody().asString();

		Map<String, String> headersMap = new HashMap<>();
		for (Header header : response.getHeaders()) {
			headersMap.put(header.getName(), header.getValue());
		}

		Map<String, String> cookiesMap = response.getCookies();

		int statusCode = response.getStatusCode();

		return ErudexUtils.getUserResponseDataObject(responseBody, headersMap, cookiesMap, statusCode,
				UserResponseData.class);
	}

	public UserResponseData login(UserReqData reqData, String erudexSession) {

		// Create the JSON payload string
		String validateUserSessionJson = ErudexUtils.getJson(SessionReqData.builder().sessionId(erudexSession).build());

		// Send a POST request with the payload
		Response response = RestAssured.given().contentType(ContentType.JSON).body(validateUserSessionJson)
				// .log().all() // Print request details
				.post(validateuserAPI);

		UserInfo userInfo = (UserInfo) ErudexUtils.getObject(response.getBody().asString(), UserInfo.class);

		Map<String, String> headersMap = new HashMap<>();
		for (Header header : response.getHeaders()) {
			headersMap.put(header.getName(), header.getValue());
		}

		Map<String, String> cookiesMap = response.getCookies();

		int statusCode = response.getStatusCode();

		UserResponseData userResponseData = UserResponseData.builder().headers(headersMap).cookies(cookiesMap)
				.sessionId(erudexSession).statusCode(statusCode).result(true).userInfo(userInfo).build();

		return userResponseData;

	}

	public int logout(UserReqData reqData, String erudexSession) {

		// Create the JSON payload string
		String validateUserSessionJson = ErudexUtils.getJson(SessionReqData.builder().sessionId(erudexSession).build());

		// Send a POST request with the payload
		Response response = RestAssured.given().contentType(ContentType.JSON).body(validateUserSessionJson)
				// .log().all() // Print request details
				.post(validateuserAPI);

		int statusCode = response.getStatusCode();

		return statusCode;

	}

}
