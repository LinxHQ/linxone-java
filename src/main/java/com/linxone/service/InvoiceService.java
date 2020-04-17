package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.Invoice;
import com.linxone.repository.InvoiceRepository;

@Service
public class InvoiceService {
	@Autowired InvoiceRepository invoiceRepo;
	
	public List<Invoice> getAll(){
		return invoiceRepo.findAll();
	}
	
	public Invoice getById(int id) {
		return invoiceRepo.findById(id);
	}

	public List<Invoice> getByCustomerId(int id){
		return invoiceRepo.findByCustomerId(id);
	}
	
	public Invoice add(Invoice invoice) {
		return invoiceRepo.save(invoice);
	}
	
	public Invoice update(Invoice invoice) {
		return invoiceRepo.save(invoice);
	}
	
	public void delete(Invoice invoice) {
		invoiceRepo.delete(invoice);
	}
}
