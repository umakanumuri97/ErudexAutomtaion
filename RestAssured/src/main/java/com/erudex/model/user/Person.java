package com.erudex.model.user;

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
public class Person {
    @JsonProperty("id")
    private int id;

    @JsonProperty("sex")
    private String sex;

    @JsonProperty("emails")
    private List<Object> emails;

    @JsonProperty("phones")
    private List<Object> phones;

    @JsonProperty("lastName")
    private String lastName;

    @JsonProperty("addresses")
    private List<Object> addresses;

    @JsonProperty("firstName")
    private String firstName;

    @JsonProperty("middleName")
    private Object middleName;

   
}

