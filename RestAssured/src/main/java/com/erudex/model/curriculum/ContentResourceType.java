package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentResourceType {
    @JsonProperty("type")
    private String type;

    @JsonProperty("description")
    private String description;

    @JsonProperty("displayType")
    private String displayType;

    // Getters
    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public String getDisplayType() {
        return displayType;
    }
}

