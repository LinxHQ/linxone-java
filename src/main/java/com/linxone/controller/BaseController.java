package com.linxone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.linxone.entity.Invoice;
import com.linxone.service.InvoiceService;

@Controller
public class BaseController {
	@Autowired InvoiceService invoiceSer;
	
	@RequestMapping(value = {"/","/user/invoice/"})
	public String home(Model model) {
		List<Invoice> invoices = invoiceSer.getAll();
		model.addAttribute("invoices", invoices);
		return "home";
	}

	@RequestMapping(value = "/user/report")
	public String report() {
		return "report";
	}
	
//	@RequestMapping("/login")
//	public String login() {
//		return "login";
//	}
//
//	@RequestMapping("/logout")
//	public String logout() {
//		return "logout";
//	}
//
//	@RequestMapping("/403")
//	public String error() {
//		return "403";
//	}
	
}
