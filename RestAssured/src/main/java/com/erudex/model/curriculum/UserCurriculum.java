package com.erudex.model.curriculum;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class UserCurriculum {
    @JsonProperty("result")
    private boolean result;

    @JsonProperty("curriculum")
    private List<CurriculumData> curriculum;

    // Getters
    public boolean isResult() {
        return result;
    }

    public List<CurriculumData> getCurriculum() {
        return curriculum;
    }
}
