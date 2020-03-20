package com.linxone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.linxone.entity.Address;
import com.linxone.entity.CatalogProduct;
import com.linxone.entity.Customer;
import com.linxone.entity.Invoice;
import com.linxone.service.AddressService;
import com.linxone.service.CatalogProductService;
import com.linxone.service.CustomerService;
import com.linxone.service.InvoiceService;

@Controller
@RequestMapping("/user/invoice")
public class InvoiceController {
	@Autowired InvoiceService invoiceSer;
	@Autowired CustomerService customerSer;
	@Autowired AddressService addressSer;
	@Autowired CatalogProductService catalogProductSer;
	
	@GetMapping("/new")
	public String newInvoice(Model model) {
		List<CatalogProduct> catalogProducts = catalogProductSer.getAll();
		List<Address> addresses = addressSer.getAll();
		List<Customer> customers = customerSer.getAll();
		
		model.addAttribute("catalogProducts", catalogProducts);
		model.addAttribute("addresses", addresses);
		model.addAttribute("customers", customers);
		return "invoiceDetail";
	}
	
	@GetMapping("/detail/{id}")
	public String invoiceDetail(Model model, @PathVariable(name = "id")int id) {
		Invoice invoice = invoiceSer.getById(id);
		model.addAttribute("invoice", invoice);
		return "invoiceDetail";
	}
}
