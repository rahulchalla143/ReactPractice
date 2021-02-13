package com.cts.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.model.CompanyWatchList;
import com.cts.model.WatchListRequest;
import com.cts.repository.WatchListRepository;
@Service
public class WatchListServiceImpl implements WatchListService{

	@Autowired
	private WatchListRepository watchListRepository;
	@Override
	@Transactional
	public void storeWatchList(WatchListRequest request) {
		
		watchListRepository.StoreWatchList(request);
	}
	
	public List<CompanyWatchList> getWatchList(){
		
		return watchListRepository.getWatchList();
	}

	@Override
	public List<CompanyWatchList> getWatchListByUser(int userId) {
		// TODO Auto-generated method stub
		return watchListRepository.getWatchListByUser(userId);
	}

	@Override
	public List<CompanyWatchList> removeWatchListByUser(WatchListRequest request) {
		// TODO Auto-generated method stub
		return watchListRepository.removeWatchListByUser(request);
	}

}
