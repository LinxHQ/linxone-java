package com.linxone.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linxone.entity.Invoice;
import com.linxone.service.InvoiceService;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceApi {
	@Autowired InvoiceService invoiceSer;
	
	@GetMapping({"/get","/"})
	public ResponseEntity<List<Invoice>> get(){
		return new ResponseEntity<>(invoiceSer.getAll(), HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<Invoice> create(@RequestBody Invoice invoice){
		return new ResponseEntity<>(invoiceSer.add(invoice), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<Invoice> update(@RequestBody Invoice invoice){
		return new ResponseEntity<>(invoiceSer.update(invoice), HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<Invoice> delete(@RequestBody Invoice invoice){
		return new ResponseEntity<>(invoiceSer.add(invoice), HttpStatus.OK);
	}
}
