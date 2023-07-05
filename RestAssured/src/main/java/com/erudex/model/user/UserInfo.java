package com.erudex.model.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserInfo {
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("userId")
    private int userId;

    @JsonProperty("omrId")
    private Object omrId;

    @JsonProperty("roles")
    private List<Role> roles;

    @JsonProperty("route")
    private Object route;

    @JsonProperty("person")
    private Person person;

    @JsonProperty("fullName")
    private String fullName;

    @JsonProperty("isActive")
    private boolean isActive;

    @JsonProperty("userName")
    private String userName;

    @JsonProperty("appVersion")
    private Object appVersion;

    @JsonProperty("erudexUser")
    private boolean erudexUser;

    @JsonProperty("institution")
    private Institution institution;

    @JsonProperty("isPortalUser")
    private boolean isPortalUser;

    @JsonProperty("lastSyncDate")
    private Object lastSyncDate;

    @JsonProperty("onErudexServer")
    private boolean onErudexServer;

    @JsonProperty("userPreferences")
    private UserPreferences userPreferences;

    @JsonProperty("erudexInstitutionId")
    private int erudexInstitutionId;

    @JsonProperty("erudexOrganizationId")
    private int erudexOrganizationId;

    @JsonProperty("userGrades")
    private List<UserGrade> userGrades;

    @JsonProperty("token")
    private String token;

    @JsonProperty("subdomain")
    private String subdomain;

    @JsonProperty("storeIds")
    private List<Integer> storeIds;

    @JsonProperty("ownerStoreId")
    private int ownerStoreId;

    @JsonProperty("isOrganization")
    private boolean isOrganization;

    @JsonProperty("phone")
    private String phone;

    @JsonProperty("email")
    private String email;

    @JsonProperty("forErudex")
    private boolean forErudex;

    @JsonProperty("reportsAvailableCurriculums")
    private List<String> reportsAvailableCurriculums;

   
}
