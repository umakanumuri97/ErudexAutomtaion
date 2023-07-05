package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentResource {
    @JsonProperty("id")
    private int id;

    @JsonProperty("uri")
    private String uri;

    @JsonProperty("name")
    private String name;

    @JsonProperty("uuid")
    private String uuid;

    @JsonProperty("likes")
    private int likes;

    @JsonProperty("altUri")
    private String altUri;

    @JsonProperty("rating")
    private int rating;

    @JsonProperty("altName")
    private String altName;

    @JsonProperty("concept")
    private String concept;

    @JsonProperty("storeId")
    private int storeId;

    @JsonProperty("nextUuid")
    private String nextUuid;

    @JsonProperty("encrypted")
    private boolean encrypted;

    @JsonProperty("sortOrder")
    private int sortOrder;

    @JsonProperty("description")
    private String description;

    @JsonProperty("previousUuid")
    private String previousUuid;

    @JsonProperty("thumbnailUri")
    private String thumbnailUri;

    @JsonProperty("uriFileExists")
    private boolean uriFileExists;

    @JsonProperty("chapterItemType")
    private String chapterItemType;

    @JsonProperty("displayCategory")
    private String displayCategory;

    @JsonProperty("altUriFileExists")
    private boolean altUriFileExists;

    @JsonProperty("contentResourceType")
    private ContentResourceType contentResourceType;

    @JsonProperty("altContentResourceType")
    private ContentResourceType altContentResourceType;

    // Getters
    public int getId() {
        return id;
    }

    public String getUri() {
        return uri;
    }

    public String getName() {
        return name;
    }

    public String getUuid() {
        return uuid;
    }

    public int getLikes() {
        return likes;
    }

    public String getAltUri() {
        return altUri;
    }

    public int getRating() {
        return rating;
    }

    public String getAltName() {
        return altName;
    }

    public String getConcept() {
        return concept;
    }

    public int getStoreId() {
        return storeId;
    }

    public String getNextUuid() {
        return nextUuid;
    }

    public boolean isEncrypted() {
        return encrypted;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public String getDescription() {
        return description;
    }

    public String getPreviousUuid() {
        return previousUuid;
    }

    public String getThumbnailUri() {
        return thumbnailUri;
    }

    public boolean isUriFileExists() {
        return uriFileExists;
    }

    public String getChapterItemType() {
        return chapterItemType;
    }

    public String getDisplayCategory() {
        return displayCategory;
    }

    public boolean isAltUriFileExists() {
        return altUriFileExists;
    }

    public ContentResourceType getContentResourceType() {
        return contentResourceType;
    }

    public ContentResourceType getAltContentResourceType() {
        return altContentResourceType;
    }
}

