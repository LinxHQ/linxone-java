package com.linxone.service;

import java.util.ArrayList;
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

	public List<Invoice> getByCustomerIdAndDue(int idCustomer, int due){
		switch (due) {
			case 0:
				return invoiceRepo.findByCustomerIdAndDueDate(idCustomer, 0, 30);
			case 1:
				return invoiceRepo.findByCustomerIdAndDueDate(idCustomer, 31, 60);
			case 2:
				return invoiceRepo.findByCustomerIdAndDueDate(idCustomer, 61, 90);
			case 3:
				return invoiceRepo.findByCustomerIdAndDueDate(idCustomer, 90);
			default:
				return invoiceRepo.findByCustomerIdAndDueDate(idCustomer, 0);
		}
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

	public void deleteById(int id){
		invoiceRepo.deleteById(id);
	}
}
