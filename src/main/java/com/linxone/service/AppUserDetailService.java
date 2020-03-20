package com.linxone.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.linxone.entity.AppUserDetail;
import com.linxone.repository.AccountRepository;

@Service
public class AppUserDetailService implements UserDetailsService{
	@Autowired AccountRepository accountRepo;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return new AppUserDetail(accountRepo.findByUsername(username));
	}
	
	
}
