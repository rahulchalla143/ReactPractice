package com.cts.service;

import java.sql.Date;
import java.util.List;

import com.cts.model.CompanyStocks;

public interface StocksService {

	public List<CompanyStocks> getStocks();
	
	public List<CompanyStocks> getCompanyStocksByDate(int companyCode1,int companyCode2,Date from,Date to);
}
