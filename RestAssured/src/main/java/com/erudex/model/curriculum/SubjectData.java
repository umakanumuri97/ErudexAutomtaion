package com.erudex.model.curriculum;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubjectData {
    @JsonProperty("_id")
    private String id;

    @JsonProperty("id")
    private int subjectId;

    @JsonProperty("grade")
    private GradeData grade;

    @JsonProperty("name")
    private String name;

    @JsonProperty("altName")
    private String altName;

    @JsonProperty("description")
    private String description;

    @JsonProperty("iconType")
    private String iconType;

    @JsonProperty("sortOrder")
    private int sortOrder;

    @JsonProperty("storeId")
    private int storeId;

    @JsonProperty("accessLevelId")
    private int accessLevelId;

    @JsonProperty("contentResources")
    private List<ContentResource> contentResources;

    @JsonProperty("chapters")
    private List<Chapter> chapters;

    // Getters
    public String getId() {
        return id;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public GradeData getGrade() {
        return grade;
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

    public String getIconType() {
        return iconType;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public int getStoreId() {
        return storeId;
    }

    public int getAccessLevelId() {
        return accessLevelId;
    }

    public List<ContentResource> getContentResources() {
        return contentResources;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }
}
