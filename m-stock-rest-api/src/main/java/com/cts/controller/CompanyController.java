package com.cts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.CompanyDetails;
import com.cts.service.CompanyService;

@RestController
@CrossOrigin
@RequestMapping("/companies")
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	@GetMapping
	public List<CompanyDetails> getCompanies(){
		return companyService.getCompanies();
	}
}
