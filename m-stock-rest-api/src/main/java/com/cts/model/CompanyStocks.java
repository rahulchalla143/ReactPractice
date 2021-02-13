package com.cts.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class CompanyStocks {

	@Id
	private int id;
	private Date date;
	private int stockPrice;
	@OneToOne
	private CompanyDetails company;
}
