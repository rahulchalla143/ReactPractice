package com.cts.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.CompanyStocks;
import com.cts.service.StocksService;

@RestController
@RequestMapping("/stocks")
public class StocksController {

	@Autowired
	private StocksService stocksService;
	@GetMapping
	public List<CompanyStocks> getStocks(){
		
		return stocksService.getStocks();
	}
	@GetMapping("/compare-performance")
	public List<CompanyStocks> getCompanyStocksByDate(@RequestParam int companyCode1,@RequestParam int companyCode2, 
			@RequestParam Date from,@RequestParam Date to){
		
		return stocksService.getCompanyStocksByDate(companyCode1, companyCode2, from, to);
	}
}
