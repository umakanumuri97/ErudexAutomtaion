package com.erudex.services.login;

import com.erudex.model.user.UserReqData;
import com.erudex.model.user.UserResponseData;

public interface ILoginService {
	
    static String baseURL ="https://demo-app.erudex.com/";
	
	static String loginPage = "login/index.html";
	
	static String validateuserAPI = "https://api-d.erudex.com/user/validateUser";
	
	static String logoutUserAPI = "https://api-d.erudex.com/user/userLogout";
	
	public String navigateToLoginPage();
	
	public UserResponseData login(UserReqData reqData);
	
	public UserResponseData login(UserReqData reqData,String erudexSession);
	
	public int logout(UserReqData reqData,String erudexSession);

}
