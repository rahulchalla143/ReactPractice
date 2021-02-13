package com.cts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.model.CompanyDetails;
import com.cts.repository.CompanyRepository;
@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	private CompanyRepository companyRepository;
	@Override
	public List<CompanyDetails> getCompanies() {
		
		return companyRepository.findAll();
	}

}
