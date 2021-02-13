package com.cts.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyWatchList {

	@Id
	@GeneratedValue
	private int id;
	@OneToOne
	private CompanyDetails company;
	@OneToOne
	private User user;
}
