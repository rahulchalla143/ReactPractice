package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("from User where email=:email and password=:pass")
	public User findUserByEmailIdAndPassword(@Param("email") String email,@Param("pass") String password);
}
