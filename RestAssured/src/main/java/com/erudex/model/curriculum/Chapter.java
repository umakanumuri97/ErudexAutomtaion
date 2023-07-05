package com.erudex.model.curriculum;

import java.util.List;

import com.erudex.model.user.Role;
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
public class Chapter {
    @JsonProperty("id")
    private int id;

    @JsonProperty("subjectId")
    private int subjectId;

    @JsonProperty("number")
    private String number;

    @JsonProperty("name")
    private String name;

    @JsonProperty("altName")
    private String altName;

    @JsonProperty("description")
    private String description;

    @JsonProperty("sortOrder")
    private int sortOrder;

    @JsonProperty("contentResources")
    private List<ContentResource> contentResources;

    @JsonProperty("topics")
    private List<Topic> topics;

  
}
