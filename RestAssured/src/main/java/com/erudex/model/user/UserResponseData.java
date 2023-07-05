package com.erudex.model.user;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.restassured.http.Headers;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor // Add default constructor
@AllArgsConstructor // Add constructor with all properties
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserResponseData {
	
	@JsonProperty("headers")
	private Map<String,String> headers;
	
	private Map<String,String> cookies;
	
    @JsonProperty("result")
    private boolean result;
    
    @JsonProperty("statusCode")
    private int statusCode;

    @JsonProperty("error")
    private UserLoginErrors error;

    @JsonProperty("userInfo")
    private UserInfo userInfo;

    @JsonProperty("roleId")
    private int roleId;

    @JsonProperty("competitiveModulePaidUser")
    private boolean competitiveModulePaidUser;

    @JsonProperty("sessionId")
    private String sessionId;

    @JsonProperty("offlineSessionExpireTime")
    private long offlineSessionExpireTime;
    
    public static UserResponseData from(UserResponseData source) {
        return UserResponseData.builder()
                .result(source.isResult())
                .error(source.getError())
                .cookies(source.getCookies())
                .competitiveModulePaidUser(source.isCompetitiveModulePaidUser())
                .roleId(source.getRoleId())
                .sessionId(source.getSessionId())
                .userInfo(source.getUserInfo())
                .build();
    }
}
