package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CurriculumData {
    @JsonProperty("_id")
    private String id;

    @JsonProperty("active")
    private boolean active;

    @JsonProperty("deleted")
    private boolean deleted;

    @JsonProperty("allChapters")
    private boolean allChapters;

    @JsonProperty("id")
    private int curriculumId;

    @JsonProperty("subjectId")
    private int subjectId;

    @JsonProperty("targetAssessmentGroup")
    private String targetAssessmentGroup;

    @JsonProperty("targetAssignmentGroup")
    private String targetAssignmentGroup;

    @JsonProperty("targetStudyGroup")
    private String targetStudyGroup;

    @JsonProperty("userSectionId")
    private int userSectionId;

    @JsonProperty("statusId")
    private int statusId;

    @JsonProperty("userGradeId")
    private int userGradeId;

    @JsonProperty("gradeId")
    private int gradeId;

    @JsonProperty("userId")
    private int userId;

    @JsonProperty("sectionId")
    private int sectionId;

    @JsonProperty("sectionName")
    private String sectionName;

    @JsonProperty("userName")
    private String userName;

    @JsonProperty("roleId")
    private int roleId;

    @JsonProperty("institutionId")
    private int institutionId;

    @JsonProperty("fullName")
    private String fullName;

    @JsonProperty("subject")
    private SubjectData subject;

    // Getters
    public String getId() {
        return id;
    }

    public boolean isActive() {
        return active;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public boolean isAllChapters() {
        return allChapters;
    }

    public int getCurriculumId() {
        return curriculumId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public String getTargetAssessmentGroup() {
        return targetAssessmentGroup;
    }

    public String getTargetAssignmentGroup() {
        return targetAssignmentGroup;
    }

    public String getTargetStudyGroup() {
        return targetStudyGroup;
    }

    public int getUserSectionId() {
        return userSectionId;
    }

    public int getStatusId() {
        return statusId;
    }

    public int getUserGradeId() {
        return userGradeId;
    }

    public int getGradeId() {
        return gradeId;
    }

    public int getUserId() {
        return userId;
    }

    public int getSectionId() {
        return sectionId;
    }

    public String getSectionName() {
        return sectionName;
    }

    public String getUserName() {
        return userName;
    }

    public int getRoleId() {
        return roleId;
    }

    public int getInstitutionId() {
        return institutionId;
    }

    public String getFullName() {
        return fullName;
    }

    public SubjectData getSubject() {
        return subject;
    }
}

