package com.cts.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDetails {
	@Id
	private int companyId;
	private String companyName;
	private String description;
	private int currentStockPrice;
}
