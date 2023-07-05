package com.erudex.model.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserPreferences {
	
	@JsonProperty("mobile.logout")
	private String mobileLogout;
	 
    @JsonProperty("liveclasses")
    private boolean liveClasses;

    @JsonProperty("chat.shutdown")
    private boolean chatShutdown;
    
    @JsonProperty("expire.mockTest")
    private boolean expireMockTest;

   
}

