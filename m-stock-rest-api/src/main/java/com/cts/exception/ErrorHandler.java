package com.cts.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

	@ExceptionHandler({UserNotFoundException.class})
	public ResponseEntity<String> handleUserNotFound(Exception ex){
		
		return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
	}
}
