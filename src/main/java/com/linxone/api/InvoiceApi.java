package com.linxone.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.linxone.entity.Invoice;
import com.linxone.service.InvoiceService;

@RestController
@RequestMapping(value = "/api/invoice")
public class InvoiceApi {
	@Autowired InvoiceService invoiceSer;
	
	@GetMapping(value = {"/get","/"})
	public ResponseEntity<List<Invoice>> get(){
		return new ResponseEntity<>(invoiceSer.getAll(), HttpStatus.OK);
	}

	@GetMapping(value = "/getByIdCustomer/{id}")
	public ResponseEntity<List<Invoice>> getByIdCustomer(@PathVariable(name = "id") int id){
		return new ResponseEntity<>(invoiceSer.getByCustomerId(id), HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Invoice> create(@RequestBody Invoice invoice){
		Invoice newInvoice = invoiceSer.add(invoice);
		return new ResponseEntity<>(newInvoice, HttpStatus.OK);
	}
	
	@PostMapping(value = "/update")
	public ResponseEntity<Invoice> update(@RequestBody Invoice invoice){
		return new ResponseEntity<>(invoiceSer.update(invoice), HttpStatus.OK);
	}
	
	@PostMapping(value = "/delete")
	public ResponseEntity<Invoice> delete(@RequestBody Invoice invoice){
		invoiceSer.delete(invoice);
		return ResponseEntity.ok().build();
	}
}
