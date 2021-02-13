package com.cts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.exception.UserNotFoundException;
import com.cts.model.LoginRequest;
import com.cts.model.User;
import com.cts.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class LoginController {

	@Autowired
	private UserService userService;
	@PostMapping
	public User getUser(@RequestBody LoginRequest loginRequest) {
		
		User user= userService.getUserByEmailIdAndPassword(loginRequest);
		if(user==null) {
			throw new UserNotFoundException("Invalid Credentials");
		}
		return user;
	}
}
