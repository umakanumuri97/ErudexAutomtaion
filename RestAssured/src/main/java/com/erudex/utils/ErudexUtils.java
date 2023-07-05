package com.erudex.utils;

import java.io.IOException;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.erudex.model.user.UserLoginErrors;
import com.erudex.model.user.UserResponseData;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.restassured.http.Headers;
import io.restassured.response.Response;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;

public class ErudexUtils {

	private static final Logger logger = LogManager.getLogger(ErudexUtils.class);

	public static Object getObject(String json, Class clz) {
		ObjectMapper objectMapper = new ObjectMapper();

		Object obj = null;

		try {
			obj = objectMapper.readValue(json, clz);
		} catch (JsonProcessingException jSonProcessEx) {
			// TODO Auto-generated catch block
			logger.error(jSonProcessEx.getMessage());
			logger.error("JSon [" + json + "]");
		}

		return obj;
	}

	public static String getJson(Object obj) {

		ObjectMapper objectMapper = new ObjectMapper();

		String json = "";

		try {
			json = objectMapper.writeValueAsString(obj);
		} catch (JsonProcessingException jSonProcessEx) {
			// TODO Auto-generated catch block
			logger.error(jSonProcessEx.getMessage());
			logger.error("Object [" + obj.getClass().getName() + "]" + "[" + obj + "]");
		}

		return json;
	}

	public static UserResponseData getUserResponseDataObject(String responseBody,
															 Map<String,String> headers,
															 Map<String, String> cooKies,
															 int statusCode, 
															 Class<?> clz) {

		ObjectMapper objectMapper = new ObjectMapper();
		
		try {
			JsonNode rootNode = objectMapper.readTree(responseBody);
			if (rootNode.has("error")) {

				UserLoginErrors userLoginErrors = UserLoginErrors.builder().error(rootNode.get("error").asText())
						.errorMsg(rootNode.get("errorMessage").asText()).msg(rootNode.get("message").asText()).build();
				return UserResponseData.builder().result(false).error(userLoginErrors).cookies(cooKies).headers(headers)
						.build();
			} else {

				UserResponseData userResponseData = (UserResponseData) objectMapper.readValue(responseBody,
						UserResponseData.class);

				return userResponseData.builder().userInfo(userResponseData.getUserInfo()).headers(headers)
						.cookies(cooKies).result(true).statusCode(statusCode).sessionId(userResponseData.getSessionId())
						.build();

			}
		} catch (JsonProcessingException jSonProcessEx) {
			logger.error(jSonProcessEx.getMessage());
			logger.error("Response JSon [" + responseBody + "]");
			return null;
		}

	}

	public static Object[][] readDataFromExcel(String filePath, String sheetName) throws IOException {

		FileInputStream fis = new FileInputStream(filePath);
		Workbook workbook = new XSSFWorkbook(fis);
		Sheet sheet = workbook.getSheet(sheetName);

		int rowCount = sheet.getLastRowNum();
		int colCount = 2;

		Object[][] data = new Object[rowCount][colCount];

		for (int i = 0; i < rowCount; i++) {
			Row row = sheet.getRow(i + 1);
			for (int j = 0; j < colCount; j++) {
				Cell cell = row.getCell(j);
				data[i][j] = cell.toString();
			}
		}

		workbook.close();
		fis.close();

		return data;
	}

}
