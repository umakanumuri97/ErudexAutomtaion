package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GradeData {
    @JsonProperty("description")
    private String description;

    @JsonProperty("id")
    private int id;

    @JsonProperty("number")
    private int number;

    // Getters
    public String getDescription() {
        return description;
    }

    public int getId() {
        return id;
    }

    public int getNumber() {
        return number;
    }
}
