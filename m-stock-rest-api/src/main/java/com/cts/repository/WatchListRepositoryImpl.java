package com.cts.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.cts.model.CompanyDetails;
import com.cts.model.CompanyWatchList;
import com.cts.model.User;
import com.cts.model.WatchListRequest;
@Repository
public class WatchListRepositoryImpl implements WatchListRepository{

	@PersistenceContext
	private EntityManager em;
	@Override
	public void StoreWatchList(WatchListRequest request) {
		
		CompanyWatchList watchList=new CompanyWatchList();
		CompanyDetails company=em.find(CompanyDetails.class, request.getCompanyId());
		watchList.setCompany(company);
		User  user=em.find(User.class,request.getUserId());
		watchList.setUser(user);
		
		em.persist(watchList);
	
		
		
		
	}
	@Override
	public List<CompanyWatchList> getWatchList() {
		
		TypedQuery<CompanyWatchList> query=em.createQuery("from CompanyWatchList", CompanyWatchList.class);
		
		return query.getResultList();
		
	}
	@Override
	public List<CompanyWatchList> getWatchListByUser(int userId) {
		
		TypedQuery<CompanyWatchList> query=em.createQuery("from CompanyWatchList where user.id=:userId",CompanyWatchList.class);
		query.setParameter("userId", userId);
		return query.getResultList();
	}
	
	@Override
	public List<CompanyWatchList> removeWatchListByUser(WatchListRequest request) {
		
		CompanyWatchList watchList=new CompanyWatchList();
		CompanyDetails company=em.find(CompanyDetails.class, request.getCompanyId());
		watchList.setCompany(company);
		User  user=em.find(User.class,request.getUserId());
		watchList.setUser(user);
		em.remove(watchList);
		return getWatchListByUser(request.getUserId());
		
	}
	
	

}
