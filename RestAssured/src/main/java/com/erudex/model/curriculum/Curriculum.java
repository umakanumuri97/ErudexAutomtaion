package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Curriculum {
    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;

    @JsonProperty("uuid")
    private String uuid;

    @JsonProperty("regular")
    private boolean regular;

    @JsonProperty("competitive")
    private boolean competitive;

    @JsonProperty("language")
    private String language;

    @JsonProperty("shortName")
    private String shortName;

    @JsonProperty("competitiveName")
    private String competitiveName;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getUuid() {
        return uuid;
    }

    public boolean isRegular() {
        return regular;
    }

    public boolean isCompetitive() {
        return competitive;
    }

    public String getLanguage() {
        return language;
    }

    public String getShortName() {
        return shortName;
    }

    public String getCompetitiveName() {
        return competitiveName;
    }
}

