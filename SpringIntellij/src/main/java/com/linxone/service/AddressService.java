package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.Address;
import com.linxone.repository.AddressRepository;

@Service
public class AddressService {
	@Autowired AddressRepository addressRepo;
	
	public List<Address> getAll(){
		return addressRepo.findAll();
	}
	
	public Address getById(int id) {
		return addressRepo.findById(id);
	}
	
	public Address add(Address address) {
		return addressRepo.save(address);
	}
	
	public Address update(Address address) {
		return addressRepo.save(address);
	}
	
	public void delete(Address address) {
		addressRepo.delete(address);
	}

	public List<Address> getByCustomerId(int id){
		return addressRepo.findByCustomerId(id);
	}
}
