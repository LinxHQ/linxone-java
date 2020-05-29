package com.linxone.service;

import java.util.List;

import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.InvoiceItem;
import com.linxone.repository.InvoiceItemRepository;

@Service
public class InvoiceItemService {
	@Autowired InvoiceItemRepository invoiceItemRepo;
	
	public List<InvoiceItem> getAll(){
		return invoiceItemRepo.findAll();
	}
	
	public InvoiceItem getById(int id) {
		return invoiceItemRepo.findById(id);
	}

	public List<InvoiceItem> getByIdInvoice(int id){
		return invoiceItemRepo.findByInvoice_Id(id);
	}

	public InvoiceItem add(InvoiceItem invoiceItem) {
		return invoiceItemRepo.save(invoiceItem);
	}
	
	public InvoiceItem update(InvoiceItem invoiceItem) {
		return invoiceItemRepo.save(invoiceItem);
	}
	
	public void delete(InvoiceItem invoiceItem) {
		invoiceItemRepo.delete(invoiceItem);
	}
	public void delete(int id) {
		invoiceItemRepo.deleteById(id);
	}
}
