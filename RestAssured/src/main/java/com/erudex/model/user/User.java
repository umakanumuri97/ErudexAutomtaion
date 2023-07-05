package com.erudex.model.user;

import org.apache.logging.log4j.core.util.JsonUtils;

import com.erudex.utils.ErudexUtils;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {
    @JsonProperty("userId")
    private int userId;

    @JsonProperty("userName")
    private String userName;

  
}

