package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.model.CompanyDetails;

public interface CompanyRepository extends JpaRepository<CompanyDetails, Integer>{

}
