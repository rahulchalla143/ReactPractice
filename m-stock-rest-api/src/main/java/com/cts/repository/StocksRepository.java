package com.cts.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.model.CompanyStocks;

public interface StocksRepository extends JpaRepository<CompanyStocks, Integer> {

	@Query("from CompanyStocks where (company.companyId=:ccode1 or company.companyId=:ccode2) and date between :from and :to order by date")
	List<CompanyStocks> getCompanyStocksByDate(@Param("ccode1") int companyCode1,@Param("ccode2") int companyCode2,
			@Param("from") Date from,@Param("to") Date to);
}
