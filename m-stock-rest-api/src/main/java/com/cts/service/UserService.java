package com.cts.service;

import com.cts.model.LoginRequest;
import com.cts.model.User;

public interface UserService {

	public User getUserByEmailIdAndPassword(LoginRequest loginRequest);
}
