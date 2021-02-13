package com.cts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.model.LoginRequest;
import com.cts.model.User;
import com.cts.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User getUserByEmailIdAndPassword(LoginRequest loginRequest) {
		
		return userRepository.findUserByEmailIdAndPassword(loginRequest.getEmail(),loginRequest.getPassword());
	}

}
