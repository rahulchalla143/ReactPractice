package com.cts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.CompanyWatchList;
import com.cts.model.WatchListRequest;
import com.cts.service.WatchListService;

@CrossOrigin
@RestController
@RequestMapping("/watchList")
public class WatchListController {

	@Autowired
	private WatchListService watchListService;
	@PostMapping
	public void addWatchList(@RequestBody WatchListRequest request) {
		
		watchListService.storeWatchList(request);
	}
	@GetMapping
	public List<CompanyWatchList> getWatchList(){
		return watchListService.getWatchList();
	}
	
	@GetMapping("/{userId}")
	public List<CompanyWatchList> getWatchListByUser(@PathVariable int userId){
		return watchListService.getWatchListByUser(userId);
	}
	
	@DeleteMapping()
	public List<CompanyWatchList> removeWatchListByUser(@RequestBody WatchListRequest request){
		System.out.println("|||||||||||||");
		return watchListService.removeWatchListByUser(request);
	}
}
