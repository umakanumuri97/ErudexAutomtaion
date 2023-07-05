package com.erudex.model.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserLoginErrors {
    private final String error;
    private final String errorMsg;
    private final String msg;

    public static final UserLoginErrors ACTIVE_USER_SESSION_EXISTS =
            UserLoginErrors.builder()
                    .error("activeUserSessionExists")
                    .errorMsg("An active session for this user already exists.")
                    .msg("An active session for this user already exists.")
                    .build();
    
    public static final UserLoginErrors INVALID_USER_NAME_PASSWORD =
            UserLoginErrors.builder()
                    .error("invalidUsernamePassword")
                    .errorMsg("Invalid username/password")
                    .msg("Invalid username/password")
                    .build();
}

