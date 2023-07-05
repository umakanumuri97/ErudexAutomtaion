package com.erudex.model.curriculum;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Topic {
    @JsonProperty("id")
    private int id;

    @JsonProperty("chapterId")
    private int chapterId;

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

    @JsonProperty("subtopics")
    private List<Subtopic> subtopics;

    // Getters
    public int getId() {
        return id;
    }

    public int getChapterId() {
        return chapterId;
    }

    public String getNumber() {
        return number;
    }

    public String getName() {
        return name;
    }

    public String getAltName() {
        return altName;
    }

    public String getDescription() {
        return description;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public List<ContentResource> getContentResources() {
        return contentResources;
    }

    public List<Subtopic> getSubtopics() {
        return subtopics;
    }
}
