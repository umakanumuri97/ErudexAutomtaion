package com.erudex.utils;


public enum Role {
    STUDENT("Student"),
    TEACHER("Teacher"),
    ADMIN("Organization Admin"),
    DATA_ENTRY("Organization Data Entry");

    private final String roleName;

    private Role(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }
    
    public static Role getRole(String roleName) {
    	
    	if (STUDENT.getRoleName().equals(roleName)) {
    		return STUDENT;
    	}
    	
    	if (TEACHER.getRoleName().equals(roleName)) {
    		return TEACHER;
    	}
    	
    	if (ADMIN.getRoleName().equals(roleName)) {
    		return ADMIN;
    	}
    	
    	if (DATA_ENTRY.getRoleName().equals(roleName)) {
    		return DATA_ENTRY;
    	}
    	
    	return null;
    }
    
    
    
   
}
