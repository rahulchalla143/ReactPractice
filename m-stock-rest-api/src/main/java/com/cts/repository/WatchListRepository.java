package com.cts.repository;

import java.util.List;

import com.cts.model.CompanyWatchList;
import com.cts.model.WatchListRequest;

public interface WatchListRepository {

	void StoreWatchList(WatchListRequest request);
	List<CompanyWatchList> getWatchList();
	List<CompanyWatchList> getWatchListByUser(int userId);
	List<CompanyWatchList> removeWatchListByUser(WatchListRequest request);
}
