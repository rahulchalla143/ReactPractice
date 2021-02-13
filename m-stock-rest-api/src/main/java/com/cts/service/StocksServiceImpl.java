package com.cts.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.model.CompanyStocks;
import com.cts.repository.StocksRepository;
@Service
public class StocksServiceImpl implements StocksService {

	@Autowired
	private StocksRepository stocksRepository;
	@Override
	public List<CompanyStocks> getStocks() {
		
		return stocksRepository.findAll();
	}
	@Override
	
	public List<CompanyStocks> getCompanyStocksByDate(int companyCode1, int companyCode2, Date from,
			Date to) {
		
		return stocksRepository.getCompanyStocksByDate(companyCode1, companyCode2, from, to);
	}

	
}
