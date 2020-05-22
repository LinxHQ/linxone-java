package com.linxone.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.Customer;
import com.linxone.repository.CustomerRepository;

@Service
public class CustomerService {
	private static final Logger logger = LoggerFactory.getLogger(CustomerService.class);

	@Autowired CustomerRepository customerRepo;
	
	public List<Customer> getAll(){
		logger.info("Size: "+customerRepo.findAll().size());
		return customerRepo.findAll();
	}
	
	public Customer getById(int id) {
		return customerRepo.findById(id);
	}
	
	public Customer add(Customer customer) {
		Customer customer1 = customerRepo.save(customer);
		logger.info("Customer"+customer1.getName()+customer1.getId());
		return customer1;
	}
	
	public Customer update(Customer customer) {
		return customerRepo.save(customer);
	}
	
	public void delete(Customer customer) {
		customerRepo.delete(customer);
	}

}
