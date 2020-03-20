package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.Customer;
import com.linxone.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired CustomerRepository customerRepo;
	
	public List<Customer> getAll(){
		return customerRepo.findAll();
	}
	
	public Customer getById(int id) {
		return customerRepo.findById(id);
	}
	
	public Customer add(Customer customer) {
		return customerRepo.save(customer);
	}
	
	public Customer update(Customer customer) {
		return customerRepo.save(customer);
	}
	
	public void delete(Customer customer) {
		customerRepo.delete(customer);
	}
}
