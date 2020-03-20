package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.Tax;
import com.linxone.repository.TaxRepository;

@Service
public class TaxService {
	@Autowired TaxRepository taxRepo;
	
	public List<Tax> getAll(){
		return taxRepo.findAll();
	}
	
	public Tax getById(int id) {
		return taxRepo.findById(id);
	}
	
	public Tax add(Tax tax) {
		return taxRepo.save(tax);
	}
	
	public Tax update(Tax tax) {
		return taxRepo.save(tax);
	}
	
	public void delete(Tax tax) {
		taxRepo.delete(tax);
	}
}
