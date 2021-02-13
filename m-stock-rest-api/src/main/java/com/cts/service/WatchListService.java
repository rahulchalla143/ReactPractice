package com.cts.service;

import java.util.List;

import com.cts.model.CompanyWatchList;
import com.cts.model.WatchListRequest;

public interface WatchListService {

	void storeWatchList(WatchListRequest request);
	List<CompanyWatchList> getWatchList();
	List<CompanyWatchList> getWatchListByUser(int userId);
	List<CompanyWatchList> removeWatchListByUser(WatchListRequest request);
}
