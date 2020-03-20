package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.InvoiceTotal;
import com.linxone.repository.InvoiceTotalRepository;

@Service
public class InvoiceTotalService {
	@Autowired InvoiceTotalRepository invoiceTotalRepo; 
	
	public List<InvoiceTotal> getAll(){
		return invoiceTotalRepo.findAll();
	}
	
	public InvoiceTotal getById(int id) {
		return invoiceTotalRepo.findById(id);
	}
	
	public InvoiceTotal add(InvoiceTotal invoiceTotal) {
		return invoiceTotalRepo.save(invoiceTotal);
	}
	
	public InvoiceTotal update(InvoiceTotal invoiceTotal) {
		return invoiceTotalRepo.save(invoiceTotal);
	}
	
	public void delete(InvoiceTotal invoiceTotal) {
		invoiceTotalRepo.delete(invoiceTotal);
	}
}
