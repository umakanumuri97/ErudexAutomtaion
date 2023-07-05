package com.erudex.model.user;

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
public class UserSection {
    @JsonProperty("id")
    private int id;

    @JsonProperty("startDate")
    private long startDate;

    @JsonProperty("endDate")
    private long endDate;

    @JsonProperty("gradeStatus")
    private String gradeStatus;

    @JsonProperty("statusId")
    private int statusId;

    @JsonProperty("userGradeId")
    private int userGradeId;

    @JsonProperty("section")
    private Section section;

    @JsonProperty("sectionId")
    private int sectionId;

    @JsonProperty("userId")
    private int userId;

    @JsonProperty("gradeId")
    private int gradeId;

    @JsonProperty("roleId")
    private int roleId;

    @JsonProperty("userName")
    private String userName;

    @JsonProperty("institutionId")
    private int institutionId;

    @JsonProperty("fullName")
    private String fullName;

    @JsonProperty("paymentStatus")
    private String paymentStatus;

    @JsonProperty("paymentAmount")
    private int paymentAmount;

    @JsonProperty("paymentUrl")
    private Object paymentUrl;

   
}
