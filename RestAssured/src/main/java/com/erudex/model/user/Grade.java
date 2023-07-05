package com.erudex.model.user;



import com.erudex.model.curriculum.Curriculum;
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
public class Grade {
    @JsonProperty("id")
    private int id;

    @JsonProperty("number")
    private int number;

    @JsonProperty("description")
    private String description;

    @JsonProperty("curriculum")
    private Curriculum curriculum;
   
}

