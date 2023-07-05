package com.erudex.model.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL) // Include only non-null properties during serialization
public class Role {
    @JsonProperty("id")
    private int id;

    @JsonProperty("roleName")
    private String roleName;

    @JsonProperty("landingPage")
    private String landingPage;

    @JsonProperty("organizationId")
    private Object organizationId;

    @JsonPOJOBuilder(withPrefix = "")
    public static class RoleBuilder {
    }
   
}


